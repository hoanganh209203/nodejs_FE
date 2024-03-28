import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
    },
    items:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'products',
            },
            quanlity:{
                type:Number
            }
        }
    ]
})
export default mongoose.model('Carts',cartSchema)