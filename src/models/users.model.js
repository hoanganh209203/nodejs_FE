import mongoose from "mongoose";
function validateEmail(textEmail){
    return /^\S+@\S+\.\S+$/.test(textEmail);
}

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Không được để trống"],
        trim:true,
        minLength:[2,"Cần tối thiểu 2 kí tự"],
        maxLength:[30,"Tối đa 30 kí tự"],
        unique:true,

    },
    email:{
        type: String,
        unique: [true, "đã tồn tại email"],
        validate:{
            validator: validateEmail,
            message: "Không đúng định dạng email"
        },
        required: [true,"Không được để trống email"]

    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'member'
    }
})
export default mongoose.model('Users', UserSchema)