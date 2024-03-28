import express from 'express';
import { getById, getProductByCategoryid, index, insert, remove, update } from '../controllers/product.contronller.js';
import checkAuth from '../middleware/auth.js';

const router = express.Router();

router.get('/', index);
router.get('/:id', getById);
router.post('/',insert);
router.put('/:id',update );
router.delete('/:id',remove);
router.get('/category/:id',getProductByCategoryid);
export default router