import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We provide top-notch solutions for your business needs. From web development to digital marketing, we're here to help you succeed.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
              <Nav.Link as={Link} to="/invoice" className="text-light">Invoice</Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-light">Register</Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, Anytown, USA</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
