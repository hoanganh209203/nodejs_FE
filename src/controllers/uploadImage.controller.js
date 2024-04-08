import uploadImageModel from "../models/uploadImage.model.js";

export const UploadImage = (req, res) =>{
    const data = req.body
    console.log(data);
    data.type = 1
    uploadImageModel.create(data)
    .then(resData => res.status(200).json(data))

    .catch(err => res.status(500).json({message: err.message}))
}

export const MultiUploadImage = (req, res) =>{
    const data = req.body
    console.log(data);
    data.type = 2
    const newdata = {...data}
    newdata.images = data.images.map((image)=>'/images/'+image)    
    uploadImageModel.create(newdata)
    .then(resData => res.status(200).json(resData))
    .catch(err => res.status(500).json({message: err.message}))
}
