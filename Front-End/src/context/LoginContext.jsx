import { createContext, useState } from "react";
import axios from "axios";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
    success: false
  });

  // async function handleLogin() {
  //   if (user.admin) {
  //     const resp = await axios.post("http://localhost:3000/admin/login", user);
  //     setUser({
  //       ...user,
  //       email: resp.data.email,
  //       password: resp.data.password,
  //     });
  //     localStorage.setItem("user", resp.data);
  //     console.log(resp.data);
  //   }
  //   if (!user.admin) {
  //     const resp = await axios.post("http:localhost:3000/user/login", user);
  //     setUser({
  //       ...user,
  //       email: resp.data.email,
  //       password: resp.data.password,
  //     });
  //     localStorage.setItem("user", resp.data);
  //     console.log(resp.data);
  //   }
  // }

  async function handleLogin(e) {
    e.preventDefault();
    const resp = await axios.post("http://localhost:3000/adm/login", user);
    setUser({
      email: resp.data.email,
      password: resp.data.password,
      success: true
    });
    localStorage.setItem("user_data", JSON.stringify(resp.data.adm));
    console.log(resp.data);
  }

  function handleLogout() {
    setUser({ email: "", password: "" });
    localStorage.clear();
  }

  return (
    <LoginContext.Provider value={{ setUser, user, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
}
