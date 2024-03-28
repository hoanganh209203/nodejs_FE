import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    discountPercentage: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    stock: {
        type: Number,
    },
    brand: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    images: [
        {
            type: String,
        }
    ]
}, {
    timestamps: true,
    versionKey: false
})
export default mongoose.model('products', productSchema)