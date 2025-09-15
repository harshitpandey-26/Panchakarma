import express from 'express';
import infoController, { clinicController } from '../../controllers/index.js';
import authMiddleware from '../../middlewares/authMiddleware.js';
import {authorizeRoles} from '../../middlewares/roleMiddleware.js'
import upload from '../../config/multerConfig.js';

import authRoute from './authRoute.js';
import quizRoute from './quizRoute.js';

import medicalRecordRoute from './medicalRecordRoute.js';

import clinicRoute from './clinicRoute.js';

import { doctorController } from '../../controllers/index.js';

const router = express.Router();

router.get('/info', infoController.info);
router.use('/auth',authRoute);
router.use('/quiz',authMiddleware,authorizeRoles("patient"),quizRoute);
router.use('/medical-record',authMiddleware,authorizeRoles("patient"),upload.single("records"),medicalRecordRoute);

router.get('/clinics',authMiddleware,clinicController.getAllClinic);
router.get('/clinics/:id',authMiddleware,clinicController.getClinicByIdPublic);

router.use('/clinic',authMiddleware,authorizeRoles("clinic"),clinicRoute);

// Public route for accepting invitation
router.post('/invitation/accept/:token', doctorController.acceptInvitation);


// router.use('/quiz',quizRoute);

export default router;