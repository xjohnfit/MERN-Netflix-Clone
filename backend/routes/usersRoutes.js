import express from 'express';
import verifyToken from '../utils/verifyToken.js';
import { createUser, getAllUsers, getSingleUser, updateUser, deleteUser, getUserStats } from '../controllers/userControllers.js';

const router = express.Router();

//Create User
router.post('/create', verifyToken, createUser);

// Get all users
router.get('/', verifyToken, getAllUsers);

// Get single user by id
router.get('/find/:id', getSingleUser);

// Update user by id
router.put('/:id', verifyToken, updateUser);

// Delete user by id
router.delete('/:id', verifyToken, deleteUser);

// Get user stats
router.get('/stats', getUserStats);

export default router;
