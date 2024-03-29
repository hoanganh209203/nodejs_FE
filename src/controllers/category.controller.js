import categoryModel from "../models/category.model.js";

export function getCategory (req,res){
    categoryModel.find().populate('products')
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.json({
            message:"Không tìm thấy cate"
        })
    })
}

export function getCateById (req,res){
    const id = req.params.id
    if(id){
        categoryModel.findById(id).populate('products')
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
    }else{
        res.json({
            message: "No category"
        })
    }

}

export function addCategory(req, res){
    const cate = req.body
    if(cate){
        categoryModel.create(cate)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json({
                message: err.message
            })
        })

    }else{
        res.json({
            message:"khong the them cate"
        })
    }
}

export function updateCate(req, res) {
 
    const id = req.params.id;
    if (id) {
       const cateData = req.body
       if(cateData != {}){
       categoryModel.findByIdAndUpdate(id,cateData,{new: true})
       .then((data) => {
        res.json(data);
       })
       .catch((err) =>{
        res.json({
            message: err.message
        })
       })
       }else{

           res.json({
            message: 'Khong nhan duowc du lieu'
           })
       }
    } else {
        res.send("Không nhận được id")
    }
}

export function removeCate (req,res){

    const id = req.params.id;
    if(id){
      categoryModel.findByIdAndDelete(id,{new:true})
      .then((data) =>{
          res.json({message:"Category deleted successfully"})
      })
      .catch((error) =>{
         res.json({message:error})
      })
    }
    else {
      res.send("Không nhận được id")
  }
  }
  