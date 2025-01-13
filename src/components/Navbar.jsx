import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <BSNavbar.Brand href="#hero" onClick={() => scrollToSection('hero')}>
          ML Presentation
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('hero')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('supervised')}>Supervised</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('unsupervised')}>Unsupervised</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('comparison')}>Comparison</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('applications')}>Applications</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('challenges')}>Challenges</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('team')}>Team</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('conclusion')}>Conclusion</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;