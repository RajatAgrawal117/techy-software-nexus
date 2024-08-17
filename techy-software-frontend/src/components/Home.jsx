import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from "./Navbar";
import HeroSection from "./HeroSection";
import ContactSection from "./ContactSection";
import TeamSection from "./TeamSection";
import SocialLinks from "./SocialLinks";
import ProductsService from "./ProductsService";
import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ name: "John Doe" }); // Replace with actual user data
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="home-container">
      {/* Header */}
      <NavigationBar user={user} onLogout={handleLogout} />

      {/* Hero Section */}
      <HeroSection />

      {/* Services, Contact, and About Cards */}
      <Container className="mt-5">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4">Welcome to Techy Software</h1>
            <p className="lead">Empowering businesses with innovative software solutions!</p>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Our Services</Card.Title>
                <Card.Text>Explore our range of services designed to meet your business needs.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>Get in touch with us for custom solutions or support.</Card.Text>
                <Button variant="primary">Get in Touch</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>Learn more about our mission, values, and the team behind Techy Software.</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Products Section */}
      <ProductsService />

      {/* Team Section */}
      <TeamSection />

      {/* Feedback Form */}
      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>We Value Your Feedback</h2>
            <p>Your input helps us to improve and serve you better.</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <FeedbackForm />
          </Col>
        </Row>
      </Container>

      

   

      {/* Footer */}
      <Footer />

    
    </div>
  );
};

export default Home;
