import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
}, {
    
    collection: "categories",
    versionKey:false
})
export default mongoose.model('categories', CategorySchema)