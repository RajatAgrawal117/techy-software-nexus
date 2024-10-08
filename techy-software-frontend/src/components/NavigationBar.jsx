import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import "./NavigationBar.css";

function NavigationBar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ name: "Welcome back!" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <Navbar expand="lg" sticky="top" className="navbar-custom py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-custom">
          <img
            alt="Logo"
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />{" "}
          Techy Software
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">
              About Us
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">
              Services
            </Nav.Link>
            <Nav.Link href="#products" className="nav-link-custom">
              Products
            </Nav.Link>
            <Nav.Link href="#team" className="nav-link-custom">
              Team
            </Nav.Link>
            <Nav.Link href="#feedback" className="nav-link-custom">
              Feedback
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown
                title={
                  <span className="user-dropdown">
                    <FaUser className="me-2" />
                    {user.name}
                  </span>
                }
                id="basic-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  <FaSignOutAlt className="me-2" />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Button
                  variant="outline-light"
                  as={Link}
                  to="/login"
                  className="me-2"
                >
                  Login
                </Button>
                <Button variant="light" as={Link} to="/signup">
                  Sign Up
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
