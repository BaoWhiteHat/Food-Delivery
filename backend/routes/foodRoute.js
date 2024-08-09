import express from 'express';
import { addFood, listFood, removeFood,getImage } from "../controllers/foodController.js";
import multer from "multer";
import uploadImageToCloudinary from "../middleware/uploader.js";
const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add", upload.single('image'), uploadImageToCloudinary, addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/image/:publicId", getImage);





export default foodRouter;