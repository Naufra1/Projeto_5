import axios from "axios";
import {
  BsFillTrash3Fill,
  BsFillPencilFill,
  BsCheckLg,
  BsX,
  BsArrowRepeat,
} from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";

import "./FuncAdmin.css";
import Title from "../../../Layout/Title";
import Input from "../../../Forms/Input";
import Button from "../../../Forms/Button";
import Message from "../../../Layout/Message";

function FuncAdmin() {
  const [users, setUsers] = useState();
  const [edit, setEdit] = useState("fechado");
  const [newInfo, setNewInfo] = useState();
  const [toggle, setToggle] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [type, setType] = useState();
  const token = JSON.parse(sessionStorage.getItem("admin-token"));

  function handleToggle() {
    setToggle(!toggle);
    setEdit("fechado");
  }

  function handleChange(e) {
    setNewInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/adm/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        let data = resp.data.lista;
        setUsers(data);
      });
  }, [toggle]);

  return (
    <section>
      <Title titulo="Lista de Usuários" />
      {mensagem && <Message type={type} msg={mensagem} />}
      <div className="refresh-btn">
        <Button
          handleOnClick={handleToggle}
          text={<BsArrowRepeat />}
          text2="recarregar"
        ></Button>
      </div>
      {users &&
        users.map((user) => (
          <Accordion className="box-user" bsPrefix="false" key={user.id} flush>
            <Accordion.Item bsPrefix="a" className="user-item" eventKey="0">
              <Accordion.Header
                onClick={() => {
                  setNewInfo(user);
                }}
                bsPrefix="a"
              >
                <div className="header">
                  <div>
                    <h5>
                      Usuário: {user.name} {user.surname}
                    </h5>
                  </div>
                  <div
                    className="svg-list"
                    onClick={async (e) => {
                      e.preventDefault();
                      const resp = await axios.delete(
                        `http://localhost:3000/adm/delete/${user.id}`,
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        }
                      );
                      setMensagem("");

                      if (mensagem == "") {
                        setMensagem("Usuário deletado com sucesso!");
                        setType("success");
                      }
                      setToggle(!toggle);
                    }}
                  >
                    <BsFillTrash3Fill className="svg trash" />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <form
                  className={`user ${edit}`}
                  onReset={() => {
                    setEdit("fechado");
                  }}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const resp = await axios.patch(
                      `http://localhost:3000/adm/update/${user.id}`,
                      newInfo,
                      {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }
                    );
                    setMensagem("");

                    if (mensagem == "") {
                      setMensagem("Dados modificado com sucesso!");
                      setType("success");
                    }
                    setEdit("fechado");
                  }}
                >
                  <div className="user-names">
                    <Input
                      handleOnChange={handleChange}
                      name="name"
                      type="text"
                      customClass="user-inp nome"
                      placeholder={user.name}
                    />
                    <Input
                      handleOnChange={handleChange}
                      name="surname"
                      type="text"
                      customClass="user-inp sobrenome"
                      placeholder={user.surname}
                    />
                    <Input
                      handleOnChange={handleChange}
                      name="data"
                      type="number"
                      customClass="user-inp data"
                      placeholder={user.data}
                    />
                    <Input
                      handleOnChange={handleChange}
                      name="sexo"
                      type="text"
                      customClass="user-inp sexo"
                      placeholder={user.sexo}
                    />
                    <Input
                      handleOnChange={handleChange}
                      name="municipio"
                      type="text"
                      customClass="user-inp municipio"
                      placeholder={user.municipio}
                    />
                  </div>
                  <div className="user-login">
                    <Input
                      handleOnChange={handleChange}
                      name="email"
                      type="email"
                      pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                      customClass="user-inp email"
                      placeholder={user.email}
                    />
                    <Input
                      handleOnChange={handleChange}
                      name="origin_password"
                      type="text"
                      customClass="user-inp password"
                      placeholder={user.origin_password}
                    />
                  </div>
                  <div className="user-info">
                    <Input
                      handleOnChange={handleChange}
                      name="covid"
                      type="text"
                      customClass="user-inp covid"
                      placeholder={user.covid}
                    />
                    <Input
                      handleOnChange={handleChange}
                      name="sintomas"
                      type="text"
                      customClass="user-inp sintomas"
                      placeholder={user.sintomas}
                    />
                    <Input
                      handleOnChange={handleChange}
                      name="risco"
                      type="text"
                      customClass="user-inp risco"
                      placeholder={user.risco}
                    />
                    <Input
                      handleOnChange={handleChange}
                      name="profissional"
                      type="text"
                      customClass="user-inp profissional"
                      placeholder={user.profissional}
                    />
                  </div>
                  {edit === "editar" ? (
                    <div className="user-check">
                      <div>
                        <Button
                          classButton="edit-btn"
                          text={<BsCheckLg className="svg send" />}
                        />
                      </div>
                      <div className="user-check">
                        <Button
                          type="reset"
                          classButton="edit-btn"
                          text={<BsX className="svg reset" />}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        className="svg-list"
                        onClick={() => {
                          setEdit("editar");
                        }}
                      >
                        <BsFillPencilFill className="svg edit" />
                      </div>
                    </>
                  )}
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
    </section>
  );
}

export default FuncAdmin;
