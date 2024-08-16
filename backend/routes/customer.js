const express = require('express');
const router = express.Router();
const { addCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('../controllers/Customer');

// Add customer information
router.post('/', addCustomer);

// Get all customers
router.get('/', getAllCustomers);

// Get customer by ID
router.get('/:id', getCustomerById);

// Update customer information
router.put('/:id', updateCustomer);

// Delete customer information
router.delete('/:id', deleteCustomer);

module.exports = router;
