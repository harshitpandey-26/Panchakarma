// scripts/seedDatabase.js
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import db from '../src/models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function seedQuestions() {
  try {
    console.log('Starting database seeding...');
    
    // Sync database
    await db.sequelize.sync({ force: false });
    
    // Check if questions already exist
    const questionCount = await db.Question.count();
    if (questionCount > 0) {
      console.log('Questions already exist in database. Skipping seeding.');
      return;
    }
    
    // Create questions
    const questions = await db.Question.bulkCreate([
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
    await db.Question_Option.bulkCreate([
      // Question 1: Appetite
      { question_id: 1, option_text: 'Irregular, sometimes strong sometimes absent', vata_score: 3, pitta_score: 0, kapha_score: 0 },
      { question_id: 1, option_text: 'Very strong, I get irritable if I miss a meal', vata_score: 0, pitta_score: 3, kapha_score: 0 },
      { question_id: 1, option_text: 'Steady, but I can skip meals without much problem', vata_score: 0, pitta_score: 0, kapha_score: 3 },
      
      // Question 2: Sleep
      { question_id: 2, option_text: 'Light, disturbed, difficulty falling asleep', vata_score: 3, pitta_score: 0, kapha_score: 0 },
      { question_id: 2, option_text: 'Sound, but may wake up hot or thirsty', vata_score: 0, pitta_score: 3, kapha_score: 0 },
      { question_id: 2, option_text: 'Deep, long, heavy, hard to wake up', vata_score: 0, pitta_score: 0, kapha_score: 3 },
      
      // Continue with all your options...
      // (Add the rest of your options here)
    ]);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedQuestions();