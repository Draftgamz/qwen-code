import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import TutorProfile from '../components/TutorProfile';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const Profile = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Helmet>
        <title>Profile | Mithilesh Tutoring</title>
        <meta name="description" content="Detailed profile of Mithilesh Kumar Yadav, expert IIT JEE tutor with 8+ years of experience" />
      </Helmet>
      
      <Navbar />
      <main>
        <TutorProfile />
        <TestimonialsCarousel />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Profile;