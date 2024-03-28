
import express from 'express'
import { Carts } from '../controllers/cart.controller.js'

const routerCart = express.Router()

routerCart.post('/',Carts)


export default routerCart