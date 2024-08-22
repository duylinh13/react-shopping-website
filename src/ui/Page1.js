import React from "react";

import bestImg1 from "../assets/images/best-image-01.webp";
import bestImg2 from "../assets/images/best-image-02.webp";
import bestImg3 from "../assets/images/best-image-03.webp";

import goIcon from "../assets/icons/go-icon.webp";

import productionIcon1 from "../assets/icons/producticon-01.webp";
import productionIcon2 from "../assets/icons/producticon-02.webp";
import productionIcon3 from "../assets/icons/producticon-03.webp";

export default function Page1() {
  return (
    <div className="bg-[#fbcb05] flex flex-col items-center py-24">
      <span className="text-[42px] font-montserrat font-bold text-[#f96400]">
        BEST PRODUCT
      </span>
      <span className="text-[16px] w-[44rem] text-center font-montserrat font-normal text-[#f96400]">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </span>
      <div className="flex flex-row py-20 px-24">
        <div className="relative">
          <div className="absolute -top-[10%] left-0">
            <img
              src={productionIcon1}
              alt="productionIcon1"
              className="w-[80%] h-auto"
            />
          </div>
          <img src={bestImg1} alt="bestImg1" />
          <div className="absolute px-12 -bottom-[10%]">
            <div className="border-[3px] flex items-center flex-row py-2 justify-between bg-white pr-2 pl-4 border-black">
              <span className="text-[16px] text-balance font-montserrat font-extrabold text-black">
                How to create mobile-optimize
              </span>
              <img src={goIcon} alt="goIcon" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-[10%] left-0">
            <img
              src={productionIcon2}
              alt="productionIcon3"
              className="w-[80%] h-auto"
            />
          </div>
          <img src={bestImg2} alt="bestImg2" />
          <div className="absolute px-12 -bottom-[10%]">
            <div className="border-[3px] flex items-center flex-row py-2 justify-between bg-white pr-2 pl-4 border-black">
              <span className="text-[16px] text-balance font-montserrat font-extrabold text-black">
                How to create mobile-optimize
              </span>
              <img src={goIcon} alt="goIcon" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-[10%] left-0">
            <img
              src={productionIcon3}
              alt="productionIcon3"
              className="w-[80%] h-auto"
            />
          </div>
          <img src={bestImg3} alt="bestImg3" />
          <div className="absolute px-12 -bottom-[10%]">
            <div className="border-[3px] flex items-center flex-row py-2 justify-between bg-white pr-2 pl-4 border-black">
              <span className="text-[16px] text-balance font-montserrat font-extrabold text-black">
                How to create mobile-optimize
              </span>
              <img src={goIcon} alt="goIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
