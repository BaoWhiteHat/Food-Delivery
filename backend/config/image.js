// backend/config/image.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dgncir2mb',
    api_key: '957991786227583', // API Key mới
    api_secret: 'CyA1LFFtDAYGmliWhE7JlPozA2E' // API Secret mới
});

console.log('Configured Cloudinary with:', cloudinary.config());

export default cloudinary;
