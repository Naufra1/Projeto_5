import { createContext, useState } from "react";
import axios from "axios";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    client: false,
    admin: false,
  });
  const [mensagem, setMensagem] = useState("");
  const [type, setType] = useState();

  async function handleLogin(e) {
    e.preventDefault();
    if (user.email === "") {
      return alert("Digite o seu email");
    }
    if (user.password === "") {
      return alert("Digite a sua senha");
    }
    try {
      const resp = await axios.post(
        "https://vacineirj-api.onrender.com/adm/login",
        user
      );
      setUser({
        ...user,
        email: resp.data.email,
        password: resp.data.password,
        admin: true,
      });
      setMensagem("");

      if (mensagem == "") {
        setMensagem("Mensagem enviada com sucesso.");
        setType("success");
      }
      sessionStorage.setItem("admin", JSON.stringify(resp.data.adm));
      sessionStorage.setItem("admin-token", JSON.stringify(resp.data.token));
    } catch {
      const resp = await axios.post(
        "https://vacineirj-api.onrender.com/user/login",
        user
      );
      setUser({
        ...user,
        email: resp.data.email,
        password: resp.data.password,
        client: true,
      });
      setMensagem("");

      if (mensagem == "") {
        setMensagem("Mensagem enviada com sucesso.");
        setType("success");
      }
      sessionStorage.setItem("user", JSON.stringify(resp.data.user));
      sessionStorage.setItem("user-token", JSON.stringify(resp.data.token));
    }
  }

  function handleLogout() {
    setUser({
      email: "",
      password: "",
      client: false,
      admin: false,
      isLogged: false,
    });
    sessionStorage.clear();
  }

  return (
    <LoginContext.Provider value={{ setUser, user, handleLogin, handleLogout, mensagem, type }}>
      {children}
    </LoginContext.Provider>
  );
}
