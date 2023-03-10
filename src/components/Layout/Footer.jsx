import { FaFacebook, FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-secao">
          <div className="footer-titulo">
            <h5>Mídias Sociáis</h5>
          </div>
          <ul className="midia-lista">
            <li className="midia-item">
              <FaFacebook />
            </li>
            <li className="midia-item">
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="footer-secao">
          <div className="footer-titulo">
            <h5>Duvidas e Contato</h5>
          </div>
          <nav className="duvidas-lista">
            <div className="duvidas-item">
            <NavLink to='/duvidas'>Perguntas Frequentes</NavLink>
            </div>
            <div className="duvidas-item">
            <NavLink to='/contato'>Nos contate</NavLink>
            </div>
          </nav>
        </div>
      </div>
      <p className="footer-txt">
        <span>Vacinei-Rj</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
