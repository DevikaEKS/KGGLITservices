import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as RouterLink } from 'react-router-dom'; // Renamed to avoid conflict with react-scroll's Link
import { Link as ScrollLink } from "react-scroll"; // For scrolling
import logo from "../../Asset/Logo Tagline-02 (1).png";
import "./Hrmenubar.css";

function Hrmenubar() {
  const [expanded, setExpanded] = useState(false); 
  const handleToggle = () => setExpanded(!expanded); 
  const handleSelect = () => setExpanded(false); 
 const [hrDropdownOpen, setHrDropdownOpen] = useState(false); // State for HR dropdown
    const toggleHrDropdown = () => setHrDropdownOpen(!hrDropdownOpen); // Toggle HR dropdown
 
     // Handle opening the "Our Services" dropdown
  const handleOurServicesClick = () => {
    // Close the ERP dropdown if it is open when clicking "Our Services"
    if (hrDropdownOpen) {
      setHrDropdownOpen(false);
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
      <Container>
        <Navbar.Brand as={RouterLink} to="/">
          <img src={logo} className="logsiz" title='KG Genius Labs' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={RouterLink} to="/" className='navtext px-3' onClick={handleSelect}>Home</Nav.Link>
            <Nav.Link as={RouterLink} to="/aboutus" className='navtext px-3' onClick={handleSelect}>About Us</Nav.Link>
            <NavDropdown
              title={<span className=" px-3 navtext1">Our Services</span>}
              id="basic-nav-dropdown" onClick={handleOurServicesClick}>
              {/* HR Consultancy Dropdown */}
              <div
                className="dropdown-item navtext1"
                onClick={toggleHrDropdown}
                style={{ cursor: "pointer" }}
              >
                ERP Services
              </div>
              {hrDropdownOpen && (
                <div
                  className={`dropdown-submenu bg-light rounded-3 ${
                    expanded ? "d-block d-lg-none" : "d-none d-lg-block"
                  }`}
                >
                  <NavDropdown.Item
                    as={RouterLink}
                    to="/sap-services"
                    className="navtext1"
                    onClick={handleSelect}
                  >
                   SAP Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={RouterLink}
                    to="/custom-erp-software-solution"
                    className="navtext1"
                    onClick={handleSelect}
                  >
                    KG Genius ERP
                  </NavDropdown.Item>
                </div>
              )}
              <NavDropdown.Item as={RouterLink} to="/it-services" className='navtext1 px-3' onClick={handleSelect}>IT Services</NavDropdown.Item>
              <NavDropdown.Item as={RouterLink} to="/digital-marketing-services-coimbatore" className='navtext1' onClick={handleSelect}>Digital Marketing Services</NavDropdown.Item>
              <NavDropdown.Item as={RouterLink} to="/hr-consultancy" className='navtext1' onClick={handleSelect}>HR Consultancy</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={RouterLink} to="/blog" className='navtext px-3' onClick={handleSelect}>Blog</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {/* Using ScrollLink from react-scroll for smooth scrolling */}
            <ScrollLink
              to="hrcontact"  // ID of the contact section
              smooth={true}
              duration={500}
              className='contactbutton px-3 py-2 rounded-1 text-decoration-none'
              onClick={() => setExpanded(false)} // Close navbar when clicking link
            >
              Contact Us
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Hrmenubar;
