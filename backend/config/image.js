// backend/config/image.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dvjjg3x3p',
    api_key: '714521117572225', // API Key mới
    api_secret: 'zNdTI3WR4eEuCWrzzrbFjQgG9cM' // API Secret mới
});

console.log('Configured Cloudinary with:', cloudinary.config());

export default cloudinary;
