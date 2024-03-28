import express from 'express';
import { addCategory, getCateById, getCategory, removeCate, updateCate } from '../controllers/category.controller.js';

const router = express.Router();


router.get('/', getCategory);
router.get('/:id', getCateById);
router.post('/',addCategory);
router.put('/:id',updateCate);
router.delete('/:id',removeCate);

export default router