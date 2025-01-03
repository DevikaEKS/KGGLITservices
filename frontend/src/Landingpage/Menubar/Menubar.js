import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../../Asset/Logo Tagline-02 (1).png";
import "./Menubar.css";

function Menubar() {
  const [expanded, setExpanded] = useState(false); 
  const handleToggle = () => setExpanded(!expanded); 
  const handleSelect = () => setExpanded(false); 
    const [hrDropdownOpen, setHrDropdownOpen] = useState(false); // State for HR dropdown
    const toggleHrDropdown = () => setHrDropdownOpen(!hrDropdownOpen); // Toggle HR dropdown
  return (
    <Navbar expand="lg" className="bg-body-tertiary " expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="logsiz" title='KG Genius Labs' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className='navtext px-3' onClick={handleSelect}>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className='navtext px-3' onClick={handleSelect}>About Us</Nav.Link>
            <NavDropdown
              title={<span className=" px-3 navtext1">Our Services</span>}
              id="basic-nav-dropdown">
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
                    as={Link}
                    to="/sap-services"
                    className="navtext1"
                    onClick={handleSelect}
                  >
                   SAP Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/custom-erp-software-solution"
                    className="navtext1"
                    onClick={handleSelect}
                  >
                    KG Genius ERP
                  </NavDropdown.Item>
                </div>
              )}
            {/* <NavDropdown title={<span className='px-3 navtext1'>Our Services</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sap-services" className='navtext1' onClick={handleSelect}>SAP Services</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/it-services" className='navtext1' onClick={handleSelect}>IT Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/digital-marketing-services" className='navtext1' onClick={handleSelect}>Digital Marketing Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hr-consultancy" className='navtext1' onClick={handleSelect}>HR Consultancy</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link as={Link} to="/blog" className='navtext px-3' onClick={handleSelect}>Blog</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to="/contact" className='contactbutton px-3 rounded-1' onClick={handleSelect}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Menubar;
