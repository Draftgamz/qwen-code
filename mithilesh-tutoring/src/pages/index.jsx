import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutCard from '../components/AboutCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import TutorProfile from '../components/TutorProfile';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import BookingCalendar from '../components/BookingCalendar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Helmet>
        <title>Mithilesh Tutoring | Expert IIT JEE & Mathematics Tutoring</title>
        <meta name="description" content="Personalized IIT JEE and Mathematics tutoring with expert guidance from IIT Kanpur graduate Mithilesh Kumar Yadav" />
      </Helmet>
      
      <Navbar />
      <main>
        <HeroSection />
        <AboutCard />
        <ExperienceTimeline />
        <TutorProfile />
        <TestimonialsCarousel />
        <BookingCalendar />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Home;