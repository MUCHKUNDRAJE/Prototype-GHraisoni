import React, { useState, useRef, useEffect, useId } from "react";

const Carousel = ({ slides = [] }) => {
  const id = useId(); // Always call hooks at top level
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentSlide * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  if (totalSlides === 0) {
    return (
      <div className="text-center p-4">
        <p>No slides available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel slides */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ width: `${totalSlides * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div
            key={`${id}-${index}`}
            className="w-full flex-shrink-0"
            style={{ width: `${100 / totalSlides}%` }}
          >
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            className={`w-3 h-3 rounded-full ${
              i === currentSlide ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
