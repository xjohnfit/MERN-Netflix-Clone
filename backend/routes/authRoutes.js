import express from 'express';
import {signUp, login} from '../controllers/authControllers.js';

const router = express.Router();

// Register a new user
router.post('/signup', signUp);
router.post('/login', login);

export default router;