import React, { useState } from "react";
import thumbnailImage from "../assets/images/item-left-thumbnail-01.png";
import thumbnailImage2 from "../assets/images/item-left-thumbnail-02.png";
import Image from "../assets/images/item-img-01.png";

import { FaHeart } from "react-icons/fa";

const ProductPage = () => {
  const [isWished, setIsWished] = useState(false);

  const toggleWish = () => {
    setIsWished(!isWished);
  };
  const [activeTab, setActiveTab] = useState("productPurchaseGuide");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const images = Array(7).fill(Image);

  return (
    <div>
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
          <div className="w-[646px] h-[2px] mt-[100px] mb-[28px]  bg-[#111]"></div>

          <div className="flex items-center">
            <h1 className="text-2xl font-bold mb-2 mr-48">
              [Apparel] What Happened Beanie
            </h1>
            <button
              onClick={toggleWish}
              className={`flex items-center space-x-2 ${
                isWished ? "text-red-500" : "text-gray-500"
              }`}
            >
              <FaHeart
                className={`w-6 h-6 ${
                  isWished ? "text-red-500" : "text-gray-500"
                }`}
              />
              <span className="text-sm font-medium text-gray-500">Wish</span>
            </button>
          </div>
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
              <strong className="mr-[60px]">세탁 방법:</strong>
              30도 이하의 미지근한 물에서 중성세제로 단독손세탁을 권장
              <br />
              <span className="block pl-[121px]">
                그늘진 곳에 뉘어서 건조
                <br />
                정전기 예방을 위해 섬유유연제를 행궈주시면 더 좋음
              </span>
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
              <strong className="mr-[70px]">배송비:</strong> 50,000원 이상
              구매시 무료배송 (미만시 배송비 2500원 발생)
            </p>
            <p className="text-sm text-gray-600 mb-1 ml-[120px]">
              제주도를 포함한 도서/산간지역 추가 배송비 없음
            </p>
            <p className="text-sm text-gray-600">
              <strong className="mr-[40px]">배송 예정일:</strong> 04/20(화)에
              도착 예정 97%
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
              <option>COLOR: SIZE</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 items-center">
            {/* Add Cart Button */}
            <button className="bg-gray-100 text-blue-500 font-medium text-base py-4 px-4 border border-blue-500 rounded-lg hover:bg-gray-200 w-1/2">
              add cart
            </button>

            {/* Buy Now Button */}
            <button className="bg-blue-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-blue-600 w-1/2">
              buy now
            </button>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="info-section-head flex justify-between items-center mb-4 border-b border-black">
          <h4 className="text-xl font-semibold ">상품 Q&amp;A</h4>
          <div className="flex items-center">
            <div className="flex space-x-2">
              <span
                onClick={() => handleTabClick("productDetails")}
                className={`cursor-pointer ${
                  activeTab === "productDetails"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                상품 상세정보
              </span>
              <span>|</span>
              <span
                onClick={() => handleTabClick("productPurchaseGuide")}
                className={`cursor-pointer ${
                  activeTab === "productPurchaseGuide"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                상품 구매 안내
              </span>
              <span>|</span>
              <span
                onClick={() => handleTabClick("restockInquiry")}
                className={`cursor-pointer ${
                  activeTab === "restockInquiry"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                재입고 문의
              </span>
              <span>|</span>
              <span
                onClick={() => handleTabClick("shippingInquiry")}
                className={`cursor-pointer ${
                  activeTab === "shippingInquiry"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                배송문의
              </span>
              <span>|</span>
              <span
                onClick={() => handleTabClick("other")}
                className={`cursor-pointer ${
                  activeTab === "other" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                기타
              </span>
            </div>
            <a href="product:id" className="ml-4 text-blue-600">
              상품 Q&amp;A
            </a>
          </div>
        </div>
        <div className="info-section-body">
          {activeTab === "productPurchaseGuide" && (
            <div className="tab-content flex justify-center items-center mt-14 border-b border-gray-200 pb-10">
              <div>상품에 관해 여러가지 질문해보세요.</div>
            </div>
          )}
          {/* Add other tab content here */}
        </div>
      </div>
      <div className="mt-20">
        <div className=" mb-4 border-b border-black">
          <h4 className="text-xl font-semibold">상품 결제 정보</h4>
        </div>
        <div>
          <p className="mb-2">
            고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
            있습니다.
          </p>
          <p className="mb-2">
            확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
            아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
          </p>
          <p className="mb-2">
            무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
            가까운 은행에서 직접 입금하시면 됩니다.
          </p>
          <p>
            주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
            7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="mb-4 border-b border-black">
          <h4 className="text-xl font-semibold">교환 및 반품 정보</h4>
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              교환 및 반품이 가능한 경우
            </h3>
            <p className="mb-2">상품을 공급 받으신 날로부터 7일이내.</p>
            <p className="mb-2">
              공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나 다르게
              이행된 경우에는 공급받은 날로부터 7일이내.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              교환 및 반품이 불가능한 경우
            </h3>
            <p className="mb-2">
              고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단,
              상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
            </p>
            <p className="mb-2">
              고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한
              경우.
            </p>
            <p className="mb-2">
              시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히
              감소한 경우
            </p>
            <p className="mb-2">복제가 가능한 상품등의 포장을 훼손한 경우</p>
            <p>
              자세한 내용은 고객만족센터 1:1 E-MAIL상담을 이용해 주시기
              바랍니다.
            </p>
          </div>
        </div>
      </div>
      {/* infosection */}
      <div>
        <div className="flex items-center justify-between mt-20">
          <div className="flex items-center">
            <span className="text-lg font-semibold">review (16)</span>
            <div className="flex ml-2">
              {/* Star Icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-gray-300"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-600">리뷰쓰기</span>
          </div>
        </div>
        <div className="flex space-x-2">
          {images.map((img, index) => (
            <div key={index} className="w-[240px] h-[240px]">
              <img
                src={img}
                className="w-full h-full object-contain"
                alt={`product-review-img-${index}`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row border border-gray-300 p-4 rounded-lg shadow-md">
          <div className="flex-shrink-0">
            <img
              src={Image}
              className="w-[707px] h-[707px] object-contain"
              alt="Main Product"
            />
          </div>
          <div className="ml-4 flex-1">
            <p className="text-lg font-semibold">Jin Ji***</p>
            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`w-5 h-5 ${
                    i < 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">2024.09.09</p>
            <div className="mt-2">
              <p className="text-sm text-gray-700">[Size m, color blue]</p>
              <p className="text-sm text-gray-700 mt-1">
                따듯하고 촉감도 부드럽고 좋은 것 같아요. 선물용으로 하나 더 사서
                주었는데 기뻐하더라구요. 강추입니다!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
