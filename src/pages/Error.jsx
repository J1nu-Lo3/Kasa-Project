import "../Styles/Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="error">
      <h1>404</h1>
      <p className="error__text">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </p>

      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  );
}
export default Error;
