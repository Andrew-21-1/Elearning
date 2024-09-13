import React from 'react';
import { Container, NavDropdown, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/logo.png'; // Replace with your asset path
import '../css/Navbar.css';

const Navigation = () => {
  const handleLogoutRedirect = () => {
    // Add navigation logic here
  };

  return (
    <Navbar style={{ flexWrap: 'nowrap' }} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#home">
          <img src={logo} alt="Logo" />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="#home">Home</Nav.Link>

            {/* Curriculum Dropdown */}
            <NavDropdown title="Curriculum" id="curriculum-dropdown" className="nav-dropdown-d">
              <NavDropdown.Item href="#curriculum/literacy" className="nav-dropdown-item">
                Literacy
              </NavDropdown.Item>
              <NavDropdown.Item href="#curriculum/math" className="nav-dropdown-item">
                Math
              </NavDropdown.Item>
              <NavDropdown.Item href="#curriculum/science" className="nav-dropdown-item">
                Science
              </NavDropdown.Item>
              <NavDropdown.Item href="#curriculum/ss" className="nav-dropdown-item">
                Social Studies
              </NavDropdown.Item>
              <NavDropdown.Item href="#curriculum/ps" className="nav-dropdown-item">
                Professional Studies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#curriculum/all" className="nav-dropdown-item">
                More
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <button className="logout-button" onClick={handleLogoutRedirect}>
              Log Out
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
