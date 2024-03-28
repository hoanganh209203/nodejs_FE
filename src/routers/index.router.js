import routerProduct from './product.router.js'
import routerCategory from './category.router.js';
import routerCommon from './common.router.js';
import userRouter from './user.router.js';
import authRouter from './auth.router.js';
import routerCart from './cart.router.js';


function router(app){
    app.use('/products',routerProduct);
    app.use('/category',routerCategory);
    app.use('/user',userRouter)
    app.use('/auth',authRouter);
    app.use('/cart',routerCart);

    app.use('/',routerCommon);
}


export default router;