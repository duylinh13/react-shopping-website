import React from "react";
import { FaSearch } from "react-icons/fa";
import img1 from "../assets/images/img-01.webp";
import img2 from "../assets/images/img-2@2x.png";
import img3 from "../assets/images/img-3@2x.png";
import img4 from "../assets/images/img-4@2x.png";
import heartIcon from "../assets/icons/heart-icon.png"; // Nhập heartIcon

const Catelogy = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Danh mục */}
      <div className="flex space-x-4 mb-4">
        <span className="w-9 h-4 font-montserrat text-lg font-extrabold leading-none text-center text-[#353535]">
          all
        </span>
        <span className="w-[117px] h-4 font-montserrat text-lg font-extrabold leading-none text-center text-[#111]">
          wall deco
        </span>
        <span className="w-[86px] h-4 font-montserrat text-lg font-extrabold leading-none text-center text-[#111]">
          fashion
        </span>
        <span className="w-[121px] h-4 font-montserrat text-lg font-extrabold leading-none text-center text-[#111]">
          digital acc
        </span>
        <span className="w-[64px] h-4 font-montserrat text-lg font-extrabold leading-none text-center text-[#111]">
          living
        </span>
        <span className="w-[59px] h-4 font-montserrat text-lg font-extrabold leading-none text-center text-[#111]">
          habit
        </span>
      </div>

      {/* Dòng kẻ màu đen */}
      <div className="w-full h-[2px] mb-4 bg-[#111]" />

      {/* Toàn bộ xem */}
      <div className="w-full flex justify-start pl-4 mb-4">
        <span className="w-[57px] h-[15px] font-noto text-sm font-medium leading-[1.13] text-[rgb(234,73,19)]">
          전체보기
        </span>
      </div>

      {/* Dòng kẻ màu xám */}
      <div className="w-full h-[2px] mb-4 bg-[#a1a1a1]" />

      {/* Tổng số sản phẩm và các điểm màu */}
      <div className="w-full flex items-center justify-between px-4 mb-4">
        <span className="font-noto text-lg font-medium text-[#111]">
          전체 상품 207
        </span>
        <div className="flex items-center space-x-2">
          {/* Nhóm 4 ô vuông nhỏ */}
          <div className="grid grid-cols-2 gap-1">
            <div className="w-[13px] h-[12px] bg-[#ea4913]" />
            <div className="w-[13px] h-[12px] bg-[#ea4913]" />
            <div className="w-[13px] h-[12px] bg-[#ea4913]" />
            <div className="w-[13px] h-[12px] bg-[#ea4913]" />
          </div>

          {/* Nhóm 9 ô vuông nhỏ */}
          <div className="grid grid-cols-3 gap-1">
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
            <div className="w-[8px] h-[8px] bg-[#a1a1a1]" />
          </div>
          <div className="w-full flex space-x-4 px-4 mb-4">
            {/* Ô đầu tiên: chữ căn trái */}
            <div className="flex items-center justify-start w-[125px] h-[37px] border border-[#111] px-4">
              <span className="font-noto text-sm font-light text-[#111]">
                인기순
              </span>
            </div>

            {/* Ô thứ hai: chữ căn phải và biểu tượng tìm kiếm */}
            <div className="flex items-center justify-between w-[281px] h-[37px] border border-[#111] px-4">
              <span className="font-noto text-sm font-light text-[#111]">
                다른 필터
              </span>
              <FaSearch className="text-[#111]" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-between px-24 mb-4 mb-71">
        {/* Sản phẩm 1 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img1}
            alt="Product 1"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                12,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 2 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img2}
            alt="Product 2"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                32,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 3 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img3}
            alt="Product 3"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                22,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 4 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img4}
            alt="Product 4"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                2,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between px-24 mb-4 mb-71">
        {/* Sản phẩm 1 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img1}
            alt="Product 1"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                12,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 2 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img2}
            alt="Product 2"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                32,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 3 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img3}
            alt="Product 3"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                22,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 4 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img4}
            alt="Product 4"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                2,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between px-24 mb-4 mb-71">
        {/* Sản phẩm 1 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img1}
            alt="Product 1"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                12,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 2 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img2}
            alt="Product 2"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                32,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 3 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img3}
            alt="Product 3"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                22,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 4 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img4}
            alt="Product 4"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                2,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between px-24 mb-4 mb-71">
        {/* Sản phẩm 1 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img1}
            alt="Product 1"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                12,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 2 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img2}
            alt="Product 2"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                32,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 3 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img3}
            alt="Product 3"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                22,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 4 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img4}
            alt="Product 4"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                2,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between px-24 mb-4 mb-71">
        {/* Sản phẩm 1 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img1}
            alt="Product 1"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                12,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 2 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img2}
            alt="Product 2"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                32,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 3 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img3}
            alt="Product 3"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                22,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm 4 */}
        <div className="flex flex-col space-y-2 w-[315px] mb-4">
          <img
            src={img4}
            alt="Product 4"
            className="w-[316px] object-contain"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[13px] text-black font-montserrat font-bold">
              [what happen] How to create
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[13px] text-black font-montserrat font-medium">
                2,500 won
              </span>
              <div className="flex space-x-2 items-center">
                <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
                <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
                  236
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <span className="font-bold text-black">1</span>

        <span className="text-gray-500">2</span>
        <span className="text-gray-500">3</span>

        <span className="text-gray-500">></span>
      </div>
    </div>
  );
};

export default Catelogy;
