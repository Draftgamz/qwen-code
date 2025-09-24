import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the contact data to your backend
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Helmet>
        <title>Contact | Mithilesh Tutoring</title>
        <meta name="description" content="Get in touch with Mithilesh Kumar Yadav for IIT JEE tutoring inquiries" />
      </Helmet>
      
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Contact Us</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Have questions about our tutoring services? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="glass-effect rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-glass p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-neon-blue text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">Kolkata, West Bengal, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-glass p-3 rounded-lg mr-4">
                      <FaPhone className="text-neon-purple text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-glass p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-neon-pink text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">contact@mithilesh-tutoring.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-glass p-3 rounded-lg mr-4">
                      <FaClock className="text-yellow-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                      <p className="text-gray-400">Mon-Sat: 9:00 AM - 9:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="glass-button w-10 h-10 rounded-full flex items-center justify-center">
                      <FaTwitter />
                    </a>
                    <a href="#" className="glass-button w-10 h-10 rounded-full flex items-center justify-center">
                      <FaFacebook />
                    </a>
                    <a href="#" className="glass-button w-10 h-10 rounded-full flex items-center justify-center">
                      <FaInstagram />
                    </a>
                    <a href="#" className="glass-button w-10 h-10 rounded-full flex items-center justify-center">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="glass-effect rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-400 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glass-input w-full"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="glass-input w-full"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass-input w-full"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass-input w-full h-32"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Contact;