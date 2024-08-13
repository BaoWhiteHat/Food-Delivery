// backend/server.js
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import 'dotenv/config';



// Cấu hình ứng dụng
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Kết nối cơ sở dữ liệu
connectDB();

// Cấu hình các API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});

// Khởi động server
app.listen(port, () => {
    if(process.env.NODE_ENV === 'production') {
        console.log(`Server started on ${process.env.HOST}`);
    }
    else {
        console.log(`Server started on http://localhost:${port}`)
    }
});
