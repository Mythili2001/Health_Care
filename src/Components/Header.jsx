import React from 'react';
import '../Stylesheets/Header.css';
import {Navbar} from  'react-bootstrap';
import Nav from  'react-bootstrap/Nav';
import {Container} from  'react-bootstrap';

function Header () {
  return (
  <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
         <Container>
            <Navbar.Brand>Health Line</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                {/* <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                {/* </Nav> */}
                <Nav>
                <Nav.Link href="#news">General News</Nav.Link>
                <Nav.Link  href="#profile">
                    Profile
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  </div>
  );
}
export default Header