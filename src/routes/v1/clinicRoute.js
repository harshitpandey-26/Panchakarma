import express from 'express';
import { clinicController } from '../../controllers/index.js';
import { doctorController } from '../../controllers/index.js';
const router = express.Router();

router.get('/my-clinic/:id', clinicController.getClinicById);

router.patch('/:id', clinicController.updateClinic);

router.delete('/:id',clinicController.deleteClinic);

// For doctors creation and reading

// Clinic users can create doctors
router.post('/doctors',  doctorController.createDoctor);

// Clinic users can view their doctors
router.get('/doctors', doctorController.getClinicDoctors);


export default router;