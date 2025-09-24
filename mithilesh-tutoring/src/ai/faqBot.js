// src/ai/faqBot.js
import MCPClient from './mcpClient';

class FAQBot {
  constructor() {
    this.mcpClient = new MCPClient();
    this.faqs = [
      {
        question: "What subjects do you teach?",
        answer: "I specialize in Mathematics, Physics, and Chemistry for IIT JEE preparation, with a primary focus on Mathematics."
      },
      {
        question: "How experienced are you?",
        answer: "I have over 8 years of experience teaching IIT JEE aspirants, with a 95% success rate among my students."
      },
      {
        question: "What's your teaching methodology?",
        answer: "I focus on building strong fundamentals, problem-solving techniques, and exam strategies tailored to each student's learning style."
      },
      {
        question: "Do you provide study materials?",
        answer: "Yes, I provide comprehensive study materials, practice problems, and mock tests designed specifically for IIT JEE preparation."
      },
      {
        question: "How do I book a session?",
        answer: "You can book a session through our booking system. Select a date and time that works for you and complete the payment."
      },
      {
        question: "Do you offer group classes or one-on-one tutoring?",
        answer: "I primarily offer one-on-one tutoring to provide personalized attention, but I can arrange small group sessions upon request."
      },
      {
        question: "What's the duration of each session?",
        answer: "Sessions are typically 60, 90, or 120 minutes long based on the student's needs and availability."
      },
      {
        question: "How do I track my progress?",
        answer: "I provide regular assessments and progress reports. You'll have access to a dashboard showing your improvement over time."
      }
    ];
  }

  async getResponse(userInput) {
    const lowerInput = userInput.toLowerCase();
    
    // Check if it matches any FAQ
    for (const faq of this.faqs) {
      if (this.isSimilar(lowerInput, faq.question.toLowerCase())) {
        return {
          answer: faq.answer,
          type: 'faq',
          confidence: 'high'
        };
      }
    }
    
    // If no FAQ matches, try to get from AI
    try {
      // Extract key topics from the question for better context
      const topics = this.extractTopics(userInput);
      
      // Get answer from MCP AI
      const aiResponse = await this.mcpClient.getAnswer(userInput, {
        context: 'IIT JEE tutoring',
        topics: topics
      });
      
      return {
        answer: aiResponse.answer || "I'm not sure about this. Please contact us for more specific information.",
        type: 'ai-generated',
        confidence: aiResponse.confidence || 'medium'
      };
    } catch (error) {
      console.error('Error getting response from AI:', error);
      return {
        answer: "I'm unable to answer that right now. Please contact us directly for assistance.",
        type: 'fallback',
        confidence: 'low'
      };
    }
  }

  // Simple similarity function to match questions with FAQs
  isSimilar(input, faqQuestion) {
    const inputWords = input.split(' ');
    const faqWords = faqQuestion.split(' ');
    
    // Count common words
    let commonCount = 0;
    for (const word of inputWords) {
      if (faqWords.includes(word)) {
        commonCount++;
      }
    }
    
    // If more than half of the words match, consider it a match
    return commonCount / Math.max(inputWords.length, faqWords.length) > 0.4;
  }

  // Extract key topics from a question
  extractTopics(question) {
    const topics = [];
    const lowerQuestion = question.toLowerCase();
    
    // Define possible topics
    const possibleTopics = [
      'mathematics', 'physics', 'chemistry', 'iit jee', 'tutoring', 
      'session', 'booking', 'pricing', 'schedule', 'syllabus', 
      'study', 'material', 'exam', 'preparation', 'problem'
    ];
    
    for (const topic of possibleTopics) {
      if (lowerQuestion.includes(topic)) {
        topics.push(topic);
      }
    }
    
    return topics;
  }

  // Get all available FAQs
  getFAQs() {
    return this.faqs;
  }
}

export default FAQBot;