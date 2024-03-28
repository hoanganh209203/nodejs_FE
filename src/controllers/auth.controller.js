import usersModel from "../models/users.model.js"


export const getAuth = async (req, res) =>{
    try {
        const auth = await usersModel.find()
        if(!auth){
            return res.status(404).json({
                message:"Không tìm thấy thông tin người dùng"
            })
        }
        return res.status(200).json(auth)
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
    
}
export const getAuthById = async (req, res) =>{
    try {
        const id = req.params.id
        console.log(id);
        const auth = await usersModel.findById(id)
        if(!auth){
            return res.status(404).json({
                message:"Không tìm thấy thông tin người dùng"
            })
        }
        return res.status(200).json(auth)
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
    
}
export const updateAuth = async (req, res) =>{
    try {
        const id = req.params.id
        const auth = await usersModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!auth){
            return res.status(404).json({
                message:"Không tìm thấy thông tin người dùng"
            })
        }
        return res.status(200).json(auth)
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
    
}
export const removeAuth = async (req, res) =>{
    try {
        const id = req.params.id
        const auth = await usersModel.findByIdAndDelete(id,{new:true})
        if(!auth){
            return res.status(404).json({
                message:"Không tìm thấy thông tin người dùng"
            })
        }
        return res.status(200).json({
            message:"Xóa tài khoản thành công"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
    
}

