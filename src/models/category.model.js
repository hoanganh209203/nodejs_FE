import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        }
    ]
}, {
    
    timestamps: true,
    versionKey:false
})
export default mongoose.model('categories', CategorySchema)