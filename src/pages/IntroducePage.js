import React from "react";
import Bannerimg from "../assets/images/bannerimg@2x.png";

import img from "../assets/images/img@2x.png";

export default function IntroducePage() {
  return (
    <div>
      <div className="relative">
        <img src={Bannerimg} alt="Bannerimg" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {/* What-Happened Text */}
          <span className="block w-[562px] h-[37px] font-montserrat font-extrabold text-[50px] leading-[1.2] tracking-[5px] text-left text-white">
            What Happened!
          </span>

          {/* How-to-create-mobile-optimized-videos Text */}
          <span className="block w-[665px] h-[125px] font-montserrat text-[20px] leading-[1.75] text-center text-white mt-[50px] ">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos. Can be trimmed. Take the first
            step to your brand's success. How to create mobile-optimized videos
            in minutes.
          </span>
        </div>
      </div>
      <div className=" h-[130px]  mb-[73px] p-[43px] px-[347px] pb-[36px] bg-[#ea4913]">
        <div className="flex justify-center items-center space-x-4">
          {/* Rounded Rectangle 1 */}
          <div className=" flex justify-center items-center w-[221px] h-[51px] mr-[30px] p-[17px] px-[72px]  rounded-[25.5px] border-[3px] border-[#111] bg-[#fcd32a]">
            <span className="text-[20px] font-extrabold  text-[#0658c2] ">
              about
            </span>
          </div>

          {/* Rounded Rectangle 2 */}
          <div className="flex justify-center items-center w-[221px] h-[51px] mr-[30px] p-[17px] px-[42px] pb-[18px] rounded-[25.5px] border-[3px] border-[#111] bg-[#ececec]">
            <span className="text-[20px] font-extrabold  text-[#111]">
              contactus
            </span>
          </div>

          {/* Rounded Rectangle 3 */}
          <div className="flex justify-center items-center w-[221px] h-[51px] mr-[30px] p-[17px] px-[52px] pb-[18px] rounded-[25.5px] border-[3px] border-[#111] bg-[#ececec]">
            <span className="text-[20px] font-extrabold text-left text-[#111]">
              Campaign
            </span>
          </div>

          {/* Rounded Rectangle 4 */}
          <div className="flex justify-center items-center w-[221px] h-[51px] mr-[30px] p-[17px] px-[75px] pb-[18px] rounded-[25.5px] border-[3px] border-[#111] bg-[#ececec]">
            <span className="text-[20px] font-extrabold text-left text-[#111]">
              story
            </span>
          </div>

          {/* Rounded Rectangle 5 */}
          <div className="flex justify-center items-center w-[221px] h-[51px] ml-[30px] p-[17px] px-[79px] pb-[18px] rounded-[25.5px] border-[3px] border-[#111] bg-[#ececec]">
            <span className="text-[20px] font-extrabold text-left text-[#111]">
              Toon
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        {/* What Happened Section */}
        <div className="what-happnned-to w-[851px] h-[53px]  text-center text-[#0658c2] font-montserrat font-semibold text-[72px] leading-[0.83]">
          what happened to?
        </div>

        {/* Story Section */}
        <div className="what-happeneD-what-happend-to- w-[1021px] h-[408px] my-[154px] text-center text-[#111] font-noto font-normal text-[30px] leading-[1.8]">
          <span className="text-style-1">‘</span>
          <span className="text-style-2">what happeneD</span>의 이야기는
          우리들의 살아가는 ‘what happened to?’ 라는 마음으로 ‘무엇’을 모티브로
          하여 다양한 작업을 하고 있습니다. 일상속의 작은 물건들이 ~할 수 있으며
          있으며, 일상속의 작은 물건들이 ~할 수 있으며, 일상속의 작은 물건들이
          ~할 수 있으며 있으며, 중심으로 당신의 삶을 더 행복하게 만드는,
          친절하고 다정하며 공감이 되는 디자인을 하는 것이 왓해픈의 방향성
          입니다.
        </div>

        {/* Daily Items Section */}
        <div className="what-happened-to-wants-to-make-tour-everyday-oh-happy-day w-[977px]   text-center text-[#111] font-noto font-normal text-[30px] leading-[1.8] mt-[-180px]">
          “what happened to” wants to make your everyday, “oh happy day!” We
          design daily items that can make you smile, believing that small
          things can bring you big joy, Thank you, as always!
        </div>

        {/* Contact Us Section */}
        <div className="contact-us w-[477px] h-[52px] my-[234px] text-center text-[#0658c2] font-montserrat font-semibold text-[72px] leading-[0.83]">
          Contact Us
        </div>

        {/* Address Section */}
        <div className=" mt-[-180px] w-[574px] h-[171px] my-[80px] text-center text-[#000] font-noto font-light text-[24px] leading-[2]">
          서울특별시 강남구 도산대로 8길 17 2층
          <br /> 2nd floor, 17, Dosan-daero 8-gil, Gangnam-gu, Seoul
          <br /> +82 2 000 0000
          <br /> wht30@gmail.com
        </div>

        {/* Partnership Section */}
        <div className=" partnership w-[527px] h-[52px] my-[89px] text-center text-[#0658c2] font-montserrat font-semibold text-[72px] leading-[0.83]">
          Partnership
        </div>

        {/* Address Copy Section */}
        <div className=" mt-[-20px] w-[574px] h-[171px] my-[160px] text-center text-[#000] font-noto font-light text-[24px] leading-[2]">
          서울특별시 강남구 도산대로 8길 17 2층
          <br /> 2nd floor, 17, Dosan-daero 8-gil, Gangnam-gu, Seoul
          <br /> +82 2 000 0000
          <br /> wht30@gmail.com
        </div>
      </div>
      <img src={img} alt="img" className="w-full h-auto" />
    </div>
  );
}
