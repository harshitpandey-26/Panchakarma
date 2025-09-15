import express from 'express';
import { clinicController } from '../../controllers/index.js';
const router = express.Router();

router.get('/my-clinic/:id', clinicController.getClinicById);

router.patch('/:id', clinicController.updateClinic);

router.delete('/:id',clinicController.deleteClinic);

export default router;