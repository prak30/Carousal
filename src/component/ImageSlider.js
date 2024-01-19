import React from "react";
import { useState } from "react";

const ImageSlider = () => {
  const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUfQ8GDTD7ub8ictkguYlYS-0lErBQdJYog&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhrj_nRybqRs--_aXsOgwTz8PveTTdt_CVA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRbrbyxiEwJml8H2oXB5UL3E7Me4ZebBf3DoYNGk5RVj0P0TnQ5Hf6HJz-IVchIEyHc8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3ALFuRXIAcdGJ6na4pHVgHqd7-Xjkgrl3w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynWU_TVIrJy8hkV0J-C6if7iSC3fbuk1crDEMTrRIMmuqTmGlf5J3dSpSSAwdbNFO_38&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYrLDJAD3RBKOWh1f4cC8sLNGxMd6K_VQDw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAsQCAIkcsgKDWDpqihB2bzIsyfxUnLQUog&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOsVrOcN7pQhUrNlzCa6WOg9K9siPyTbwiw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoElfe-j7IMKr-Axj2-LzPLyrJEGMoRgojDA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eNUC7BRwHHoRKYdN3AYR_h2fvSNXrOaWJQ&usqp=CAU",
  ];
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
