import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./cartwidget/CartWidget";

function NavBar() {   
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
          <Navbar.Brand href="#home">
            <img
              src="logoCeramicos.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="ceramicos logo"
            />
          </Navbar.Brand>
        </Container>
      <Container>
        <Navbar.Brand href="#home">Ceramicos MZA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ceramicos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sanitarios
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <CartWidget/>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;