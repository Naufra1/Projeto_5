import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

import "./Estilos/Home.css";
import Button from "../Forms/Button";
import Title from "../Layout/Title";
import Loading from "../Layout/Loading";

function Home() {
  const [removeLoading, setRemoveloading] = useState(false);
  const [noticiais, setNoticiais] = useState();
  const [risco, setRisco] = useState();
  const [sintomas, setSintomas] = useState();
  const [profissional, setProfissional] = useState();

  useEffect(() => {
    axios.get("https://vacineirj-api.onrender.com/news").then((resp) => {
      let data = resp.data.news;
      setNoticiais(data);
      console.log(data);
      setRemoveloading(true);
    });
  }, []);

  return (
    <section>
      <div className="hero">
        <Title titulo="Nos ajude a recolher informações!" />
        <LinkContainer to="/cadastro">
          <Nav.Link className="nav-btn">
            <Button classButton="button-form hero-btn" text="Cadastre-se" />
          </Nav.Link>
        </LinkContainer>
      </div>
      {removeLoading ? (
        <div className="home-noticiais">
          <h3>Ultimas notícias:</h3>
          {noticiais &&
            noticiais.map((noticia) => (
              <div className="noticiais-box" key={noticia.id}>
                <div className="noticiais-textos">
                  <div className="noticiais-titulo">
                    <h4>{noticia.title}</h4>
                  </div>
                  <div className="noticiais-author">
                    <h6>Autor: {noticia.author}</h6>
                  </div>
                  <div className="noticiais-desc">
                    <p>{noticia.desc}</p>
                  </div>
                  <div className="noticiais-data">
                    <p>Públicado em: {noticia.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Home;
