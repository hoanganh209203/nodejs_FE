import express from 'express';
import { getById, getProductByCategoryid, index, insert, remove, searchProduct, update } from '../controllers/product.contronller.js';

const router = express.Router();

router.get('/', index);
router.get('/', searchProduct);
router.get('/:id', getById);
router.post('/',insert);
router.put('/:id',update );
router.delete('/:id',remove);
router.get('/category/:id',getProductByCategoryid);
export default router