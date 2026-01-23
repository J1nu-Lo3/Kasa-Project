import { useState } from "react";
import "./Collapse.scss";
import arrow from "../../assets/arrow.png";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`collapse ${open ? "is-open" : ""}`}>
      <button
        className="collapse__header"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>

        <img
          src={arrow}
          alt="toggle"
          className={`collapse__arrow ${open ? "rotate" : ""}`}
        />
      </button>

      <div className="collapse__content">
        <div className="collapse__text">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
