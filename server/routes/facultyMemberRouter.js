import express from 'express';
import {
  getFacultyMembers,
  createFacultyMember,
  updateFacultyMember,
  deleteFacultyMember,
} from '../controllers/facultyMember/facultyMember.controller.js';

const router = express.Router();

router.get('/', getFacultyMembers);
router.post('/create', createFacultyMember);
router.patch('/update/:id', updateFacultyMember);
router.delete('/delete/:id', deleteFacultyMember);

export default router;
