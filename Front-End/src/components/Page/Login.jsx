import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Title from "../Layout/Title";

import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Navigate } from "react-router-dom";

function Login() {
  const { setUser, user, handleLogin } = useContext(LoginContext);

  function handleChange(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <section className="form">
      <Title titulo="Login" />
      {user.admin && <Navigate to="/admin" replace={true} />}
      {user.client && <Navigate to="/Funcionalidades" replace={true} />}
      <form onSubmit={handleLogin}>
        <div>
          <Input
            handleOnChange={handleChange}
            type="email"
            name="email"
            text="Email:"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            placeholder="Digite o seu email"
          />
          <Input
            handleOnChange={handleChange}
            type="text"
            name="password"
            text="Senha:"
            placeholder="Digite a sua senha"
          />
        </div>
        <Button classButton="button-form" type="submit" text="Entrar" />
      </form>
    </section>
  );
}

export default Login;
