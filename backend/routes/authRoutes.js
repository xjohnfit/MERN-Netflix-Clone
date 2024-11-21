import express from 'express';
import UserModel from '../models/userModel.js';
import {authController} from '../controllers/authControllers.js';

const router = express.Router();

// Register a new user
router.post('/register', authController);

export default router;