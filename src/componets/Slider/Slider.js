import React, { useState } from "react";
import "./Slider.css";
// import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? "slide active-anim" : "slide"
            }>
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt=""
            />
          </div>
        );
      })}
      <div className="absolute mt-8  md:ml-24 ">
        <div className="block pt-2 mx-10 md:flex flex-row ">
          <h1 className="tracking-wide text-3xl md:text-8xl font-bold ">
            PRINTING.
          </h1>
        </div>
        <div className="block pt-2 mx-10 md:flex flex-row ">
          <h1 className="text-black tracking-wide text-2xl md:ml-64 md:text-4xl  font-bold ">
            RE-DEFINED.
          </h1>
        </div>
      </div>
      <div className="container-dots">
        {Array.from({ length: 5 }).map((obj, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
