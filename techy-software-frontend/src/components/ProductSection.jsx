import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import axiosInstance from './axiosInstance';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleCreateOrUpdateProduct = async () => {
    try {
      if (editingProduct) {
        // Update product
        await axiosInstance.put(`/products/${editingProduct._id}`, newProduct);
      } else {
        // Create new product
        await axiosInstance.post('/products', newProduct);
      }
      fetchProducts();
      setShow(false);
      setNewProduct({ name: '', description: '', price: '' });
      setEditingProduct(null);
    } catch (error) {
      console.error('Error saving product', error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      description: product.description,
      price: product.price,
    });
    setShow(true);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axiosInstance.delete(`/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  const handleClose = () => {
    setShow(false);
    setEditingProduct(null);
    setNewProduct({ name: '', description: '', price: '' });
  };

  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h2>Our Products</h2>
          <p>Explore our latest offerings</p>
          <Button variant="primary" onClick={() => setShow(true)}>
            Add New Product
          </Button>
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product._id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Button
                  variant="secondary"
                  onClick={() => handleEditProduct(product)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Creating/Editing a Product */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct ? 'Edit Product' : 'Add New Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productName" className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                required
              />
            </Form.Group>
            <Form.Group controlId="productDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                placeholder="Enter product description"
                required
              />
            </Form.Group>
            <Form.Group controlId="productPrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Enter product price"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateOrUpdateProduct}>
            {editingProduct ? 'Update Product' : 'Add Product'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductsSection;
