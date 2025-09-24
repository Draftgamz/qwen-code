import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import BookingCalendar from '../components/BookingCalendar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const Booking = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Helmet>
        <title>Book a Session | Mithilesh Tutoring</title>
        <meta name="description" content="Book a personalized tutoring session with Mithilesh Kumar Yadav for IIT JEE preparation" />
      </Helmet>
      
      <Navbar />
      <main>
        <BookingCalendar />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Booking;