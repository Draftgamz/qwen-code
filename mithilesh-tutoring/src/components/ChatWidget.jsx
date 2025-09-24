import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaChevronDown } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Welcome to Mithilesh Tutoring. How can I assist you with your IIT JEE preparation?";
    } else if (lowerInput.includes('booking') || lowerInput.includes('session') || lowerInput.includes('schedule')) {
      return "You can book a session by visiting the Booking page. Would you like me to guide you through the process?";
    } else if (lowerInput.includes('math') || lowerInput.includes('mathematics') || lowerInput.includes('calculus')) {
      return "Mathematics is one of the key subjects for IIT JEE. Mithilesh Sir specializes in all areas of mathematics. Would you like to know about specific topics?";
    } else if (lowerInput.includes('physics') || lowerInput.includes('chemistry')) {
      return "Mithilesh Sir provides expert tutoring in Physics and Chemistry as well. These subjects require a strong conceptual understanding.";
    } else if (lowerInput.includes('experience') || lowerInput.includes('teacher') || lowerInput.includes('tutor')) {
      return "Mithilesh Sir is an IIT Kanpur graduate with 8+ years of teaching experience. He has helped 500+ students achieve excellent results.";
    } else if (lowerInput.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else if (lowerInput.includes('pricing') || lowerInput.includes('cost') || lowerInput.includes('fee')) {
      return "We offer different session packages. Please visit the Booking page for detailed pricing information.";
    } else {
      return "I'm here to help with information about Mithilesh Tutoring services. You can ask about our tutoring packages, teacher experience, session availability, or IIT JEE preparation tips.";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <motion.div
          className="glass-effect rounded-2xl w-80 h-[500px] flex flex-col shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-glass-border rounded-t-2xl">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-neon-blue to-neon-purple w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <FaRobot className="text-dark-bg" />
              </div>
              <div>
                <h3 className="font-bold">AI Assistant</h3>
                <p className="text-xs text-green-400">Online now</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-gray-400 hover:text-white"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-y-auto">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-br-none'
                        : 'bg-glass border border-glass-border rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                className="flex mb-4 justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="bg-glass border border-glass-border rounded-2xl rounded-bl-none p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-glass-border rounded-b-2xl">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow glass-input rounded-l-full px-4"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 rounded-r-full hover:opacity-90 transition-opacity"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.button
          className="glass-effect w-16 h-16 rounded-full flex items-center justify-center shadow-lg neon-glow"
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <FaRobot size={24} className="text-neon-blue" />
        </motion.button>
      )}
    </div>
  );
};

export default ChatWidget;