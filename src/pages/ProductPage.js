import React from "react";
import thumbnailImage from "../assets/images/item-left-thumbnail-01.png";
import thumbnailImage2 from "../assets/images/item-left-thumbnail-02.png";
import Image from "../assets/images/item-img-01.png";

const ProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto p-4">
      {/* Left Section - Thumbnails and Main Image */}
      <div className=" flex flex-row justify-between mr-[200px] ">
        {/* Thumbnails */}
        <div className="flex flex-col mt-[100px] mr-20">
          <img
            src={thumbnailImage}
            className="w-[78px] h-[78px] object-contain"
            alt="Thumbnail 1"
            style={{ margin: "0px", padding: "0" }}
          />

          <img
            src={thumbnailImage2}
            className="w-[78px] h-[78px] object-contain"
            alt="Thumbnail 2"
            style={{ margin: "0px", padding: "0" }}
          />
        </div>

        {/* Main Image */}
        <div className="ml-4">
          <img
            src={Image}
            className="w-[707px] h-[707px] object-contain"
            alt="Main Product"
          />
        </div>
      </div>

      {/* Right Section - Product Info */}
      <div className="md:w-1/2 ">
        <div className="w-[646px] h-[2px] mt-[100px] mb-[28px] mx-[12px] bg-[#111]"></div>

        <h1 className="text-2xl font-bold mb-2">
          [Apparel] What Happened Beanie
        </h1>
        <p className="text-xl font-semibold text-gray-800 mb-4">16,000 won</p>

        {/* Product Details Section */}
        <div className="border-t border-b py-4">
          <h2 className="text-lg font-bold mb-2">상품 정보</h2>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="mr-[90px]">재질:</strong> 아크릴 100%
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="mr-[75px]">사이즈:</strong> 16.5cm x 18.5cm /
            펼쳤을 때 26cm
          </p>

          <p className="text-sm text-gray-600 mb-1">
            <strong className="mr-[60px]">세탁 방법:</strong> 30도 이하의
            미지근한 물에서 중성세제로 단독손세탁을 권장
          </p>
          <p className="text-sm text-gray-600 mb-1">그늘진 곳에 뉘어서 건조</p>
          <p className="text-sm text-gray-600 mb-1">
            정전기 예방을 위해 섬유유연제를 행궈주시면 더 좋음
          </p>
        </div>

        {/* Membership Discount Section */}
        <div className="my-4 bg-gray-100 p-4 rounded">
          <p className="text-[#111] text-[16px] font-medium leading-[1.88]">
            지금 왓헤픈 회원가입시{" "}
            <span className="text-[#f96400]">3% 할인권</span> 증정
          </p>
        </div>

        {/* Shipping Information */}
        <div className="border-t py-4">
          <h2 className="text-lg font-bold mb-2">배송 정보</h2>
          <p className="text-sm text-gray-600 mb-1">
            <strong>배송비:</strong> 50,000원 이상 구매시 무료배송 (미만시
            배송비 2500원 발생)
          </p>
          <p className="text-sm text-gray-600 mb-1">
            제주도를 포함한 도서/산간지역 추가 배송비 없음
          </p>
          <p className="text-sm text-gray-600">
            <strong>배송 예정일:</strong> 04/20(화)에 도착 예정 97%
          </p>
        </div>

        {/* Color/Size Dropdown */}
        <div className="my-4">
          <label htmlFor="size" className="block text-gray-600 mb-2">
            COLOR: SIZE
          </label>
          <select
            id="size"
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option>Select size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-1/2">
            add cart
          </button>
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 w-1/2">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
