import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import { LoginContext } from "../../context/LoginContext";
import "./Navbar.css";

function Menu() {
  const { handleLogout } = useContext(LoginContext);
  const admLogged = sessionStorage.getItem("admin");
  const userLogged = sessionStorage.getItem("user");

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="light" variant="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Vacinei-RJ</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {admLogged ? (
            <>
              <Nav className="me-auto">
                <LinkContainer to="/admin/about">
                  <Nav.Link>Mudar o sobre</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin/users">
                  <Nav.Link>Lista de usuários</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin/noticias">
                  <Nav.Link>Notícias</Nav.Link>
                </LinkContainer>
              </Nav>
              <div className="navbar-login">
                <LinkContainer to="/login">
                  <Nav.Link className="link" onClick={handleLogout}>
                    Sair
                  </Nav.Link>
                </LinkContainer>
              </div>
            </>
          ) : (
            <>
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Inicio</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/sobre">
                  <Nav.Link>Sobre</Nav.Link>
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
                {userLogged ? (
                  <NavDropdown title="Perfil" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <LinkContainer to="/Funcionalidades">
                        <Nav.Link>Dados do Perfil</Nav.Link>
                      </LinkContainer>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <LinkContainer to="/login">
                        <Nav.Link className="link" onClick={handleLogout}>
                          Sair
                        </Nav.Link>
                      </LinkContainer>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <>
                    <LinkContainer to="/cadastro">
                      <Nav.Link className="link">Cadastro</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <Nav.Link className="link">Login</Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </div>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
