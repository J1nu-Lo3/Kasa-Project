import { useState } from "react";
import "../components/Carousel.scss";

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // S'il n'y a qu'une image, pas de flèches ni compteur
  const showControls = total > 1;

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`${title} ${currentIndex + 1}`}
        className="carousel__image"
      />

      {showControls && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prevSlide}
            aria-label="Image précédente"
          >
            ❮
          </button>

          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={nextSlide}
            aria-label="Image suivante"
          >
            ❯
          </button>

          <div className="carousel__counter">
            {currentIndex + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
