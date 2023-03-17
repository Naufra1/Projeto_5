import { NavLink } from "react-router-dom";
import Title from "../Layout/Title";

function ErrorPage() {
  return (
    <section className="Error-Page">
      <Title titulo="Error" />
      <div>
        <h5>
          Algo aconteceu com a página,
          <NavLink to="/">
            Clique aqui para voltar para a página inicial.
          </NavLink>
        </h5>
      </div>
    </section>
  );
}

export default ErrorPage;
