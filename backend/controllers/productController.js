import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({});
    res.json(products);
})

export const getProductById = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    if(product){
        return res.json(product)    
    }
    res.status(404)
    throw new Error('Resource not found!')
})
