import React, { useState } from 'react';
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button left">‹</button>
      <div className="carousel-slide">
        <img src={`http://localhost:3000/${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={nextSlide} className="carousel-button right">›</button>
    </div>
  );
};

export default Carousel;
