import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGraduationCap, FaStar, FaChalkboardTeacher, FaCalendarAlt, FaUser, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaGraduationCap /> },
    { name: 'About', path: '/about', icon: <FaStar /> },
    { name: 'Experience', path: '/experience', icon: <FaChalkboardTeacher /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
    { name: 'Booking', path: '/booking', icon: <FaCalendarAlt /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 glass-effect backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold neon-text flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaGraduationCap className="mr-2" /> Mithilesh Tutoring
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.path}
              className="px-4 py-2 rounded-lg flex items-center transition-all duration-300 hover:bg-glass hover:border-neon-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden mt-4 glass-effect p-4 rounded-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="px-4 py-3 rounded-lg flex items-center bg-glass border border-glass-border hover:border-neon-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;