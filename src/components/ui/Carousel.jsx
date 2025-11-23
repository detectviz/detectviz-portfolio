import React, { useEffect, useRef, useState } from "react";

export const Carousel = ({ images, path = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  // If no images, return null
  if (!images || images.length === 0) return null;

  let options = {
    root: carouselRef.current,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const detectScroll = (entries) => {
    let nextSlide;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nextSlide = parseInt(entry.target.getAttribute("data-index"));
        setCurrentSlide(nextSlide);
      }
    });
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    let observer = new IntersectionObserver(detectScroll, options);
    for (let i = 0; i < carouselRef.current.children.length; i++) {
      observer.observe(carouselRef.current.children[i]);
    }

    return () => observer.disconnect();
  }, [images]);

  const changeSlide = (direction) => {
    if (!containerRef.current || !carouselRef.current) return;

    let nextSlide =
      direction === "left" ? currentSlide - 1 : currentSlide + 1;
    if (nextSlide < 0) nextSlide = images.length - 1;
    else if (nextSlide >= images.length) nextSlide = 0;

    let containerWidth = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: nextSlide * containerWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="relative flex justify-center items-center w-full bg-black overflow-hidden"
      ref={containerRef}
    >
      <ul
        className="carousel-viewport flex gap-0 h-full w-full scroll-smooth snap-x snap-mandatory overflow-x-scroll overflow-y-hidden transition-all duration-200 no-scrollbar"
        ref={carouselRef}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <li
            className="flex-shrink-0 flex-grow-0 snap-start snap-always gap-0 w-full h-full flex items-center justify-center"
            key={`${image}-${index}`}
            data-index={index}
          >
            <img
              className="w-full h-full object-cover"
              src={image.startsWith('http') ? image : `${path}/${image}`}
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      {images.length > 1 && (
        <>
          <button
            className="absolute flex justify-center items-center h-8 w-8 rounded-full text-white bg-black/50 left-2 hover:bg-black/70 transition-colors backdrop-blur-sm"
            onClick={() => changeSlide("left")}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              height="20"
              width="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute flex justify-center items-center h-8 w-8 rounded-full text-white bg-black/50 right-2 hover:bg-black/70 transition-colors backdrop-blur-sm"
            onClick={() => changeSlide("right")}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              height="20"
              width="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <span className="absolute right-2 bottom-2 py-1 px-2 bg-black/50 rounded-md text-white text-xs font-bold backdrop-blur-sm">
            {currentSlide + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
};
