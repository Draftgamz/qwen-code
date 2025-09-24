import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const Experience = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Helmet>
        <title>Experience | Mithilesh Tutoring</title>
        <meta name="description" content="Explore the teaching experience of Mithilesh Kumar Yadav in IIT JEE coaching" />
      </Helmet>
      
      <Navbar />
      <main>
        <ExperienceTimeline />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Experience;