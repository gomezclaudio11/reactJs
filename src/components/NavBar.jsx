import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
      <>
<Navbar bg="light" data-bs-theme="light">
<Container>
  <Navbar.Brand href="#home">Gomez Claudio</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">js</Nav.Link>
    <Nav.Link href="#pricing">github</Nav.Link>
  </Nav>
</Container>
</Navbar>
</>
  );
}

export default Menu;