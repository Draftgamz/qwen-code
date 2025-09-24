import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaChalkboardTeacher, FaLaptopCode, FaUserFriends } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Private Tutoring",
      company: "Self-Employed",
      period: "2017 - Present",
      description: "Providing one-on-one tutoring for IIT JEE aspirants, focusing on personalized learning paths and individual attention to maximize student outcomes.",
      icon: <FaUserFriends className="text-neon-blue" />
    },
    {
      id: 2,
      title: "Senior Mathematics Faculty",
      company: "Unacademy",
      period: "2020 - 2022",
      description: "Created and delivered engaging online lessons for thousands of IIT JEE students. Developed innovative teaching methods and curriculum content.",
      icon: <FaLaptopCode className="text-neon-purple" />
    },
    {
      id: 3,
      title: "Mathematics Teacher",
      company: "Narayana Group of Schools",
      period: "2015 - 2017",
      description: "Taught Mathematics to Class XI-XII students preparing for IIT JEE. Mentored over 200 students with a 90% success rate in competitive exams.",
      icon: <FaChalkboardTeacher className="text-neon-pink" />
    },
    {
      id: 4,
      title: "Mathematics Faculty",
      company: "Christ Academy",
      period: "2014 - 2015",
      description: "Started my teaching career, focusing on fundamentals of Mathematics for high school students and preparing them for competitive examinations.",
      icon: <FaSchool className="text-yellow-400" />
    }
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
          <h2 className="text-4xl font-bold mb-4 neon-text">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 text-2xl">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-neon-blue">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                    <div className="mt-4 text-sm text-gray-400">{exp.period}</div>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-dark-bg font-bold z-10">
                  {exp.id}
                </div>

                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;