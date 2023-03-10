import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import "./Navbar.css";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="light" variant="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Vacinei-RJ</Navbar.Brand>
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
            <LinkContainer to="/funcionalidades">
              <Nav.Link>Funcionalidades</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Duvidas?" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <LinkContainer to="/duvidas">
                  <Nav.Link>Perguntas Frequentes</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/contato">
                  <Nav.Link>Contato</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="navbar-login">
            <LinkContainer to="/cadastro">
              <Nav.Link className="link">Cadastro</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link className="link">Login</Nav.Link>
            </LinkContainer>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
