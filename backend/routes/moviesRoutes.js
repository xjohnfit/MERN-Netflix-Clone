import express from 'express';
import verifyToken from '../utils/verifyToken.js';

import { createMovie, getAll, getMovieById, getRandomMovie, updateMovie, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

router.post('/create', verifyToken, createMovie);
router.get('/', verifyToken, getAll);
router.get('/get/:id', verifyToken, getMovieById);
router.get('/random', verifyToken, getRandomMovie);
router.put('/update/:id', verifyToken, updateMovie);
router.delete('/delete/:id', verifyToken, deleteMovie);

export default router;