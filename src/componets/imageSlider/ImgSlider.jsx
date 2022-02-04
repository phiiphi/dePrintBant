import React, { useState, useRef } from "react";

const images = [
  {
    id: 1,
    title: "John",
    images:
      "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    id: 2,
    title: "Sarah",
    images:
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Peter",
    images:
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    title: "Ofori",
    images:
      "https://cdn.pixabay.com/photo/2017/09/28/21/56/print-2797178_960_720.jpg",
  },
];

const ImgSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";
  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}>
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="flex bg-silver w-screen">
      <div className="relative w-full">
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex flex-row flex-shrink-0">
              <div className="w-full flex-shrink-0" key={img.id} ref={refs[i]}>
                <img
                  src={img.images}
                  className="w-full object-contain"
                  alt=""
                />
              </div>
              {/* <div className="w-1/3 mx-4 my-4 bg-purple">
                <h1 className="font-bold text-xl tracking-wide mt-3 text-white">
                  {img.title}{" "}
                </h1>
                <p className="mt-3 	tracking-wide">
                  There are many variations of passages of <br /> Lorem Ipsum
                  available, but the majority <br /> have suffered.
                </p>
              </div> */}
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
