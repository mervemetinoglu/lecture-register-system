import express from 'express';
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/student/student.controller.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/create', createStudent);
router.patch('/update/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);

export default router;
