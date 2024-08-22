import React from "react";

import object01 from "../assets/images/object-01.webp";
import object02 from "../assets/images/object-02.webp";
import object03 from "../assets/images/object-03.webp";
import object04 from "../assets/images/object-04.webp";
import object05 from "../assets/images/object-05.webp";
import object06 from "../assets/images/object-06.webp";
import object07 from "../assets/images/object-07.webp";

import img from "../assets/images/img.webp";

export default function StoryPage() {
  return (
    <div className="bg-[#0565bb] relative h-[58rem] flex flex-col py-24 items-center">
      <span className="text-[36px] font-montserrat font-bold text-[#fcd32a]">
        BRAND STORY
      </span>
      <span className="text-[13px] w-[46rem] text-center font-noto-kr font-normal text-[#fcd32a]">
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </span>
      <div className="absolute left-16 top-32">
        <img src={object01} alt="object01" className="w-[80%] h-auto" />
      </div>
      <div className="absolute right-36 top-12">
        <img src={object02} alt="object02" className="w-[80%] h-auto" />
      </div>
      <div className="absolute right-16 top-24">
        <img src={object03} alt="object03" className="w-[80%] h-auto" />
      </div>
      <div className="absolute -right-32 top-[26%]">
        <img src={object04} alt="object04" className="w-[80%] h-auto" />
      </div>
      <div className="absolute -right-8 bottom-[34%]">
        <img src={object05} alt="object05" className="w-[80%] h-auto" />
      </div>
      <div className="absolute left-0 top-[36%]">
        <img src={object06} alt="object06" className="w-[80%] h-auto" />
      </div>
      <div className="absolute top-[43%] left-[154px]">
        <img src={object07} alt="object07" className="w-[80%] h-auto" />
      </div>
      <div className="absolute top-[26%] px-64">
        <div className="flex border-t-[24px] border-black flex-row">
          <div className="w-[50%]">
            <img src={img} alt="img" className="" />
          </div>
          <div className="bg-white flex flex-col space-y-8 border-[3px] border-black px-8 py-4 justify-center w-[50%]">
            <span className="text-[20px] font-montserrat font-extrabold text-black">
              WHAT HAPPENED'S BRAND STORY
            </span>
            <span className="text-[13px] font-noto-kr font-normal text-black">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </span>
            <div>
              <button className="border-[3px] font-montserrat border-black px-8 py-3 text-[20px] font-extrabold">
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
