import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
    destination: (req,res,callback) => {
        callback(null,'src/uploads')
    },
    filename:(req,file,callback) => {
        console.log(file);
        const filename = Date.now() + path.extname(file.originalname)
        req.body.image = filename
        callback(null,filename)
    }
})
export const upload = multer({storage:storage})


const MuliStorage = multer.diskStorage({
    destination:(req,res,callback)=>{
        callback(null,'src/uploads')
    },
    filename:(req,file,callback)=>{
        req.body.images = req.body.images || [];
        const filename = Date.now() + path.extname(file.originalname)
        req.body.images.push(filename)
        callback(null,filename)
    }
})
export const MultiUpload = multer({storage: MuliStorage})