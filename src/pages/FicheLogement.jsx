import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Collapse from "../components/Collapse/Collapse";
import "../styles/FicheLogement.scss";
import Carousel from "../components/Carousel/Carousel";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <main className="fiche-logement">
      <Carousel pictures={logement.pictures} title={logement.title} />

      <div className="fiche-logement__header">
        <div className="fiche-logement__info">
          <h1>{logement.title}</h1>
          <p className="fiche-logement__location">{logement.location}</p>

          <div className="fiche-logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="fiche-logement__host-rating">
          <div className="fiche-logement__host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="fiche-logement__rating">
            {Array.from({ length: 5 }).map((_, index) => {
              const isActive = index < logement.rating;

              return (
                <img
                  key={index}
                  src={isActive ? starActive : starInactive}
                  alt={isActive ? "étoile active" : "étoile inactive"}
                  className="star"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="fiche-logement__collapses">
        <Collapse title="Description" content={logement.description} />

        <Collapse
          title="Équipements"
          content={logement.equipments.join("\n")}
        />
      </div>
    </main>
  );
}

export default FicheLogement;
