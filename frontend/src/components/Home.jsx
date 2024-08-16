import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from "./Navbar";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ name: "John Doe" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="home-container">
      <NavigationBar user={user} onLogout={handleLogout} />

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

        <Row className="text-center mt-5">
          <Col>
            {user ? (
              <Button variant="secondary" onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Button variant="primary" className="mr-2">Login</Button>
                <Button variant="secondary">Sign Up</Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
