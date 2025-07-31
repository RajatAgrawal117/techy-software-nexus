import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaTachometerAlt, FaCog } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext.jsx";
import logo from "../../../assets/images/logo.jpg";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
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
            {isAuthenticated ? (
              <NavDropdown
                title={
                  <span className="user-dropdown">
                    <FaUser className="me-2" />
                    {user?.username || 'User'}
                  </span>
                }
                id="basic-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item as={Link} to="/dashboard">
                  <FaTachometerAlt className="me-2" />
                  Dashboard
                </NavDropdown.Item>
                {user?.role === 'admin' && (
                  <NavDropdown.Item as={Link} to="/admin">
                    <FaCog className="me-2" />
                    Admin Panel
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
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
