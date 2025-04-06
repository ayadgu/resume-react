import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./ProjectImageGallery.css"; // Make sure to create this CSS file

function ProjectImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  const goToIndex = (index) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  return (
    <div className="project-gallery">
      <div className="gallery-container">
        <div className="slider-container">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img
                  src={image}
                  alt={`Project screenshot ${index + 1}`}
                  className="img-fluid rounded shadow"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-nav">
          <button
            className="gallery-btn prev-btn"
            onClick={goToPrevious}
            disabled={isTransitioning}
          >
            <AiOutlineLeft />
          </button>
          <div className="gallery-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`gallery-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>
          <button
            className="gallery-btn next-btn"
            onClick={goToNext}
            disabled={isTransitioning}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectImageGallery;
