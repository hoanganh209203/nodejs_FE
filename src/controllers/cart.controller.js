import cartModel from "../models/cart.model.js"

export const Carts =async (req,res) =>{
    try {
        const cartId = req.body
        
        if(!cartId &&cartId == {}){
            return res.status(400).json({message:"Cart not found"})
        }
        const CartProduct = await cartModel.create(cartId)
        return res.status(200).json({CartProduct})
        
    } catch (error) {
        return res.status(500).json({message:"Error creating"})
    }
   
}

export const getCartByUserId = (req, res) => {

    let idUser = req.params.id
    console.log(id);
    if (id) {
        Product.find({ userId: idUser }).populate('category')
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
export const updateItem = async (req, res) => {
    try {
        const id = req.params.id
        const cartNow = await cartModel.findById(id)
        if(!cartNow) {
            return res.status(400).json({message: "không tìm thấy giỏ hàng"})       
        }
        const data = req.body;
        if(!data || data=={}){
            return res.status(400).json({message: "không nhận được dữ liệu"});
        }
        cartNow.items = data.items;
        await cartNow.save();
        res.status(200).json({
            message: "cập nhật thành công",
            cartNow
        })
    } catch (error) {
        res.status(500).json({message: err})
    }
   
}