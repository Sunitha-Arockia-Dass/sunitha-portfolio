import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../../public/Images/logo.webp"

function NavBar({
  scrollToHome,
  scrollToAbout,
  scrollToContact,
  scrollToProjects,
  scrollToExpertise,
}) {
  return (
    <div className="navbar-fixed navbar">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand><Image src={logo} fluid rounded  width="40"
              height="40" /></Navbar.Brand>
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
            {/* <DarkModeToggle /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
