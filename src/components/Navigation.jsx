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
import { useAuth } from '../AuthContext'; // Adjust the path accordingly

const Navigation = () => {
  const { logout, user } = useAuth();

  const handleLogoutRedirect = () => {
    logout();
    navigate('/');
  };

  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);
  const location = useLocation();
  // Determine the CSS class based on the route
  const getNavbarClass = () => {
    switch (location.pathname) {
      case '/':
        return 'navbar-home';
      default:
        return 'navbar-curriculum'; // Fallback class
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
              <MDBNavbarLink link href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {user ? (
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Curriculum
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {user.coursesAssigned.map((course) => (
                      <MDBDropdown key={course}>
                        <MDBDropdownToggle tag="a" className="nav-link-2" role="button">
                          {course
                            .replace(/_/g, ' ')
                            .toLowerCase() // Convert to lowercase
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          {user.gradesAssigned.map((grade) => (
                            <MDBDropdownItem key={grade} drop={'end'} link href={`/curriculum/${course.toLowerCase()}/grade/${grade}`}>
                              Grade {grade}
                            </MDBDropdownItem>
                          ))}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    ))}
                  </MDBDropdownMenu>
                </MDBDropdown>
              ) : (
                <MDBNavbarLink link href="/login">
                  Curriculum
                </MDBNavbarLink>
              )}
            </MDBNavbarItem>
            {user ? (
              user.role == 'STUDENT' ? (
                <MDBNavbarItem>
                  <MDBNavbarLink link href="/resources">
                    Resources
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : null
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink link href="/login">
                  Resources
                </MDBNavbarLink>
              </MDBNavbarItem>
            )}
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Contact us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {user ? (
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0" alt="avatar image" style={{ width: '2rem', marginRight: '0.5rem' }} />{' '}
                    {user.fullName.split(' ')[0]}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href="/profile">
                      <i className="fas fa-user-circle"></i> Profile
                    </MDBDropdownItem>
                    {/* <MDBDropdownItem link href="#settings">
                      <i className="fas fa-cog"></i> Settings
                    </MDBDropdownItem> */}
                    <MDBDropdownItem divider />
                    <MDBDropdownItem link onClick={handleLogoutRedirect}>
                      <i className="fas fa-sign-out-alt"></i> Log Out
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              ) : (
                <div style={{ display: 'flex' }}>
                  <MDBNavbarLink className="nav-link-button" link href="/login">
                    <button className={`pill-button-login`}>Login</button>
                  </MDBNavbarLink>
                  <MDBNavbarLink className="nav-link-button" link href="/register">
                    <button className={`pill-button-register`}>Register</button>
                  </MDBNavbarLink>
                </div>
              )}
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navigation;
