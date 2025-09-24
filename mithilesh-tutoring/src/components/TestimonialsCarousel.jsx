import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "IIT Bombay Student",
      content: "Mithilesh sir's teaching methodology is exceptional. He made complex mathematical concepts simple and intuitive. I couldn't have achieved my AIR 43 without his guidance.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "IIT Madras Student",
      content: "The personalized approach and focus on building fundamentals helped me improve from 30% to 95% in Mathematics. Mithilesh sir truly cares about each student's progress.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "NIT Trichy Student",
      content: "His problem-solving techniques are unparalleled. The way he breaks down complex problems into manageable steps made a huge difference in my preparation.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 4,
      name: "Ananya Nair",
      role: "BITS Pilani Student",
      content: "Mithilesh sir not only teaches Mathematics but also builds confidence. His mentorship helped me overcome my fear of the subject and score excellently.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 5,
      name: "Karan Singh",
      role: "IIT Delhi Student",
      content: "The study materials and practice problems provided are of the highest quality. His teaching style is very engaging and makes learning enjoyable.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 6,
      name: "Sneha Reddy",
      role: "IIIT Hyderabad Student",
      content: "I joined as a below-average student in Mathematics. Mithilesh sir's personalized attention and guidance helped me excel. Extremely grateful for his support.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? "text-yellow-400" : "text-gray-600"} 
      />
    ));
  };

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
          <h2 className="text-4xl font-bold mb-4 neon-text">Student Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Hear from students who have achieved their dreams with personalized tutoring
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              initial={false}
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-effect rounded-2xl p-8 h-full">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-br from-neon-blue to-neon-purple w-24 h-24 rounded-full flex items-center justify-center">
                          <div className="bg-dark-bg w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <FaQuoteLeft className="text-neon-blue mb-4" />
                        <p className="text-gray-300 text-lg mb-6 italic">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-bold">{testimonial.name}</h4>
                            <p className="text-neon-purple">{testimonial.role}</p>
                          </div>
                          
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-button p-3 rounded-full"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-button p-3 rounded-full"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-neon-blue' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;