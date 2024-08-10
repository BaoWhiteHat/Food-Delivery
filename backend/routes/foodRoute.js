// backend/routes/foodRoute.js
import express from 'express';
import { addFood, listFood, removeFood, getImage } from "../controllers/foodController.js";
import multer from "multer";
import uploadImageToCloudinary from "../middleware/uploader.js";

const foodRouter = express.Router();

// Sử dụng memoryStorage của multer để lưu trữ tạm thời file trong bộ nhớ
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single('image'), uploadImageToCloudinary, addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/image/:publicId", getImage);

export default foodRouter;
