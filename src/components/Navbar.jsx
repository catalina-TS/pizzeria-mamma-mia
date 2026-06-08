import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { formatNumber } from '../utils/formatNumber';

const NavbarApp = () => {
  const total = 25000;
  const token = false;

  return (

    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 py-2">
      <Container fluid>
        <Navbar.Brand href="#">¡Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-2 mt-lg-0">
            <Button variant="outline-light" className="me-2 mb-2 mb-lg-0 text-white">🍕 Home</Button>

            {token ? (
              <>
                <Button variant="outline-light" className="me-2 mb-2 mb-lg-0 text-white">🔓 Profile</Button>
                <Button variant="outline-light" className="mb-2 mb-lg-0 text-white">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light" className="me-2 mb-2 mb-lg-0 text-white">🔐 Login</Button>
                <Button variant="outline-light" className="mb-2 mb-lg-0 text-white">🔐 Register</Button>
              </>
            )}
          </Nav>

          <Nav>
            <Button variant="outline-info" className="text-info mt-2 mt-lg-0">
              🛒 Total: ${formatNumber(total)}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;