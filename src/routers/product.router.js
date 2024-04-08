import express from 'express';
import { getById, getProductByCategoryid, index, insert, remove, searchProduct, update } from '../controllers/product.contronller.js';
import checkAuth from '../middleware/auth.js';

const router = express.Router();

router.get('/', index);
router.get('/', searchProduct);
router.get('/:id', getById);
router.post('/',checkAuth,insert);
router.put('/:id',checkAuth,update );
router.delete('/:id',checkAuth,remove);
router.get('/category/:id',getProductByCategoryid);
export default router