import { useEffect, useState } from "react";
import Title from "../../../Layout/Title";

function AdmHome() {
  const [name,setName] = useState('')

  useEffect(() => {
    let adminJson = localStorage.getItem("user_data");
    let admin = JSON.parse(adminJson)
    if(localStorage.getItem('user_data') !== null) {
      console.log(admin.name);
      setName(admin.name);
    }
  },[])
  return (
    <section>
      <Title titulo={`Bem vindo! ${name}`} />
    </section>
  );
}

export default AdmHome;
