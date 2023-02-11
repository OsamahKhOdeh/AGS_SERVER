import express from "express";
import mongoose from "mongoose";

import Product from "../models/product.js";

const router = express.Router();

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
