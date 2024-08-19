const Customer = require('../models/Customer');

// Add a new customer
exports.addCustomer = async (req, res) => {
    console.log('Request to add a new customer:', req.body); // Debugging log
    try {
        const customer = new Customer(req.body);
        await customer.save();
        console.log('Customer added successfully:', customer); // Debugging log
        res.status(201).json(customer);
    } catch (error) {
        console.error('Error adding customer:', error.message); // Debugging log
        res.status(400).json({ message: error.message });
    }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
    console.log('Request to get all customers'); // Debugging log
    try {
        const customers = await Customer.find();
        console.log('Customers retrieved successfully:', customers); // Debugging log
        res.status(200).json(customers);
    } catch (error) {
        console.error('Error retrieving customers:', error.message); // Debugging log
        res.status(500).json({ message: error.message });
    }
};

// Get customer by ID
exports.getCustomerById = async (req, res) => {
    console.log('Request to get customer by ID:', req.params.id); // Debugging log
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            console.log('Customer not found for ID:', req.params.id); // Debugging log
            return res.status(404).json({ message: 'Customer not found' });
        }
        console.log('Customer retrieved successfully:', customer); // Debugging log
        res.status(200).json(customer);
    } catch (error) {
        console.error('Error retrieving customer by ID:', error.message); // Debugging log
        res.status(500).json({ message: error.message });
    }
};

// Update customer
exports.updateCustomer = async (req, res) => {
    console.log('Request to update customer with ID:', req.params.id, 'and data:', req.body); // Debugging log
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!customer) {
            console.log('Customer not found for ID:', req.params.id); // Debugging log
            return res.status(404).json({ message: 'Customer not found' });
        }
        console.log('Customer updated successfully:', customer); // Debugging log
        res.status(200).json(customer);
    } catch (error) {
        console.error('Error updating customer:', error.message); // Debugging log
        res.status(400).json({ message: error.message });
    }
};

// Delete customer
exports.deleteCustomer = async (req, res) => {
    console.log('Request to delete customer with ID:', req.params.id); // Debugging log
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            console.log('Customer not found for ID:', req.params.id); // Debugging log
            return res.status(404).json({ message: 'Customer not found' });
        }
        console.log('Customer deleted successfully:', customer); // Debugging log
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error('Error deleting customer:', error.message); // Debugging log
        res.status(500).json({ message: error.message });
    }
};
