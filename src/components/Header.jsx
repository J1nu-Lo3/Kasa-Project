import Banner from "./Banner";
import "../Styles/Header.css";

function Header() {
  return (
    <header>
      <div>
        <Banner />
      </div>
      <nav class="nav-links">
        <a href="/">Accueil</a>
        <a href="/about">A propos</a>
      </nav>
    </header>
  );
}

export default Header;
