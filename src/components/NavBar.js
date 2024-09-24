import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/gid-logo.png";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container fluid='xxl'>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <Nav.Link>
              <i className="fas fa-home"></i> Home
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-regular fa-user"></i> Sign in
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-solid fa-user-plus"></i> New User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;