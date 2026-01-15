import "../Styles/Header.css";
import logo from "../assets/LOGO.png";

function Header() {
  return (
    <header>
      <div className="lmj-banner">
        <img src={logo} alt="Kasa" className="lmj-logo" />
      </div>
      <nav class="nav-links">
        <a href="/">Accueil</a>
        <a href="/about">A propos</a>
      </nav>
    </header>
  );
}

export default Header;
