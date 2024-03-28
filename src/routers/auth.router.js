import express from 'express';
import { getAuth, getAuthById, removeAuth, updateAuth } from '../controllers/auth.controller.js';
import checkAuth from '../middleware/auth.js';

const authRouter = express.Router()

authRouter.get('/',getAuth)
authRouter.get('/:id',getAuthById)
authRouter.put('/:id',checkAuth,updateAuth)
authRouter.delete('/:id',checkAuth,removeAuth)

export default authRouter