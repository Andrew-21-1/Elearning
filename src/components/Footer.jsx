import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../css/Footer.css';
import logo from '../assets/images/logo.png'; // Replace with your asset path

const Footer = () => {
  return (
    <footer>
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '30%' }}>
          <img src={logo} alt="Logo" className="d-inline-block align-top nav-logo" />{' '}
        </div>
        <Nav className="nav-links">
          <Nav.Link href="#careers">Careers</Nav.Link>|<Nav.Link href="#pp">Privacy Policy</Nav.Link>|<Nav.Link href="#tc">Terms & Conditions</Nav.Link>
        </Nav>
        <p>&copy; 2021 Class Technologies Inc. </p>
      </Container>
    </footer>
  );
};

export default Footer;
