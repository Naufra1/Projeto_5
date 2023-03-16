import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AboutTxt from "../../Parts/AboutTxt";


function SobreAdmin() {
  const [about,setAbout] = useState('??')
  const urlAdm = "http://localhost:3000/adm/about"

  const text = about

  useEffect(() => {
    axios.patch(urlAdm,{
      text
    })
    .then(resp => {
      console.log(resp.data)
    })
    .catch(err => console.log(err))
  }, [about])
  
  return (
    <>
    <AboutTxt />
    <textarea onChange={(e) => setAbout(e.target.value)}></textarea>
    </>
  )
}

export default SobreAdmin