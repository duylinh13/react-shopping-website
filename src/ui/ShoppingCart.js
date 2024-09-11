import React from "react";
import Image from "../assets/images/item-img-01.png";

import "@fortawesome/fontawesome-free/css/all.min.css";

const ShoppingCart = () => {
  return (
    <div className=" mx-auto my-10 p-4">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        SHOPPING BAG
      </h1>
      <div className="text-sm text-gray-500 text-center mb-4">
        01 SHOPPING BAG > 02 ORDER > ORDER CONFIRMED
      </div>

      {/* Table for Product List */}
      <div className=" p-6 rounded-lg ">
        <div className="h-[1px] bg-black my-4"></div>

        {/* Grid without gray border */}
        <div className="grid grid-cols-6 gap-4 pb-4 mb-4 text-center">
          <div className="flex justify-center mr-[200px]">
            <input
              type="checkbox"
              className="w-6 h-6  checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23ffffff%27 stroke-width=%272%27%3E%3Cpath d=%27M5 13l4 4L19 7%27/%3E%3C/svg%3E')] bg-no-repeat bg-center"
            />
          </div>

          <p className="col-span-2 font-semibold">상품 정보</p>
          <p className="font-semibold">수량</p>
          <p className="font-semibold">주문금액</p>
          <p className="font-semibold">배송비</p>
        </div>

        {/* Bottom Black Line */}
        <div className="h-[1px] bg-black my-4"></div>

        {/* Product 1 */}

        <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-black text-center mt-[10px]">
          {/* Checkbox, Image, and Product Info */}
          <div className="flex items-center col-span-2">
            <div className="flex justify-center mr-[48px]">
              <input
                type="checkbox"
                className="w-6 h-6 checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23ffffff%27 stroke-width=%272%27%3E%3Cpath d=%27M5 13l4 4L19 7%27/%3E%3C/svg%3E')] bg-no-repeat bg-center"
              />
            </div>
            <div>
              <img
                src={Image}
                className="w-[120px] h-[120px] object-contain"
                alt="Main Product"
              />
            </div>
            <div className="ml-8 text-left ">
              <p>[Apparel] what happened beanie</p>
              <p className="text-black">23,000원</p>
              <p className="text-[#ea4913] text-sm">[10%] 2,300원</p>
            </div>

            {/* Chỉnh phần dấu "X" */}
            <div className="flex items-center justify-center ">
              <div className="w-5 h-5 border-2 border-gray-700 bg-white flex items-center justify-center">
                <i className="fas fa-times text-black text-lg"></i>
              </div>
            </div>
          </div>
          <div className="w-[2px] h-[128px] ml-[200px] bg-[#111]"></div>

          <div className="flex items-center justify-center ml-[350px] space-x-[30px]">
            {/* Quantity */}
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 border border-black">-</button>
              <input
                type="text"
                className="w-12 text-center mx-2 "
                value="1"
                readOnly
              />
              <button className="px-2 py-1 border border-black">+</button>
            </div>

            {/* Price */}
            <div className="flex flex-col items-center">
              <span className="w-[141px] h-[21px] mx-[104px] my-[30px] font-montserrat text-xl font-bold text-[#111]">
                20,700 won
              </span>

              {/* Button */}
              <button className="bg-orange-500 text-white px-10 py-2 text-center">
                BUY NOW
              </button>
            </div>

            {/* Shipping */}
            <p>3,000₩</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-black text-center mt-[10px]">
          {/* Checkbox, Image, and Product Info */}
          <div className="flex items-center col-span-2">
            <div className="flex justify-center mr-[48px]">
              <input
                type="checkbox"
                className="w-6 h-6 checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23ffffff%27 stroke-width=%272%27%3E%3Cpath d=%27M5 13l4 4L19 7%27/%3E%3C/svg%3E')] bg-no-repeat bg-center"
              />
            </div>
            <div>
              <img
                src={Image}
                className="w-[120px] h-[120px] object-contain"
                alt="Main Product"
              />
            </div>
            <div className="ml-8 text-left ">
              <p>[Apparel] what happened beanie</p>
              <p className="text-black">23,000원</p>
              <p className="text-[#ea4913] text-sm">[10%] 2,300원</p>
            </div>

            {/* Chỉnh phần dấu "X" */}
            <div className="flex items-center justify-center ">
              <div className="w-5 h-5 border-2 border-gray-700 bg-white flex items-center justify-center">
                <i className="fas fa-times text-black text-lg"></i>
              </div>
            </div>
          </div>
          <div className="w-[2px] h-[128px] ml-[200px] bg-[#111]"></div>

          <div className="flex items-center justify-center ml-[350px] space-x-[30px]">
            {/* Quantity */}
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 border border-black">-</button>
              <input
                type="text"
                className="w-12 text-center mx-2 "
                value="1"
                readOnly
              />
              <button className="px-2 py-1 border border-black">+</button>
            </div>

            {/* Price */}
            <div className="flex flex-col items-center">
              <span className="w-[141px] h-[21px] mx-[104px] my-[30px] font-montserrat text-xl font-bold text-[#111]">
                20,700 won
              </span>

              {/* Button */}
              <button className="bg-orange-500 text-white px-10 py-2 text-center">
                BUY NOW
              </button>
            </div>

            {/* Shipping */}
            <p>3,000₩</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="flex items-center mt-4">
            <div className="w-[140px] h-[44px] border border-[#111]  flex items-center pl-2">
              <span className="text-[#111] text-[14px] font-light">
                선택상품 삭제
              </span>
            </div>
          </div>
          <div className="h-[1px] bg-black mt-20 mb-6"></div>
          {/* Summary */}
          <div className="col-span-4 flex items-center justify-between text-lg mx-40">
            <span className="text-[#111] text-[30px] font-bold flex items-center">
              51,400
              <span className="text-[24px] font-semibold ml-1">Won</span>
            </span>
            <p className="text-[24px]">+</p>
            <span className="text-[#111] text-[30px] font-bold flex items-center">
              3,000
              <span className="text-[24px] font-semibold ml-1">Won</span>
            </span>
            <p className="text-[24px]">=</p>
            <span className="text-[#111] text-[30px] font-bold flex items-center">
              54,400
              <span className="text-[24px] font-semibold ml-1">Won</span>
            </span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white px-10 py-3 r text-[16] mt-10">
            check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
