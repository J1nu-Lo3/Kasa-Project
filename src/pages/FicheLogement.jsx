import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Collapse from "../components/Collapse";
import "../styles/FicheLogement.scss";

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="*" />;
  }

  return (
    <main className="fiche-logement">
      <img
        className="fiche-logement__cover"
        src={logement.cover}
        alt={logement.title}
      />

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
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={index < logement.rating ? "star active" : "star"}
              >
                ★
              </span>
            ))}
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
