import express from "express";
import mongoose from "mongoose";

import Product from "../models/product.js";

const router = express.Router();

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({ data: products });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
