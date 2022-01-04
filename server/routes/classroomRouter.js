import express from 'express';
import {
  getClassrooms,
  createClassroom,
  updateClassroom,
  deleteClassroom,
} from '../controllers/classroom/classroom.controller.js';

const router = express.Router();

router.get('/', getClassrooms);
router.post('/create', createClassroom);
router.patch('/update/:id', updateClassroom);
router.delete('/delete/:id', deleteClassroom);

export default router;
