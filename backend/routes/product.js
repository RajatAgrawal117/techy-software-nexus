const express = require('express');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/Product');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create new product
router.post('/', authMiddleware, createProduct);

// Get all products
router.get('/', getProducts);

// Get a specific product by ID
router.get('/:id', getProductById);

// Update a product by ID
router.put('/:id', authMiddleware, updateProduct);

// Delete a product by ID
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;
