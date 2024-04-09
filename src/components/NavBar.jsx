import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkModeToggle from "./DarkModeToggle";

function NavBar({ scrollToHome, scrollToAbout, scrollToContact,scrollToProjects,scrollToExpertise }) {
  return (
    <div className="navbar-fixed">
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={scrollToHome}>Home</Nav.Link>
              <Nav.Link onClick={scrollToExpertise}>Expertise</Nav.Link>
              <Nav.Link onClick={scrollToProjects}>Projects</Nav.Link>
              <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
              <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
            </Nav>
            <DarkModeToggle />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
