import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Container className="about-container">
      <Row className="text-center">
        <Col>
          <h1 className="display-4">About Techy Software</h1>
          <p className="lead">Building the future with cutting-edge technology.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title>Our History</Card.Title>
              <Card.Text>Discover how we started and our journey so far.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>We aim to revolutionize the tech industry with our solutions.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>Meet the passionate team behind Techy Software.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
