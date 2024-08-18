import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axiosInstance from './axiosInstance'; // Import the Axios instance
import './InformationSection.css'; // Include your custom CSS for styling

const InformationSection = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({
      ...customerDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send customer details to the backend using Axios
    try {
      const response = await axiosInstance.post('/customers', customerDetails); // Update the endpoint if necessary

      if (response.status === 201) {
        alert('Your details have been submitted successfully!');
        setCustomerDetails({ name: '', email: '', phone: '', message: '' }); // Reset all fields
      } else {
        alert('There was an error submitting your details. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your details. Please try again.');
    }
  };

  return (
    <div className="information-section py-5 bg-dark text-white">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>Stay Informed</h2>
            <p>Subscribe to our newsletter and be the first to know about our new products and offers.</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={customerDetails.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={customerDetails.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={customerDetails.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  value={customerDetails.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="light" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InformationSection;
