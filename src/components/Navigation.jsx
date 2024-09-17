import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdown,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
} from 'mdb-react-ui-kit';
import logo from '../assets/images/logo2.png'; // Replace with your asset path
import '../css/Navbar.css';

const Navigation = () => {
  const handleLogoutRedirect = () => {
    // Add navigation logic here
  };
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);
  const location = useLocation();
  // Determine the CSS class based on the route
  const getNavbarClass = () => {
    switch (location.pathname) {
      case '/home':
        return 'navbar-home';
      case '/curriculum':
        return 'navbar-curriculum';
      case '/resources':
        return 'navbar-curriculum';
      default:
        return 'navbar-home'; // Fallback class
    }
  };
  return (
    <MDBNavbar expand="lg" sticky="top" className={getNavbarClass()} style={{ boxShadow: 'none' }}>
      <MDBContainer className="navbar-container">
        <MDBNavbarBrand href="#">
          <img style={{ height: 'auto', width: '10rem' }} src={logo} alt="Logo" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse
          navbar
          open={openNavNoTogglerSecond}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <MDBNavbarNav className="navbar-nav">
            <MDBNavbarItem>
              <MDBNavbarLink link href="/home">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Curriculum
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/curriculum">
                    Literacy
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/curriculum">
                    Math
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/curriculum">
                    Science
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/curriculum">
                    Social Studies
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/curriculum">
                    Professional Studies
                  </MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem link href="/curriculum">
                    More
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink link href="/resources">
                Resources
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Contact us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0" alt="avatar image" style={{ width: '2rem', marginRight: '0.5rem' }} /> Name
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="#profile">
                    <i className="fas fa-user-circle"></i> Profile
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="#settings">
                    <i className="fas fa-cog"></i> Settings
                  </MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem link href="#logout">
                    <i className="fas fa-sign-out-alt"></i> Log Out
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navigation;
