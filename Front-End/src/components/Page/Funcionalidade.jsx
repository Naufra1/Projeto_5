import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Title from "../Layout/Title";

import "./Estilos/Funcionalidade.css";

function Funcionalidade() {
  let [newInfo, setNewInfo] = useState({});
  const storage = JSON.parse(sessionStorage.getItem("user"));
  const id = storage.id;
  const token = JSON.parse(sessionStorage.getItem("user-token"));

  function handleChange(e) {
    setNewInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .patch(`http://vacineirj-api.onrender.com/user/send/${id}`, newInfo, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`http://vacineirj-api.onrender.com/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        let data = resp.data;
        setNewInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return storage ? (
    <section>
      <Title titulo="Suas Informaçoes" />
      <form className="user" onSubmit={handleSubmit}>
        <h5>Informações do Cadastro:</h5>
        <div className="user-names">
          <Input
            checked
            name="name"
            type="text"
            customClass="user-inp nome"
            value={newInfo.name}
          />
          <Input
            checked
            name="surname"
            type="text"
            customClass="user-inp sobrenome"
            value={newInfo.surname}
          />
          <Input
            checked
            name="data"
            type="data"
            customClass="user-inp data"
            value={newInfo.data}
          />
          <Input
            checked
            name="sexo"
            type="text"
            customClass="user-inp sexo"
            value={newInfo.sexo}
          />
          <Input
            checked
            name="municipio"
            type="text"
            customClass="user-inp municipio"
            value={newInfo.municipio}
          />
        </div>
        <div className="user-login">
          <Input
            checked
            name="email"
            type="email"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            customClass="user-inp email"
            value={newInfo.email}
          />
          <Input
            checked
            name="origin_password"
            type="text"
            customClass="user-inp password"
            value={newInfo.origin_password}
          />
        </div>
        <h5>Novas opções de cadastro:</h5>
        <h6>Essas opções são opcionais</h6>
        <div className="user-info">
          <div className="box-input box-covid covid">
            <select name="covid" className="select" onChange={handleChange}>
              <option value="">Selecione uma opção</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
          <Input
            handleOnChange={handleChange}
            name="sintomas"
            type="text"
            customClass="user-inp sintomas"
            placeholder={newInfo.sintomas}
          />
          <div className="box-input box-risco">
            <select
              name="risco"
              className="select covid"
              onChange={handleChange}
            >
              <option value="">Selecione uma opção</option>
              <option value="Obesidade">Obesidade</option>
              <option value="Idoso">Idoso</option>
              <option value="Portador">Portador de doença crônica</option>
              <option value="Gestante">Gestante</option>
              <option value="crianças">Crianças abaixo de 5 anos</option>
              <option value="Outro">Outro</option>
              <option value="Não">Não estava no grupo de risco</option>
            </select>
          </div>
          <div className="box-input box-profissional">
            <select
              name="profissional"
              className="select user-inp profissional"
              onChange={handleChange}
              placeholder={newInfo.profissional}
            >
              <option value="">Selecione uma opção</option>
              <option value="Obesidade">Enfermagem</option>
              <option value="Idoso">Médico</option>
              <option value="Gestante">Laboratório</option>
              <option value="Outro">Outros</option>
              <option value="Não">Não trabalho na área</option>
            </select>
          </div>
        </div>
        <Button
          classButton="button-form info-btn"
          text="Enviar novas informações"
        />
      </form>
    </section>
  ) : (
    <Navigate to="/login" />
  );
}

export default Funcionalidade;
