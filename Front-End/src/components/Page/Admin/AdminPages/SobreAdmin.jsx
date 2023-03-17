import axios from "axios";
import { useEffect, useState } from "react";

import AboutTxt from "../../../Parts/AboutTxt";
import Title from "../../../Layout/Title";

function SobreAdmin() {
  const [about, setAbout] = useState("");
  const [value, setValue] = useState("");
  const url = "http://localhost:3000/adm/about";
  const auth = JSON.parse(sessionStorage.getItem("token"));

  function handleSubmit(e) {
    e.preventDefault();
    return setAbout(value);
  }
  // sessionStorage.clear()

  useEffect(() => {
    console.log(auth)
    axios
      .patch(url, { text: about }, {
        headers: {
          authorization: `Bearer ${auth}`
        }
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  }, [about]);

  return (
    <section>
      <Title titulo="Sobre Nós" />
      <AboutTxt />
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => {
            setValue(e.target.value);
          }}
          rows="2"
        ></textarea>
        <button>enviar</button>
      </form>
    </section>
  );
}

export default SobreAdmin;
