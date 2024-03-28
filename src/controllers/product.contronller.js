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
        const request = req.query.name
        // Product.find({
        //    name: req.query.name 
        // })
        // .then(data => {
        //     res.json(data)
        // }).catch(err => {
        //     res.json({message:"Có lỗi khi lấy dữ liệu"});
        // })
        Product.find().populate("category")
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

