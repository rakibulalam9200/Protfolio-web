import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
const Header = () => {
    return (
        <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-container"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home#profile">
            {" "}
            <span className="nav-brand">RAKIBUL ALAM</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#profile" className="nav-link-style">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#aboutMe" className="nav-link-style">
              About Me
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#projects" className="nav-link-style">
              Projects
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#contact" className="nav-link-style">
              Contact
            </Nav.Link>
            <Nav.Link as={HashLink} to="/blogs" className="nav-link-style">
              Blogs
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;