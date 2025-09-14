// seeders/20250914120921-quiz-data.js
'use strict';

const db = require('../models/index');
const { Question, Question_Option } = db;

module.exports = {
  up: async function(queryInterface, Sequelize) {
    try {
      // Check if questions already exist
      const questionCount = await Question.count();
      if (questionCount > 0) {
        console.log('Questions already seeded');
        return;
      }
      
      // Create questions
      const questions = await Question.bulkCreate([
       { question_text: 'How is your appetite typically?', category: 'general' },
        { question_text: 'How would you describe your sleep?', category: 'general' },
        { question_text: 'Under stress, you are most likely to:', category: 'general' },
        { question_text: 'How is your skin typically?', category: 'general' },
        { question_text: 'How is your energy level throughout the day?', category: 'general' },
        { question_text: 'How do you handle hot weather?', category: 'general' },
        { question_text: 'How do you handle cold weather?', category: 'general' },
        { question_text: 'How is your memory and concentration?', category: 'general' },
        { question_text: 'How would you describe your body frame?', category: 'general' },
        { question_text: 'How do you make decisions?', category: 'general' }
      ]);
      
      // Create options for each question
      await Question_Option.bulkCreate([
        // Question 1: Appetite
        { question_id: 1, option_text: 'Irregular, sometimes strong sometimes absent', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 1, option_text: 'Very strong, I get irritable if I miss a meal', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 1, option_text: 'Steady, but I can skip meals without much problem', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        
        // Question 2: Sleep
        { question_id: 2, option_text: 'Light, disturbed, difficulty falling asleep', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 2, option_text: 'Sound, but may wake up hot or thirsty', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 2, option_text: 'Deep, long, heavy, hard to wake up', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        
        // Question 3: Stress response
        { question_id: 3, option_text: 'Worry and feel anxious', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 3, option_text: 'Become irritable and critical', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 3, option_text: 'Withdraw and avoid confrontation', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        
        // Question 4: Skin
        { question_id: 4, option_text: 'Dry, thin, cool, and can be rough', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 4, option_text: 'Oily, warm, and prone to redness/rashes', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 4, option_text: 'Thick, oily, cool, and smooth', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        
        // Question 5: Energy level
        { question_id: 5, option_text: 'Variable energy, bursts of energy followed by fatigue', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 5, option_text: 'Consistent high energy throughout the day', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 5, option_text: 'Steady, slow, and sustained energy', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        
        // Question 6: Hot weather
        { question_id: 6, option_text: 'I dislike it and prefer cool weather', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        { question_id: 6, option_text: 'I enjoy it, but can get overheated easily', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 6, option_text: 'I can tolerate it but prefer moderate temperatures', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        
        // Question 7: Cold weather
        { question_id: 7, option_text: 'I dislike it and feel very uncomfortable', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 7, option_text: 'I enjoy it and feel comfortable', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        { question_id: 7, option_text: 'I can tolerate it but prefer warmer temperatures', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        
        // Question 8: Memory and concentration
        { question_id: 8, option_text: 'Quick to learn but quick to forget', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 8, option_text: 'Sharp, focused, and good memory', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 8, option_text: 'Slow to learn but never forgets', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        
        // Question 9: Body frame
        { question_id: 9, option_text: 'Thin, light, with prominent joints', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 9, option_text: 'Medium build, well-proportioned', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 9, option_text: 'Large, solid, with tendency to gain weight', vata_score: 0, pitta_score: 0, kapha_score: 3 },
        
        // Question 10: Decision making
        { question_id: 10, option_text: 'Quick, impulsive, may change mind often', vata_score: 3, pitta_score: 0, kapha_score: 0 },
        { question_id: 10, option_text: 'Decisive, logical, and firm', vata_score: 0, pitta_score: 3, kapha_score: 0 },
        { question_id: 10, option_text: 'Slow, methodical, and cautious', vata_score: 0, pitta_score: 0, kapha_score: 3 }
        // ... rest of your options
      ]);
      
      console.log('Questions and options seeded successfully');
    } catch (error) {
      console.error('Error seeding questions:', error);
      throw error;
    }
  },

  down: async function(queryInterface, Sequelize) {
    try {
      // Delete all question options first (due to foreign key constraints)
      await Question_Option.destroy({ where: {} });
      
      // Delete all questions
      await Question.destroy({ where: {} });
      
      console.log('Questions and options removed successfully');
    } catch (error) {
      console.error('Error removing questions:', error);
      throw error;
    }
  }
};