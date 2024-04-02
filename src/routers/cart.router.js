
import express from 'express'
import { Carts, getCartByUserId, updateItem } from '../controllers/cart.controller.js'

const routerCart = express.Router()

routerCart.post('/',Carts)
routerCart.put('/:id',updateItem)
routerCart.get('/user/:id',getCartByUserId)
export default routerCart