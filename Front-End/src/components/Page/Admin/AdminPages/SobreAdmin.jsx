import axios from "axios";
import { useEffect, useState } from "react";

import "./SobreAdmin.css";
import AboutTxt from "../../../Parts/AboutTxt";
import Title from "../../../Layout/Title";
import Button from "../../../Forms/Button";
import Message from "../../../Layout/Message";

function SobreAdmin() {
  const [about, setAbout] = useState("");
  const [value, setValue] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [type, setType] = useState();

  const url = "https://vacineirj-api.onrender.com/adm/about";
  const auth = JSON.parse(sessionStorage.getItem("admin-token"));

  function handleSubmit(e) {
    e.preventDefault();

    return setAbout(value);
  }

  useEffect(() => {
    axios
      .patch(
        url,
        { text: about },
        {
          headers: {
            authorization: `Bearer ${auth}`,
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        setMensagem("");

        if (mensagem == "") {
          setMensagem("Texto trocado com sucesso!");
          setType("success");
        }
      })
      .catch((err) => console.log(err));
  }, [about]);

  return (
    <section>
      <Title titulo="Sobre Nós" />
      {mensagem && <Message type={type} msg={mensagem} />}
      <AboutTxt />
      <form className="sobre-form" onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => {
            setValue(e.target.value);
          }}
          rows="2"
        ></textarea>
        <Button classButton="button-form" text="Enviar mudança"></Button>
      </form>
    </section>
  );
}

export default SobreAdmin;
