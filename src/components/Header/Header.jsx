import "./Header.scss";
import logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />
      <nav className="nav-links">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
