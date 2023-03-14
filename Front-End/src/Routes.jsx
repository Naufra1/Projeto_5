import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import About from "./components/Page/About";
import Cadastro from "./components/Page/Cadastro";
import Contato from "./components/Page/Contato";
import Duvidas from "./components/Page/Duvidas";
import Funcionalidade from "./components/Page/Funcionalidade";
import Home from "./components/Page/Home";
import Login from "./components/Page/Login";
import App from "./App";
import ErrorPage from "./components/Page/ErrorPage";
import SobreAdmin from "./components/Page/Admin/SobreAdmin";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/funcionalidades" element={<Funcionalidade />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/duvidas" element={<Duvidas />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<SobreAdmin />} />
    </Route>
  )
);

// export const admRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/adm" element={<AdmApp />}>
//       <Route path="/funcAdm" element={<FuncAdmin />} />
//       <Route path="/sobreAdm" element={<SobreAdmin />} />
//     </Route>
//   )
// );
