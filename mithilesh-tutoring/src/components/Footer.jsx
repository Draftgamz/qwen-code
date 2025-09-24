import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Profile', path: '/profile' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const subjects = [
    { name: 'IIT JEE Mathematics' },
    { name: 'Advanced Calculus' },
    { name: 'Algebra & Trigonometry' },
    { name: 'Coordinate Geometry' },
    { name: 'Vector & 3D Geometry' },
    { name: 'Probability & Statistics' },
  ];

  return (
    <footer className="pt-20 pb-10 glass-effect backdrop-blur-md border-t border-glass-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-neon-blue text-2xl mr-3" />
              <h3 className="text-2xl font-bold">Mithilesh Tutoring</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Providing expert IIT JEE and Mathematics tutoring with personalized guidance 
              to help students achieve their academic goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-6 neon-text">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Subjects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-xl font-bold mb-6 neon-text">Subjects</h4>
            <ul className="space-y-3">
              {subjects.map((subject, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span> {subject.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl font-bold mb-6 neon-text">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-neon-blue mt-1 mr-3" />
                <span className="text-gray-400">Kolkata, West Bengal, India</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-neon-blue mr-3" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-neon-blue mr-3" />
                <span className="text-gray-400">contact@mithilesh-tutoring.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-neon-blue mr-3" />
                <span className="text-gray-400">Mon-Sat: 9am - 9pm</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-glass-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mithilesh Tutoring. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-neon-blue text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-neon-blue text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-neon-blue text-sm transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;