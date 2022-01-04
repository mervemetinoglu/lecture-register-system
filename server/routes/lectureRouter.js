import express from 'express';
import {
  getLectures,
  createLecture,
  updateLecture,
  deleteLecture,
} from '../controllers/lecture/lecture.controller.js';

const router = express.Router();

router.get('/', getLectures);
router.post('/create', createLecture);
router.patch('/update/:id', updateLecture);
router.delete('/delete/:id', deleteLecture);

export default router;
