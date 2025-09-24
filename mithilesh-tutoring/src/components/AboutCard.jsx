import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaAward } from 'react-icons/fa';

const AboutCard = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-2 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur opacity-30"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Mithilesh Kumar Yadav" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Mithilesh Kumar Yadav</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              As an IIT Kanpur graduate with over 8 years of dedicated teaching experience, 
              I have helped hundreds of students achieve their dreams of getting into top 
              engineering colleges. My passion lies in simplifying complex mathematical 
              concepts and making them accessible to every student, regardless of their 
              starting point.
            </p>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              My teaching methodology focuses on building a strong foundational understanding, 
              problem-solving techniques, and exam strategies that have helped my students 
              achieve consistently high ranks in IIT JEE and other competitive exams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <FaGraduationCap className="text-neon-blue mr-3 text-xl" />
                  <h4 className="text-xl font-semibold">Education</h4>
                </div>
                <p className="text-gray-300">
                  IIT Kanpur (B.Tech in Computer Science)
                </p>
              </div>

              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <FaBook className="text-neon-purple mr-3 text-xl" />
                  <h4 className="text-xl font-semibold">Subjects</h4>
                </div>
                <p className="text-gray-300">
                  Mathematics, Physics, Chemistry for IIT JEE
                </p>
              </div>

              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <FaChalkboardTeacher className="text-neon-pink mr-3 text-xl" />
                  <h4 className="text-xl font-semibold">Experience</h4>
                </div>
                <p className="text-gray-300">
                  8+ years in IIT JEE coaching
                </p>
              </div>

              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <FaAward className="text-yellow-400 mr-3 text-xl" />
                  <h4 className="text-xl font-semibold">Achievement</h4>
                </div>
                <p className="text-gray-300">
                  95% success rate with students
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Download Resume
              </button>
              <button className="btn-secondary">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;