import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Title from "../Parts/Title";

function Login() {
  return (
      <section className="form">
        <Title titulo="Login" />
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
      </section>
  );
}

export default Login;
