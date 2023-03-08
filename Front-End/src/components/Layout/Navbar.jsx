import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import "./Navbar.css";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Projeto</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sobre">
              <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/duvidas">
              <Nav.Link>Perguntas Frequentes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/funcionalidades">
              <Nav.Link>Funcionalidades</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="navbar-login">
            <LinkContainer to="/cadastro">
              <Nav.Link className="link">Cadastro</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link className="link">Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
