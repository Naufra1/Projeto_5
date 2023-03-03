import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import "./Navbar.css";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Projeto</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/sobre">
              <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/funcionalidades">
              <Nav.Link>Funcionalidades</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
          </Nav>
          <div className="navbar-login">
            <LinkContainer to="/cadastro">
              <Nav.Link>Cadastro</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
