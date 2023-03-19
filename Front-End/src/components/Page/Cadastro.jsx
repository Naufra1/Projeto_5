import { useState } from "react";
import axios from "axios";

import "./Estilos/Cadastro.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Title from "../Layout/Title";

function Cadastro() {
  let [cadastro, setCadastro] = useState({
    name: "",
    surname: "",
    data: "",
    municipio: "",
    sexo: "",
    email: "",
    confirmpassword: "",
    password: "",
  });
  let [erro, setErro] = useState({
    name: "",
    surname: "",
    Data: "",
    Municipio: "",
    Sexo: "",
    Email1: "",
    Origin: "",
    Password: "",
  });

  function cadastroChange(e) {
    setCadastro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(cadastro);
    if (cadastro.name === "") {
      return setErro({ name: "name" });
    }
    if (cadastro.surname === "") {
      return setErro({ surname: "surname" });
    }
    if (cadastro.data === "") {
      return setErro({ Data: "Data" });
    }
    if (cadastro.municipio === "") {
      return setErro({ Municipio: "Municipio" });
    }
    if (cadastro.sexo === "") {
      return setErro({ Sexo: "Sexo" });
    }
    if (cadastro.email === "") {
      return setErro({ Email: "Email" });
    }
    if (cadastro.password === "") {
      return setErro({ Origin: "Origin" });
    }
    if (cadastro.confirmpassword === "") {
      return setErro({ ConfirmPassword: "Password" });
    }
    try {
      axios
        .post("https://vacineirj-api.onrender.com/user/register", cadastro)
        .then((resp) => console.log(resp.data));
    } catch (err) {
      console.log(`teste ${err}`);
    }
  }

  return (
    <section className="form cadastro">
      <Title titulo="Cadastro" />
      <form className="teste" onSubmit={handleSubmit}>
        <div className="formulario nome-cpf">
          <Input
            customClass={erro.name}
            handleOnChange={cadastroChange}
            type="text"
            name="name"
            text="Nome"
            placeholder="Digite o seu nome"
          />

          <Input
            handleOnChange={cadastroChange}
            customClass={erro.surname}
            type="text"
            name="surname"
            text="Sobrenome"
            placeholder="Digite o seu sobrenome"
          />
        </div>
        <div className="formulario info">
          <Input
            customClass={erro.Data}
            handleOnChange={cadastroChange}
            type="date"
            name="data"
            text="Data de Nascimento"
          />
          <Input
            customClass={erro.Municipio}
            handleOnChange={cadastroChange}
            type="text"
            name="municipio"
            text="Município"
            placeholder="Digite o seu município"
          />
          <div className="box-input">
            <label htmlFor="Sexo">Genero</label>
            <select
              onChange={cadastroChange}
              name="sexo"
              className={`select ${erro.Sexo}`}
            >
              <option value="">Selecione uma opção</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
              <option value="Prefiro">Prefiro não dizer</option>
            </select>
          </div>
        </div>
        <div className="formulario Email">
          <Input
            customClass={erro.Email}
            handleOnChange={cadastroChange}
            type="Email"
            name="email"
            text="Email"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            placeholder="Digite o Email"
          />
        </div>
        <div className="formulario senha">
          <Input
            customClass={erro.Origin}
            handleOnChange={cadastroChange}
            type="text"
            name="password"
            text="Senha"
            placeholder="Digite a senha"
          />
          <Input
            customClass={erro.Password}
            handleOnChange={cadastroChange}
            type="text"
            name="confirmpassword"
            text="Confimação da senha"
            placeholder="Digite a senha novamente"
          />
        </div>
        <div className="botao ">
          <Button classButton="button-form" type="submit" text="Cadastrar" />
        </div>
      </form>
    </section>
  );
}

export default Cadastro;
