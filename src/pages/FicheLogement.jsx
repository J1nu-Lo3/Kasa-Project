import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";

function FicheLogement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  // Si l'id n'existe pas -> 404
  if (!logement) {
    return <Navigate to="*" />;
  }

  return (
    <div className="fiche-logement">
      <img
        src={logement.cover}
        alt={logement.title}
        style={{ width: "100%", maxWidth: "800px" }}
      />

      <div className="fiche-logement__header">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="fiche-logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="fiche-logement__host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>

      <div className="fiche-logement__rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>{index < logement.rating ? "★" : "☆"}</span>
        ))}
      </div>

      <div className="fiche-logement__description">
        <h2>Description</h2>
        <p>{logement.description}</p>
      </div>

      <div className="fiche-logement__equipments">
        <h2>Équipements</h2>
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FicheLogement;
