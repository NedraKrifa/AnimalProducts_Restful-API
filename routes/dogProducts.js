const express = require("express");
const router = express.Router();
const Product = require("../models/dogexport");

//Get all products
router.get("/", async (req, res) => {
  try {
    const dogProducts = await Product.find();
    res.json(dogProducts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit product
router.post("/", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific product
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Product
router.delete("/:productId", async (req, res) => {
  try {
    const removedProduct = await Product.remove({ _id: req.params.productId });
    res.json(removedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a product
router.patch("/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      { $set: { title: req.body.title, description: req.body.description  } }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
