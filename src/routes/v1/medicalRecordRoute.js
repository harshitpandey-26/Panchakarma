import express from 'express';
import { medicalRecordController } from '../../controllers/index.js';
const router = express.Router();

// Start a new quiz session
router.post('/', medicalRecordController.uploadRecord);

// Submit all quiz answers
router.get('/', medicalRecordController.getRecords);

// Get quiz results
router.delete('/:id', medicalRecordController.deleteRecord);

export default router;