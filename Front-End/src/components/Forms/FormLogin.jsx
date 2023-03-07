import "./FormLogin.css";

import Input from "./FormParts/Input";
import Button from "./FormParts/Button";

function FormLogin() {
  return (
    <div className="form">
      <div className="form-title">
        <h2>Login</h2>
      </div>
      <form>
        <div>
          <Input
            type="email"
            name="email"
            text="Email:"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            placeholder="Digite o seu email"
          />
          <Input
            type="text"
            name="password"
            text="Senha:"
            placeholder="Digite a sua senha"
          />
        </div>
        <Button classButton="button-form" type="submit" text="Entrar" />
        <p>esqueceu a senha?</p>
      </form>
    </div>
  );
}

export default FormLogin;
