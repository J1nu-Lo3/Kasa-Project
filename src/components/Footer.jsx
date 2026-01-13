import logo from "../assets/LOGOv2.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="lmj-banner">
        <img src={logo} alt="Kasa" className="lmj-logo" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
