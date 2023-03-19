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
import AdmHome from "./components/Page/Admin/AdminPages/AdmHome";
import SobreAdmin from "./components/Page/Admin/AdminPages/SobreAdmin";
import FuncAdmin from "./components/Page/Admin/AdminPages/FuncAdmin";
import AdmPages from "./components/Page/Admin/AdmPages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/Funcionalidades" element={<Funcionalidade />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/duvidas" element={<Duvidas />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdmPages />}>
        <Route index element={<AdmHome />} />
        <Route path="/admin/about" element={<SobreAdmin />} />
        <Route path="/admin/users" element={<FuncAdmin />} />
      </Route>
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
