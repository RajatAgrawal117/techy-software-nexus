import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import SocialLinks from './SocialLinks';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Social Media</h5>
            <p>Connect with us on social platforms.</p>
            <SocialLinks/>
          </Col>
          <Col md={4}>
            <h5>Newsletter</h5>
            
            {/* Newsletter Signup Form */}
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Address, phone number, and email.</p>
            {/* Contact Information */}
            <p>Techy Software HQ, Hyderabad</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: techy@software.com</p>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; 2024 Techy Software. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
