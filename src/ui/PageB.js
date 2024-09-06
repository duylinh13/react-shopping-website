import React from "react";
import { useNavigate } from "react-router-dom";

import newsObject01 from "../assets/images/news-object-01.webp";
import newsObject02 from "../assets/images/news-object-02.webp";
import newsObject03 from "../assets/images/news-object-03.webp";
import newsObject04 from "../assets/images/news-object-04.webp";
import newsObject05 from "../assets/images/news-object-05.webp";

import newsImg01 from "../assets/images/news-img-01.webp";
import newsImg03 from "../assets/images/news-img-03.png";
import newsImg04 from "../assets/images/news-img-04.png";
import newsImg05 from "../assets/images/news-img-05.png";

export default function PageB() {
  const navigate = useNavigate(); // Hook for navigation

  const handleSeeMoreClick = () => {
    navigate("/shop"); // Navigate to /shop when button is clicked
  };
  return (
    <div className="bg-[#fccb05] relative flex flex-col items-center py-24">
      <span className="text-[36px] uppercase font-montserrat font-bold text-black">
        Happened’s issue
      </span>
      <span className="text-[13px] py-4 w-[46rem] text-center font-noto-kr font-normal text-black">
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </span>
      <div>
        <button
          className="border-[3px] font-montserrat border-black px-8 py-3 text-[16px] font-extrabold"
          onClick={handleSeeMoreClick} // Attach the click handler
        >
          SEE MORE
        </button>
      </div>
      <div className="absolute top-12 right-8">
        <img src={newsObject03} alt="newsObject03" className="w-[70%] h-auto" />
      </div>
      <div className="absolute top-32 right-8">
        <img src={newsObject02} alt="newsObject02" className="w-[70%] h-auto" />
      </div>
      <div className="flex pt-24 flex-row">
        <div className="bg-[#ff5500] relative border-y-[3px] border-black flex flex-col items-center justify-center py-12 px-12 space-y-8">
          <div className="flex flex-col text-[42px] font-montserrat font-extrabold uppercase text-center leading-none">
            whpn
            <span>issue</span>
          </div>
          <img src={newsImg01} alt="newsImg01" className="w-[80%] h-auto" />
          <div className="absolute -bottom-12 z-40 -right-20">
            <img
              src={newsObject01}
              alt="newsObject01"
              className="w-[70%] h-auto"
            />
          </div>
        </div>
        <div className="relative border-y-[3px] border-black bg-black hover:bg-[#ff5500]">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[24px] py-4 text-white font-montserrat font-extrabold">
              B BRAND
            </span>
            <img src={newsImg04} alt="newsImg01" />
            <div className="absolute -top-6 left-4">
              <img
                src={newsObject04}
                alt="newsObject04"
                className="w-[80%] h-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-black border-y-[3px] border-black hover:bg-[#ff5500]">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[24px] py-4 text-white font-montserrat font-extrabold">
              C BRAND
            </span>
            <img src={newsImg03} alt="newsImg03" />
          </div>
        </div>
        <div className="bg-black relative border-y-[3px] border-black hover:bg-[#ff5500]">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[24px] py-4 text-white font-montserrat font-extrabold">
              D BRAND
            </span>
            <img src={newsImg04} alt="newsImg04" />
          </div>
          <div className="absolute -bottom-12 -right-12">
            <img
              src={newsObject05}
              alt="newsObject05"
              className="w-[80%] h-auto"
            />
          </div>
        </div>
        <div className="bg-black border-y-[3px] border-black hover:bg-[#ff5500]">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[24px] py-4 text-white font-montserrat font-extrabold">
              E BRAND
            </span>
            <img src={newsImg05} alt="newsImg05" />
          </div>
        </div>
      </div>
    </div>
  );
}
