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
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>

      <img
        src={logement.cover}
        alt={logement.title}
        style={{ width: "100%", maxWidth: "800px" }}
      />
    </div>
  );
}

export default FicheLogement;
