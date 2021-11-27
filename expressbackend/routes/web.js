import express from 'express';
import StudentController from '../controllers/studentController.js';
const router = express.Router();

router.get('/student', StudentController.getAllDoc)

export default router