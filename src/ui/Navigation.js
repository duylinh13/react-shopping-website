import React from "react";

import videoObject01 from "../assets/images/video-object-01.webp";
import videoObject02 from "../assets/images/video-object-02.webp";
import videoObject03 from "../assets/images/video-object-03.webp";
import videoObject04 from "../assets/images/video-object-04.png";
import videoObject05 from "../assets/images/video-object-05.webp";
import videoObject06 from "../assets/images/video-object-06.webp";
import videoObject07 from "../assets/images/video-object-07.webp";
import videoObject08 from "../assets/images/video-object-08.png";
import videoObject09 from "../assets/images/video-object-09.png";

import video from "../assets/images/video.png";

export default function Navigation() {
  return (
    <div className="bg-white relative flex flex-col items-center py-24 h-[60rem]">
      <span className="text-[36px] uppercase font-montserrat font-bold text-black mb-8">
        what happened
      </span>
      <span className="text-[16px] py-4 w-[46rem] text-center font-montserrat font-normal text-black mb-8">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </span>
      <div>
        <button className="border-[3px] border-black px-8 py-3 text-[16px] font-extrabold font-montserrat">
          SEE MORE
        </button>
      </div>
      <div className="absolute top-0 left-36">
        <img
          src={videoObject05}
          alt="video object 05"
          className="w-[146px] h-[114px] object-contain"
        />
      </div>
      <div className="absolute top-[12%] right-24">
        <img
          src={videoObject07}
          alt="video object 07"
          className="w-[260px] h-auto"
        />
      </div>
      <div className="absolute top-[20%] right-48">
        <img
          src={videoObject06}
          alt="video object 06"
          className="w-[260px] h-auto"
        />
      </div>
      <div className="absolute -left-[13%] top-[30%]">
        <img
          src={videoObject04}
          alt="video object 04"
          className="w-[1251px] h-auto"
        />
      </div>
      <div className="absolute -right-[15%] top-[50%]">
        <img
          src={videoObject09}
          alt="video object 09"
          className="w-[1251px] h-auto"
        />
      </div>
      <div className="absolute -right-[20%] top-[70%]">
        <img
          src={videoObject08}
          alt="video object 08"
          className="w-[1251px] h-auto"
        />
      </div>
      <div className="absolute -bottom-20 left-[12%]">
        <img
          src={videoObject03}
          alt="video object 03"
          className="w-[1251px] h-auto"
        />
      </div>
      <div className="absolute -bottom-52 left-[18%]">
        <img
          src={videoObject01}
          alt="video object 01"
          className="w-[1251px] h-auto"
        />
      </div>
      <div className="absolute flex items-center justify-center top-[35%]">
        <img src={video} alt="video" className="w-[80%]" />
      </div>
      <div className="absolute -bottom-40 right-[30%]">
        <img
          src={videoObject02}
          alt="video object 02"
          className="w-[1251px] h-auto"
        />
      </div>
    </div>
  );
}
