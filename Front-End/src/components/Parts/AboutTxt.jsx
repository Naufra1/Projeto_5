import axios from "axios";
import { useState } from "react";

import Loading from "../Layout/Loading";
import sobreImg from '../../img/Sobre.jpeg'

function AboutTxt() {
  const [aboutText, setAboutText] = useState();
  const [removeLoading, setRemoveloading] = useState(false);
  const url = "https://vacineirj-api.onrender.com/about";

  axios.get(url).then((resp) => {
    setAboutText(`${resp.data.about.text}`);
    setRemoveloading(true);
  });

  return removeLoading ? (
    <>
    <img src={sobreImg} className='sobre-img'></img>
    <p>{aboutText}</p>
    </>
  ) : <Loading />;
}

export default AboutTxt;
