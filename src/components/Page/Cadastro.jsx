import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Title from "../Parts/Title";

function Cadastro() {
  return (
      <section className="cadastro">
        <Title titulo="Cadastro" />
        <form className="form">
          <div className="formulario nome-cpf">
            <Input
              type="text"
              name="nome"
              text="Nome"
              placeholder="Digite o seu nome"
            />
            <Input
              type="text"
              name="cpf"
              text="Cpf"
              placeholder="Digite o seu cpf"
            />
          </div>
          <div className="formulario data-tel">
            <Input
              type="date"
              name="data-de-nascimento"
              text="Data de Nascimento"
            />
            <Input
              type="text"
              name="celular"
              text="Telefone celular"
              placeholder="Digite o seu número"
            />
          </div>
          <div className="formulario email">
            <Input
              type="email"
              name="email"
              text="Email"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              placeholder="Digite o email"
            />
          </div>
          <div className="formulario senha">
            <Input
              type="text"
              name="password"
              text="Senha"
              placeholder="Digite a senha"
            />
            <Input
              type="text"
              name="password"
              text="Confimação da senha"
              placeholder="Digite a senha novamente"
            />
          </div>
          <div className="botao ">
            <Button classButton="plaholder" type="submit" text="Entrar" />
          </div>
        </form>
      </section>
  );
}

export default Cadastro;
