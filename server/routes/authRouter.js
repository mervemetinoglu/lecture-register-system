import express from 'express';
import {login, signup, getUsers} from '../controllers/auth/auth.controller.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/', verifyToken, getUsers);

export default router;
