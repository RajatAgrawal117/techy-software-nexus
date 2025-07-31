const Product = require("../models/Product");

// Create a new product
const createProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      user: req.user.id, // Assuming the product is associated with a user
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all products for logged-in user
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a specific product by ID for logged-in user
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, user: req.user.id });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a product by ID for logged-in user
const updateProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const product = await Product.findOne({ _id: req.params.id, user: req.user.id });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;

    const updatedProduct = await product.save();

    res.json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a product by ID for logged-in user
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, user: req.user.id });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
