import express from 'express';
import { quizController } from '../../controllers/index.js';
const router = express.Router();

// Start a new quiz session
router.post('/start', quizController.startQuiz);

// Submit all quiz answers
router.post('/submit', quizController.submitQuiz);

// Get quiz results
router.get('/results/:session_id', quizController.getResults);

export default router;