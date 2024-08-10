// backend/controllers/foodController.js
import foodModel from "../models/foodModel.js";

// Thêm món ăn mới
const addFood = async (req, res) => {
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.imageUrl // Sử dụng URL của hình ảnh từ Cloudinary
    });
    try {
        await food.save();
        res.json({ success: true, message: 'Food item added successfully', data: food });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

// Danh sách tất cả món ăn
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Xóa món ăn
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Lấy hình ảnh từ Cloudinary
const getImage = async (req, res) => {
    try {
        const publicId = req.params.publicId;
        const options = {
            width: 200,
            height: 200,
            crop: 'fill'
        };
        const imageUrl = cloudinary.url(publicId, options);
        res.status(200).json({ success: true, url: imageUrl });
    } catch (error) {
        console.error('Error in getImage:', error);
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};

export { addFood, listFood, removeFood, getImage };
