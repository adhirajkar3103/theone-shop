import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import {notFound, errorHandler} from './middlewares/errorMiddleware.js'
dotenv.config()
const port=process.env.PORT || 5000
connectDB();
const app = express()
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server on port ${port}`)
})