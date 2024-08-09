import foodModel from "../models/foodModel.js";
import fs from "fs";
import cloudinary from "../config/image.js";


// add food item
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: 'Image uploaded successfully', url: req.body.imageUrl });
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// all list food
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data: foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}


// remove food item
const removeFood = async(req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"}) 
    }
}
const getImage = async(req, res,) => {
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
    }

export {addFood, listFood , removeFood, getImage}

