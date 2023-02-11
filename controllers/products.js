import express from "express";
import mongoose from "mongoose";

import Product from "../models/product.js";

const router = express.Router();

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Product(product);

  try {
    await newProduct.save();
res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
