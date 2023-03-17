import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";

import "./FuncAdmin.css";
import Title from "../../../Layout/Title";
import Input from "../../../Forms/Input";

function FuncAdmin() {
  const [users, setUsers] = useState();
  const token = JSON.parse(sessionStorage.getItem("token"));

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
        console.log(users);
      });
  }, []);

  return (
    <section>
      <Title titulo="Lista de Usuários" />
      {users &&
        users.map((user) => (
          <Accordion className="box-user" bsPrefix="false" key={user.id} flush>
            <Accordion.Item bsPrefix="a" className="user-item" eventKey="0">
              <Accordion.Header>
                <div>
                  <h5>Usuário: {user.name}</h5>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <form>
                  <Input customClass='user-form' value={user.email}/>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
    </section>
  );
}

export default FuncAdmin;
