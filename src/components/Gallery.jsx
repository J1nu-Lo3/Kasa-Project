import logements from "../data/logements.json";
import { Link } from "react-router-dom";
import "../components/Gallery.scss";

function Gallery() {
  return (
    <section className="gallery">
      {logements.slice(0, 6).map((logement) => (
        <Link
          to={`/logement/${logement.id}`}
          key={logement.id}
          className="card-link"
        >
          <article key={logement.id} className="card">
            <img
              src={logement.cover}
              alt={logement.title}
              className="card__image"
            />
            <h2 className="card__title">{logement.title}</h2>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Gallery;
