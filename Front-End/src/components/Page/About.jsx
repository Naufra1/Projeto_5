import AboutTxt from "../Parts/AboutTxt";
import Title from "../Layout/Title";
import "./Estilos/About.css";

function About() {
  return (
    <section>
      <Title titulo="Sobre nós" />
      <div>
        <AboutTxt />
      </div>
    </section>
  );
}

export default About;
