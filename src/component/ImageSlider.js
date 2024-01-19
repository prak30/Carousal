import React from "react";
import { useState, useEffect } from "react";
import { data } from "../utils/constants";

const ImageSlider = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const handlePreviousClick = () => {
    {
      currentImg === 0
        ? setCurrentImg(data.length - 1)
        : setCurrentImg(currentImg - 1);
    }
  };
  const handleNextClick = () => {
    if (currentImg === data.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [currentImg]);
  return (
    <div className="flex justify-center m-4 p-4">
      <button className="mr-8 pr-8" onClick={handlePreviousClick}>
        ⏮️
      </button>
      {data.map((url, index) => (
        <img
          key={url}
          className={
            "w-[700px] h-[700px] rounded-2xl " +
            (currentImg === index ? "block" : "hidden")
          }
          src={url}
          alt="wallpaper"
        />
      ))}

      <button className="ml-8 pl-8" onClick={handleNextClick}>
        ⏭️
      </button>
    </div>
  );
};

export default ImageSlider;
