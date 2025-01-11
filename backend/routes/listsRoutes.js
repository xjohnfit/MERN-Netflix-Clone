import express from 'express';
import verifyToken from '../utils/verifyToken.js';

import { createList, getLists, deleteList } from '../controllers/listControllers.js';

const router = express.Router();

router.get('/', verifyToken, getLists);
router.post('/create', verifyToken, createList);
router.delete('/delete/:id', verifyToken, deleteList);

export default router;