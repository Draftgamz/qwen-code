import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import AboutCard from '../components/AboutCard';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const About = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Helmet>
        <title>About Mithilesh | IIT Tutoring</title>
        <meta name="description" content="Learn about Mithilesh Kumar Yadav, IIT Kanpur graduate and expert IIT JEE mathematics tutor" />
      </Helmet>
      
      <Navbar />
      <main>
        <AboutCard />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default About;