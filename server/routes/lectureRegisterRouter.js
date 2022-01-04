import express from 'express';
import {
  createLectureRegister,
  getLectureRegister,
} from '../controllers/lectureRegister/lectureRegister.controller.js';

const router = express.Router();

router.post('/', getLectureRegister);
router.post('/create', createLectureRegister);

export default router;
