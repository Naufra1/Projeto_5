import { Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import Menu from "./components/Layout/Navbar";


function App() {
  return (
    <>
      <Menu />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
