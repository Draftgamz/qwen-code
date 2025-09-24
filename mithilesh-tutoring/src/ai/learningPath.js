// src/ai/learningPath.js
import MCPClient from './mcpClient';

class LearningPath {
  constructor() {
    this.mcpClient = new MCPClient();
  }

  async generatePath(studentData) {
    try {
      // Get personalized learning path from AI
      const response = await this.mcpClient.getLearningPath(studentData);
      
      // Process and format the response
      return this.formatLearningPath(response);
    } catch (error) {
      console.error('Error generating learning path:', error);
      return this.getDefaultLearningPath(studentData);
    }
  }

  async updatePath(studentId, progressData) {
    try {
      // Update the learning path based on student's progress
      const response = await this.mcpClient.assessStudent(
        progressData.answers,
        progressData.questions
      );
      
      // Adjust learning path based on assessment
      return this.adjustPath(response, studentId);
    } catch (error) {
      console.error('Error updating learning path:', error);
      throw error;
    }
  }

  // Format the AI response into a structured learning path
  formatLearningPath(aiResponse) {
    if (!aiResponse || !aiResponse.topics) {
      return this.getDefaultLearningPath();
    }

    const learningPath = {
      id: Date.now(),
      createdAt: new Date(),
      topics: [],
      milestones: [],
      recommendedSchedule: aiResponse.schedule || '3-6 months',
      difficultyLevel: aiResponse.difficulty || 'intermediate'
    };

    // Process topics from AI response
    for (const topic of aiResponse.topics) {
      learningPath.topics.push({
        id: topic.id || Date.now() + Math.random(),
        name: topic.name,
        priority: topic.priority || 'medium',
        estimatedTime: topic.estimatedTime || '2-4 weeks',
        prerequisites: topic.prerequisites || [],
        resources: topic.resources || [],
        practiceProblems: topic.practiceProblems || 10,
        masteryThreshold: topic.masteryThreshold || 80 // percentage
      });
    }

    // Create milestones based on topics
    const milestoneInterval = Math.ceil(learningPath.topics.length / 4);
    for (let i = 0; i < learningPath.topics.length; i += milestoneInterval) {
      if (i > 0) { // Skip the first milestone
        learningPath.milestones.push({
          id: `milestone-${i}`,
          name: `Mastery Checkpoint ${learningPath.milestones.length + 1}`,
          topics: learningPath.topics.slice(0, i + 1).map(t => t.id),
          description: `Assessment of topics covered so far`
        });
      }
    }

    // Add final milestone
    learningPath.milestones.push({
      id: 'milestone-final',
      name: 'Final Assessment',
      topics: learningPath.topics.map(t => t.id),
      description: 'Comprehensive evaluation of all topics'
    });

    return learningPath;
  }

  // Default learning path if AI is unavailable
  getDefaultLearningPath(studentData = {}) {
    const baseTopics = [
      { name: 'Algebra Fundamentals', estimatedTime: '2 weeks' },
      { name: 'Trigonometry', estimatedTime: '2 weeks' },
      { name: 'Coordinate Geometry', estimatedTime: '3 weeks' },
      { name: 'Calculus Basics', estimatedTime: '3 weeks' },
      { name: 'Vectors & 3D Geometry', estimatedTime: '2 weeks' },
      { name: 'Advanced Calculus', estimatedTime: '4 weeks' },
      { name: 'Probability & Statistics', estimatedTime: '2 weeks' },
      { name: 'Mock Tests & Problem Solving', estimatedTime: '4 weeks' }
    ];

    return {
      id: 'default-path',
      createdAt: new Date(),
      topics: baseTopics.map((topic, index) => ({
        id: `topic-${index}`,
        name: topic.name,
        priority: 'high',
        estimatedTime: topic.estimatedTime,
        prerequisites: index > 0 ? [baseTopics[index - 1].name] : [],
        resources: ['Textbook Chapter', 'Video Lecture', 'Practice Problems'],
        practiceProblems: 20,
        masteryThreshold: 75
      })),
      milestones: [
        {
          id: 'milestone-1',
          name: 'Foundation Assessment',
          topics: ['topic-0', 'topic-1'],
          description: 'Evaluation of basic algebra and trigonometry skills'
        },
        {
          id: 'milestone-2',
          name: 'Geometry Mastery',
          topics: ['topic-0', 'topic-1', 'topic-2', 'topic-3'],
          description: 'Assessment of geometry and calculus fundamentals'
        },
        {
          id: 'milestone-final',
          name: 'Final Assessment',
          topics: Array.from({ length: baseTopics.length }, (_, i) => `topic-${i}`),
          description: 'Comprehensive evaluation of all topics'
        }
      ],
      recommendedSchedule: '4-6 months',
      difficultyLevel: studentData.difficulty || 'intermediate'
    };
  }

  // Adjust the learning path based on student assessment
  adjustPath(assessment, studentId) {
    // This would contain logic to modify the path based on assessment results
    // For now, returning the original assessment with adjustment notes
    return {
      ...assessment,
      adjustments: this.calculateAdjustments(assessment.results || []),
      nextSteps: this.calculateNextSteps(assessment.results || [])
    };
  }

  // Calculate necessary adjustments based on assessment results
  calculateAdjustments(results) {
    const adjustments = [];
    
    for (const result of results) {
      if (result.score < result.masteryThreshold) {
        adjustments.push({
          topic: result.topic,
          action: 'additional-practice',
          recommendedTime: '1 week',
          resources: ['Additional practice problems', 'Video explanation']
        });
      } else if (result.score > result.masteryThreshold + 20) {
        adjustments.push({
          topic: result.topic,
          action: 'accelerate',
          nextTopic: result.nextTopic || 'N/A'
        });
      }
    }
    
    return adjustments;
  }

  // Calculate next steps based on assessment results
  calculateNextSteps(results) {
    const nextSteps = [];
    
    // Find topics that need improvement
    const weakTopics = results.filter(r => r.score < r.masteryThreshold);
    if (weakTopics.length > 0) {
      nextSteps.push({
        action: 'Focus on weak areas',
        topics: weakTopics.map(w => w.topic),
        priority: 'high'
      });
    }
    
    // Find topics that are mastered
    const masteredTopics = results.filter(r => r.score >= r.masteryThreshold + 20);
    if (masteredTopics.length > 0) {
      nextSteps.push({
        action: 'Advance to next topics',
        topics: masteredTopics.map(m => m.topic),
        priority: 'normal'
      });
    }
    
    return nextSteps;
  }
}

export default LearningPath;