import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">APIdeputados</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Deputados</Nav.Link>
            <Nav.Link href="#pricing">Partidos</Nav.Link>
            <NavDropdown title="Sac" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sac</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Telefone
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Email</NavDropdown.Item>
           
            </NavDropdown>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Cabecalho