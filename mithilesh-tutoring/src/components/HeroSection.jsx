import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaLightbulb, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-pink rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 neon-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Expert IIT JEE &<br />
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Mathematics Tutoring
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Personalized guidance from an IITian with 8+ years of teaching experience. 
              Unlock your potential with tailored learning paths and expert mentorship.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/booking">
                <motion.button
                  className="btn-primary flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCalendarAlt className="mr-2" /> Book a Session
                </motion.button>
              </Link>
              
              <button 
                className="btn-secondary flex items-center"
                onClick={() => scrollToSection('about')}
              >
                <FaChalkboardTeacher className="mr-2" /> Learn More
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 max-w-md w-full relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur opacity-20"></div>
              <div className="relative glass-card p-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-neon-blue to-neon-purple w-40 h-40 rounded-full flex items-center justify-center">
                    <div className="bg-dark-bg w-36 h-36 rounded-full flex items-center justify-center">
                      <FaChalkboardTeacher size={80} className="text-neon-blue" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-4">Mithilesh Kumar Yadav</h3>
                <p className="text-gray-300 text-center mb-4">
                  IIT Kanpur Graduate | 8+ Years Teaching Experience
                </p>
                
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-blue">500+</div>
                    <div className="text-sm text-gray-400">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-purple">95%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-pink">8+</div>
                    <div className="text-sm text-gray-400">Years Exp</div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full glass-effect border border-glass-border flex items-center justify-center">
                        <FaStar className="text-yellow-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className="animate-bounce"
            onClick={() => scrollToSection('about')}
            whileHover={{ y: -5 }}
          >
            <FaChevronDown size={30} className="text-neon-blue" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;