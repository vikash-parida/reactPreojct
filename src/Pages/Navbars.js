import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Mitra_Logo from '../Images/Mitra_Logo.jpg'
import { Button } from "react-bootstrap";

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Mitra_Logo} width={255} height={60}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Profile" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#aboutus">About us</NavDropdown.Item>
              <NavDropdown.Item href="#statements">
                Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#downloads">Downloads</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#contactus">
            <Button variant="secondary">Connect With Us</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
