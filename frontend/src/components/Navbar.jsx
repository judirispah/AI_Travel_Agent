import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import './Navbar.css'; // For custom styles

export default function NavigationBar({ setActiveTab }) {
  return (
    <BootstrapNavbar expand="lg" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand
          href="#"
          className="navbar-brand-text"
          onClick={() => setActiveTab("home")}
        >
          TripAI ✈️
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link onClick={() => setActiveTab("home")}>Home</Nav.Link>
           <Nav.Link onClick={() => setActiveTab("itinerary")}> AI Itinerary</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("flights")}>Flights</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("contact")}>Contact Us</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("map")}>Map View</Nav.Link>
            
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
