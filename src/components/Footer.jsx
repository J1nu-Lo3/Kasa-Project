import logo from "../assets/LOGOv2.png";
import "../components/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
