import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Sliders.css";
const sources = [
  "https://rukminim2.flixcart.com/flap/1800/1800/image/bd9c3758e25371d7.jpg?q=80",
  "https://rukminim2.flixcart.com/flap/1800/1800/image/daed16406ceeed7a.jpg?q=80",
  "https://rukminim2.flixcart.com/flap/1800/1800/image/a0f9cae85b48f6f1.jpg?q=80",
  "https://rukminim2.flixcart.com/flap/1800/1800/image/51890ec1d3d50ca0.jpg?q=80",
];
const delay = 2500;
export const Sliders = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sources.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sources.map((ele, index) => (
          <div className="slide" key={index}>
            <img src={ele} alt={"discount" + Number(index + 1)} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {sources.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
