import logements from "../data/logements.json";
import { Link } from "react-router-dom";
import "../Styles/Gallery.css";

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
            <div className="lmj-gallery">
              <img
                src={logement.cover}
                alt={logement.title}
                className="card__image"
              />
            </div>
            <h2 className="card__title">{logement.title}</h2>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Gallery;
