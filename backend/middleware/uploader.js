// backend/middleware/uploader.js
import cloudinary from '../config/image.js';
import streamifier from 'streamifier';

const uploadImageToCloudinary = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    // Debugging output
    console.log('Cloudinary Config:', cloudinary.config());

    const streamUpload = (req) => {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream((error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
            streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
    };

    async function upload(req) {
        try {
            const result = await streamUpload(req);
            req.body.imageUrl = result.secure_url; // Lưu URL của hình ảnh vào req.body
            next();
        } catch (error) {
            console.error('Error uploading image:', error);
            res.status(500).json({ success: false, message: 'Error uploading image' });
        }
    }

    upload(req);
};

export default uploadImageToCloudinary;
