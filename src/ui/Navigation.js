import React from "react";

// Import assets
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

const imageStyles = "absolute h-auto";

const imagePositions = [
  { src: videoObject05, alt: "video object 05", className: "top-0 left-36" },
  {
    src: videoObject07,
    alt: "video object 07",
    className: "top-[12%] right-24",
  },
  {
    src: videoObject06,
    alt: "video object 06",
    className: "top-[20%] right-48",
  },
  {
    src: videoObject04,
    alt: "video object 04",
    className: "left-[-13%] top-[30%]",
  },
  {
    src: videoObject09,
    alt: "video object 09",
    className: "right-[-15%] top-[50%]",
  },
  {
    src: videoObject08,
    alt: "video object 08",
    className: "right-[-20%] top-[70%]",
  },
  {
    src: videoObject03,
    alt: "video object 03",
    className: "left-[12%] bottom-[-20%]",
  },
  {
    src: videoObject01,
    alt: "video object 01",
    className: "left-[18%] bottom-[-52%]",
  },
  {
    src: videoObject02,
    alt: "video object 02",
    className: "right-[30%] bottom-[-40%]",
  },
];

export default function Navigation() {
  return (
    <div className="bg-white relative flex flex-col items-center py-24 h-[60rem]">
      <h1 className="text-[36px] uppercase font-montserrat font-bold text-black mb-8">
        What Happened
      </h1>
      <p className="text-[16px] py-4 w-[46rem] text-center font-montserrat font-normal text-black mb-8">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos. Can be trimmed. Take the first step.
      </p>
      <button className="border-[3px] border-black px-8 py-3 text-[16px] font-extrabold font-montserrat">
        SEE MORE
      </button>
      {imagePositions.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`${imageStyles} ${img.className}`}
        />
      ))}
      <div className="absolute flex items-center justify-center top-[35%]">
        <img src={video} alt="video" className="w-[80%]" />
      </div>
    </div>
  );
}
