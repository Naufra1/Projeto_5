import axios from "axios";
import { useState } from "react";
import { BsCheckLg, BsX } from "react-icons/bs";

import Button from "../../../Forms/Button";
import Input from "../../../Forms/Input";
import Title from "../../../Layout/Title";
import Message from "../../../Layout/Message";

function Noticias() {
  const [noticia, setNoticia] = useState();
  const [mensagem, setMensagem] = useState("");
  const [type, setType] = useState();

  const token = JSON.parse(sessionStorage.getItem("admin-token"));

  function handleChange(e) {
    setNoticia((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <section>
      <Title titulo="Crie noticias" />
      {mensagem && <Message type={type} msg={mensagem} />}
      <form
        className={`user`}
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("https://vacineirj-api.onrender.com/news/send", noticia, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((resp) => {
              setMensagem("");

              if (mensagem == "") {
                setMensagem("Noticia criada com sucesso!");
                setType("success");
              }
            })
            .catch((err) => console.log(err));
        }}
      >
        <div className="user-names">
          <Input
            handleOnChange={handleChange}
            name="author"
            type="text"
            customClass="user-inp author"
          />
          <Input
            handleOnChange={handleChange}
            name="title"
            type="text"
            customClass="user-inp titulo"
          />
          <Input
            handleOnChange={handleChange}
            name="desc"
            type="text"
            customClass="user-inp desc"
          />
          <Input
            handleOnChange={handleChange}
            name="data"
            type="date"
            customClass="user-inp data"
          />
        </div>
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
      </form>
    </section>
  );
}

export default Noticias;
