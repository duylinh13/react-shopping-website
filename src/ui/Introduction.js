import React from "react";

import introductionBG from "../assets/images/introduction-bg@2x.webp";

export default function Introduction() {
  return (
    <div className="relative">
      <img src={introductionBG} alt="Introduction BG" className="" />
      <div className="absolute left-[12%] text-white w-[36rem] top-1/2 -translate-y-1/2 flex flex-col space-y-4">
        <span className="text-[42px] font-montserrat font-extrabold">
          WHAT HAPPENDED!
        </span>
        <span className="text-[16px] font-montserrat font-normal">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand's success. How to create mobile-optimized videos in
          minutes.
        </span>
      </div>
    </div>
  );
}
