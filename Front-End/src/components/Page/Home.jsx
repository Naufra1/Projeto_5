import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";


import "./Estilos/Home.css";
import Button from "../Forms/Button";
import Title from "../Layout/Title";

function Home() {
  return (
    <section>
      <div className="hero">
        <Title titulo="Nos ajude a recolher os dados!" />
        <LinkContainer to="/cadastro">
          <Nav.Link>
            <Button classButton="button-form hero-btn" text="Cadastre-se" />
          </Nav.Link>
        </LinkContainer>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Home;
