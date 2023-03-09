import { FaFacebook, FaInstagram } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-midia">
          <div className="midia-titulo">
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
      </div>
      <p className="footer-txt">
        <span>Vacinei-Rj</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
