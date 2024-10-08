import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";
import ProductsService from "./ProductsService";
import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InformationSection from "./InformationSection";
import ProductSection from "./ProductSection";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Services, Contact, and About Cards */}
      <Container className="mt-5">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4">Welcome to Techy Software</h1>
            <p className="lead">
              Empowering businesses with innovative software solutions!
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Our Services</Card.Title>
                <Card.Text>
                  Explore our range of services designed to meet your business needs.
                </Card.Text>
                <Button variant="primary" href="#services">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  Get in touch with us for custom solutions or support.
                </Card.Text>
                <Button variant="primary" href="#contact">Get in Touch</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Learn more about our mission, values, and the team behind Techy Software.
                </Card.Text>
                <Button variant="primary" href="#about">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Products Section */}
      <section id="services">
        <ProductsService />
      </section>
      <section id="products">
        <ProductSection />
      </section>
      {/* Team Section */}
      <section id="team">
        <TeamSection />
      </section>

      {/* Information Section */}
      <section id="information">
        <InformationSection />
      </section>

      {/* Feedback Form */}
      <section id="feedback" className="my-5">
        <Container>
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
