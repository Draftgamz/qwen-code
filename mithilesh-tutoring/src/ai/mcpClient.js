// src/ai/mcpClient.js
import axios from 'axios';

class MCPClient {
  constructor(config = {}) {
    this.baseUrl = config.baseUrl || 'https://api.21st.dev'; // Placeholder for MCP Server
    this.apiKey = config.apiKey || process.env.MCP_API_KEY;
    this.timeout = config.timeout || 10000;
    
    this.client = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
        ...config.headers
      }
    });
  }

  // Method to get personalized learning paths
  async getLearningPath(studentData) {
    try {
      const response = await this.client.post('/learning-path', studentData);
      return response.data;
    } catch (error) {
      console.error('Error fetching learning path:', error);
      throw error;
    }
  }

  // Method to get AI-powered answers to student questions
  async getAnswer(question, context = {}) {
    try {
      const response = await this.client.post('/qa', {
        question,
        ...context
      });
      return response.data;
    } catch (error) {
      console.error('Error getting answer:', error);
      throw error;
    }
  }

  // Method to generate personalized study plans
  async getStudyPlan(studentGoals, proficiencyLevel) {
    try {
      const response = await this.client.post('/study-plan', {
        goals: studentGoals,
        proficiency: proficiencyLevel
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching study plan:', error);
      throw error;
    }
  }

  // Method to assess student's understanding
  async assessStudent(answers, questions) {
    try {
      const response = await this.client.post('/assessment', {
        answers,
        questions
      });
      return response.data;
    } catch (error) {
      console.error('Error assessing student:', error);
      throw error;
    }
  }
}

export default MCPClient;