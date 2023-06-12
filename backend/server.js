import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middlewares/errorMiddleware.js'
dotenv.config()
const port=process.env.PORT || 5000
connectDB();
const app = express()
app.use(cors());

app.use('/api/products',productRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server on port ${port}`)
})