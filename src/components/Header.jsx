import "../components/Header.scss";
import logo from "../assets/LOGO.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />
      <nav className="nav-links">
        <a href="/">Accueil</a>
        <a href="/about">A propos</a>
      </nav>
    </header>
  );
}

export default Header;
