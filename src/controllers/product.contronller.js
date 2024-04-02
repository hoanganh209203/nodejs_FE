import Product from '../models/products.model.js'

export const getProductByCategoryid = (req, res) => {

        let id = req.params.id
        console.log(id);
        if (id) {
            Product.find({ category: id }).populate('category')
                .then(data => {
                    res.json(data);
                })
                .catch(() => {
                    res.json({ message: "Không tìm thấy sản phẩm" })
                })
        } else {
            res.json({ message: "Không nhận được id" })
        }
}

export function index(req, res) {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = (page - 1) * limit;
        const filter={}
        if(req.query.title){
            filter.title = {$regex : req.query.title}
        }if(req.query.name){
            filter.min = {$regex : req.query.min}
        }if(req.query.name){
            filter.max = {$regex : req.query.max}
        }

        // Product.find({
        //    name: req.query.name 
        // })
        // .then(data => {
        //     res.json(data)
        // }).catch(err => {
        //     res.json({message:"Có lỗi khi lấy dữ liệu"});
        // })
        Product.find(filter)
        .skip(skip).limit(limit)
        .populate("category")
            .then(data => {
                res.json(data);
            })
            .catch((err) => {
                res.json({ message: "Có lỗi khi lấy dữ liệu" });
            })
    } catch (error) {
        console.log(error);
        res.json({ message: "Có lỗi khi lấy dữ liệu" });

    }
}

export function getById(req, res) {
    let id = req.params.id;
    if (id) {
        Product.findById(id).populate('category')
            .then(data => {
                res.json(data);
            })
            .catch(() => {
                res.json({ message: "Không tìm thấy sản phẩm" })
            })
    } else {
        res.json({ message: "Không nhận được id" })
    }
}

export function insert(req, res) {
    const product = req.body;
    if (product != {}) {
        Product.create(product)
            .then(data => {
                res.json(data)
            })
            .catch(() => {
                res.json({ message: "Có lỗi khi thêm sản phẩm" })
            })
    } else {
        res.json({ message: "Không nhận dược dữ liệu" })
    }
}

export function update(req, res) {

    const id = req.params.id;
    if (id) {
        const productData = req.body
        if (productData != {}) {
            Product.findByIdAndUpdate(id, productData, { new: true })
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json({
                        message: err.message
                    })
                })
        } else {

            res.json({
                message: 'Khong nhan duowc du lieu'
            })
        }
    } else {
        res.send("Không nhận được id")
    }
}

export function remove(req, res) {

    const id = req.params.id;
    if (id) {
        Product.findByIdAndDelete(id, { new: true })
            .then((data) => {
                res.json({ message: "Product deleted successfully" })
            })
            .catch((error) => {
                res.json({ message: error })
            })
    }
    else {
        res.send("Không nhận được id")
    }
}

