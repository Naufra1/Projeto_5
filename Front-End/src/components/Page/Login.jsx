import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Title from "../Parts/Title";

import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Navigate } from 'react-router-dom'

function Login() {
  const { setUser, user, handleLogin } = useContext(LoginContext);

  function handleChange(e) {
    setUser(prev => ({...prev, [e.target.name]:e.target.value}))
    console.log(user)
  }

  console.log(user)

  return (
    <section className="form">
      <Title titulo="Login" />
      {user.success && <Navigate to="/sobre" replace={true} />}
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
        <p>esqueceu a senha?</p>
      </form>
    </section>
  );
}

export default Login;
