import { v2 as cloudinary } from 'cloudinary'; // Import Cloudinary v2
import streamifier from 'streamifier'; // Import streamifier

const uploadImageToCloudinary = async (req, res, next) => {
  try {
    const { file } = req;
    
    if (!file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      {folder: 'Test' },
      (error, result) => {
        if (error) {
          console.error('Cloudinary Upload Error:', error);
          return res.status(500).json({ success: false, message: 'Cloudinary upload failed', error });
        }

        req.body.imageUrl = result.secure_url; // Set the image URL in the request body
        next(); // Continue to the next middleware or route handler
      }
    );

    // Convert file buffer to stream and pipe it to Cloudinary
    streamifier.createReadStream(file.buffer).pipe(uploadStream);

  } catch (error) {
    console.error('Error in uploadImageToCloudinary middleware:', error);
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

export default uploadImageToCloudinary;
