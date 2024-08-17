import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavigationBar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Techy Software</Navbar.Brand> {/* Updated this line */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {user ? (
            <Button variant="outline-danger" onClick={onLogout}>Logout</Button>
          ) : (
            <>
              <Button variant="outline-primary" onClick={() => navigate('/login')}>Login</Button>
              <Button variant="outline-secondary" onClick={() => navigate('/signup')}>Sign Up</Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
