import React from "react";
import "../css/Footer.css";
import logo from "../assets/images/logo2.png"; // Replace with your asset path
import {
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  const getNavbarClass = () => {
    switch (location.pathname) {
      case "/home":
        return "footer-home";
      default:
        return "footer-curriculum"; // Fallback class
    }
  };

  return (
    <MDBFooter className={"text-center footer " + getNavbarClass()}>
      <MDBNavbarBrand href="#" className="brand">
        <img style={{ height: "auto", width: "15rem" }} src={logo} alt="Logo" />
      </MDBNavbarBrand>
      <MDBContainer className="navbar-foot">
        <div className="navbar-foot">
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current="page" href="#">
              Careers
            </MDBNavbarLink>
          </MDBNavbarItem>
          <span className="separator"> | </span>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current="page" href="#">
              Privacy Policy
            </MDBNavbarLink>
          </MDBNavbarItem>
          <span className="separator"> | </span>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current="page" href="#">
              Terms & Conditions
            </MDBNavbarLink>
          </MDBNavbarItem>
        </div>
      </MDBContainer>
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div className="text-center p-3">
        © 2021 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Class Technologies Inc.
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
