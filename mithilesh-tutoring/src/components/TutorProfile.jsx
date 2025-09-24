import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaLanguage, FaTrophy, FaChartLine, FaLightbulb, FaStar } from 'react-icons/fa';

const TutorProfile = () => {
  const subjects = [
    { name: "Mathematics", level: "Expert", icon: <FaLightbulb className="text-neon-blue" /> },
    { name: "Physics", level: "Advanced", icon: <FaLightbulb className="text-neon-purple" /> },
    { name: "Chemistry", level: "Intermediate", icon: <FaLightbulb className="text-neon-pink" /> },
    { name: "IIT JEE Prep", level: "Expert", icon: <FaLightbulb className="text-yellow-400" /> },
  ];

  const achievements = [
    { title: "Student Success Rate", value: "95%", description: "Successfully guided students to top engineering colleges" },
    { title: "Years of Experience", value: "8+", description: "Continuously improving teaching methodologies" },
    { title: "Students Taught", value: "500+", description: "Personalized attention to each student" },
    { title: "Perfect Scores", value: "120+", description: "Students scoring full marks in Mathematics" },
  ];

  const languages = [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Native" },
    { name: "Bengali", proficiency: "Conversational" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Tutor Profile</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-neon-blue to-neon-purple w-32 h-32 rounded-full flex items-center justify-center">
                  <div className="bg-dark-bg w-28 h-28 rounded-full flex items-center justify-center">
                    <FaChalkboardTeacher size={60} className="text-neon-blue" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Mithilesh Kumar Yadav</h3>
              <p className="text-neon-blue mb-4">IIT Kanpur Graduate</p>
              
              <div className="flex justify-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mx-1" />
                  ))}
                  <span className="ml-2 text-gray-300">(4.9/5)</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Response Time</span>
                  <span className="text-green-400">Within 1 hour</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Availability</span>
                  <span className="text-green-400">Mon-Sat, 9am-9pm</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white">8+ years</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subjects & Skills */}
          <motion.div 
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <FaLightbulb className="text-2xl text-neon-blue mr-3" />
                <h3 className="text-2xl font-bold">Subjects & Expertise</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjects.map((subject, index) => (
                  <div key={index} className="glass-card p-4 flex items-center">
                    <div className="text-2xl mr-4">
                      {subject.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{subject.name}</h4>
                      <p className="text-gray-400">{subject.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <FaLanguage className="text-2xl text-neon-purple mr-3" />
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-glass-border last:border-0">
                    <span className="text-lg">{lang.name}</span>
                    <span className="text-gray-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <FaTrophy className="text-2xl text-neon-pink mr-3" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="glass-card p-4 text-center">
                    <div className="text-3xl font-bold text-neon-blue mb-2">{achievement.value}</div>
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TutorProfile;