// src/utils/paymentUtils.js
import { loadStripe } from '@stripe/stripe-js';
import Razorpay from 'razorpay';

// Stripe utility functions
class StripeUtil {
  constructor() {
    this.stripePromise = null;
    this.publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  }

  async initialize() {
    if (!this.publishableKey) {
      console.warn('Stripe publishable key not found');
      return null;
    }
    
    if (!this.stripePromise) {
      this.stripePromise = loadStripe(this.publishableKey);
    }
    
    return this.stripePromise;
  }

  async createPaymentIntent(amount, currency = 'inr', metadata = {}) {
    try {
      // In a real application, this would call your backend to create a payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Stripe uses smallest currency unit (paise for INR)
          currency,
          metadata
        }),
      });

      const { client_secret } = await response.json();
      return client_secret;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  }

  async processPayment(amount, currency = 'inr', metadata = {}) {
    try {
      const stripe = await this.initialize();
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Create a payment intent (in a real app, this would be done on backend)
      const clientSecret = await this.createPaymentIntent(amount, currency, metadata);

      // Confirm the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {}, // In real implementation, this would be the card element
          billing_details: {
            name: metadata.customerName || '',
            email: metadata.customerEmail || '',
          },
        }
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      return result;
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  }
}

// Razorpay utility functions
class RazorpayUtil {
  constructor() {
    this.keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;
    this.keySecret = process.env.REACT_APP_RAZORPAY_KEY_SECRET;
    
    // For frontend-only implementation (not recommended for production)
    // In production, always create orders from your backend
  }

  async createOrder(amount, currency = 'INR', options = {}) {
    try {
      // In a real application, this would call your backend to create an order
      const response = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Razorpay uses smallest currency unit (paise for INR)
          currency,
          ...options
        }),
      });

      const orderData = await response.json();
      return orderData;
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      throw error;
    }
  }

  async openRazorpayCheckout(amount, studentData, sessionData) {
    try {
      // Create order via backend API
      const orderData = await this.createOrder(amount, 'INR', {
        student_id: studentData.id,
        session_data: sessionData
      });

      // Options for the Razorpay checkout
      const options = {
        key: this.keyId,
        amount: Math.round(amount * 100), // Amount in paise
        currency: 'INR',
        name: 'Mithilesh Tutoring',
        description: `Payment for tutoring session`,
        image: 'https://mithilesh-tutoring.com/logo.png', // Replace with actual logo
        order_id: orderData.id, // Use the order ID from backend
        handler: async function(response) {
          // Handle successful payment
          console.log('Payment successful:', response);
          
          // Verify payment with backend
          const verifyResponse = await fetch('/api/verify-razorpay-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...response,
              amount: Math.round(amount * 100)
            }),
          });
          
          const verifyData = await verifyResponse.json();
          if (verifyData.status === 'captured') {
            alert('Payment successful! Your session has been booked.');
            // Update UI or redirect as needed
          } else {
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: studentData.name,
          email: studentData.email,
          contact: studentData.phone,
        },
        notes: {
          purpose: 'Tutoring session payment',
          student_id: studentData.id,
          session_data: JSON.stringify(sessionData)
        },
        theme: {
          color: '#00eeff', // Neon blue to match the site theme
        },
      };

      // Open the Razorpay checkout
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error opening Razorpay checkout:', error);
      alert('There was an issue with the payment. Please try again or contact support.');
      throw error;
    }
  }
}

// Combined payment utility
class PaymentUtil {
  constructor() {
    this.stripeUtil = new StripeUtil();
    this.razorpayUtil = new RazorpayUtil();
  }

  async processPayment(paymentMethod, amount, studentData, sessionData) {
    switch (paymentMethod.toLowerCase()) {
      case 'stripe':
        return await this.stripeUtil.processPayment(amount, 'inr', {
          customerName: studentData.name,
          customerEmail: studentData.email,
          sessionId: sessionData.id,
          purpose: 'Tutoring session'
        });
      
      case 'razorpay':
        return await this.razorpayUtil.openRazorpayCheckout(amount, studentData, sessionData);
      
      default:
        throw new Error(`Unsupported payment method: ${paymentMethod}`);
    }
  }

  // Calculate pricing based on session type
  calculateSessionPrice(sessionType, duration) {
    const basePrices = {
      basic: 500,      // 60 mins
      advanced: 750,   // 90 mins
      intensive: 1000  // 120 mins
    };

    // Get base price
    const basePrice = basePrices[sessionType] || basePrices.basic;

    // Adjust for duration beyond base
    if (duration > 60 && sessionType === 'basic') {
      return basePrice + (Math.floor((duration - 60) / 30) * 250);
    } else if (duration > 90 && sessionType === 'advanced') {
      return basePrice + (Math.floor((duration - 90) / 30) * 200);
    } else if (duration > 120 && sessionType === 'intensive') {
      return basePrice + (Math.floor((duration - 120) / 30) * 150);
    }

    return basePrice;
  }

  // Get available payment methods for a region
  getAvailablePaymentMethods(countryCode = 'IN') {
    const methods = [];

    if (countryCode === 'IN') {
      methods.push(
        { id: 'razorpay', name: 'Razorpay', icon: '💳', supported: true },
        { id: 'stripe', name: 'Stripe', icon: '💳', supported: true }
      );
    } else {
      methods.push(
        { id: 'stripe', name: 'Stripe', icon: '💳', supported: true }
      );
    }

    return methods;
  }
}

// Export the payment utility
export default new PaymentUtil();

// Export individual utilities if needed separately
export { StripeUtil, RazorpayUtil };