import express from 'express';
import asyncHandler from '../middlewares/asyncHandler.js';
import Product from '../models/productModel.js'
import { getProductById, getProducts } from '../controllers/productController.js';
const router = express.Router();

router.get('',getProducts)

router.get('/:id',getProductById);

export default router;