import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import Menu from "./components/Layout/Navbar";
import About from "./components/Page/About";
import Cadastro from "./components/Page/Cadastro";
import Contato from "./components/Page/Contato";
import Funcionalidade from "./components/Page/Funcionalidade";
import Home from "./components/Page/Home";
import Login from "./components/Page/Login";

function App() {
  return (
    <Router>
      <Menu />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/funcionalidades" element={<Funcionalidade />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
