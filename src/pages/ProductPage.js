import React, { useState } from "react";
import thumbnailImage from "../assets/images/item-left-thumbnail-01.png";
import thumbnailImage2 from "../assets/images/item-left-thumbnail-02.png";
import Image from "../assets/images/item-img-01.png";
import ProductList from "../ui/ProductList";
import ProductDetail from "../ui/ProductDetail";
import ProductDetailsSection from "../ui/ProductDetailsSection";

const ProductPage = () => {
  const [isWished, setIsWished] = useState(false);

  const toggleWish = () => {
    setIsWished(!isWished);
  };
  const [activeTab, setActiveTab] = useState("productDetails");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const images = Array(7).fill(Image);

  return (
    <div>
      <div>
        <ProductDetail
          thumbnailImage={thumbnailImage}
          thumbnailImage2={thumbnailImage2}
          Image={Image}
          isWished={isWished}
          toggleWish={toggleWish}
        />
      </div>
      <div>
        <ProductDetailsSection
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
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
        <div className="flex flex-col md:flex-row border-y border-gray-300 py-4 ">
          <div className="flex-shrink-0 ">
            <img
              src={Image}
              className="w-[70px] h-[70px] object-contain"
              alt="Main Product"
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="mt-2">
              <p className="text-sm text-gray-700">[Size m, color blue]</p>
              <p className="text-sm text-gray-700 mt-1">
                너무 예쁘게 잘 사용했습니다! 역시 왓헤픈!! 색이 너무 좋네요.
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <p className="text-lg font-semibold">Jin Ji***</p>
            <p className="text-sm text-gray-500 mt-1">2024.04.16</p>
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row border-y border-gray-300 py-4 ">
          <div className="flex-shrink-0 ">
            <img
              src={Image}
              className="w-[70px] h-[70px] object-contain"
              alt="Main Product"
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="mt-2">
              <p className="text-sm text-gray-700">[Size m, color blue]</p>
              <p className="text-sm text-gray-700 mt-1">
                착용감이 가볍고 좋네요. 앞으로도 사용할 것 같습니다.
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <p className="text-lg font-semibold">Jin Ji***</p>
            <p className="text-sm text-gray-500 mt-1">2024.04.16</p>
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row border-y border-gray-300 py-4 ">
          <div className="flex-shrink-0 ">
            <img
              src={Image}
              className="w-[70px] h-[70px] object-contain"
              alt="Main Product"
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="mt-2">
              <p className="text-sm text-gray-700">[Size m, color blue]</p>
              <p className="text-sm text-gray-700 mt-1">
                따듯하고 촉감도 부드럽고 좋은 것 같아요. 선물용으로 하나 더 사서
                주었는데 기뻐하더라구요. 강추입니다!
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <p className="text-lg font-semibold">Jin Ji***</p>
            <p className="text-sm text-gray-500 mt-1">2024.04.16</p>
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row border-y border-gray-300 py-4 ">
          <div className="flex-shrink-0 ">
            <img
              src={Image}
              className="w-[70px] h-[70px] object-contain"
              alt="Main Product"
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="mt-2">
              <p className="text-sm text-gray-700">[Size m, color blue]</p>
              <p className="text-sm text-gray-700 mt-1">
                너무 예쁘게 잘 사용했습니다! 역시 왓헤픈!! 색이 너무 좋네요.
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <p className="text-lg font-semibold">Jin Ji***</p>
            <p className="text-sm text-gray-500 mt-1">2024.04.16</p>
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row border-y border-gray-300 py-4 ">
          <div className="flex-shrink-0 ">
            <img
              src={Image}
              className="w-[70px] h-[70px] object-contain"
              alt="Main Product"
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="mt-2">
              <p className="text-sm text-gray-700">[Size m, color blue]</p>
              <p className="text-sm text-gray-700 mt-1">
                따듯하고 촉감도 부드럽고 좋은 것 같아요. 선물용으로 하나 더 사서
                주었는데 기뻐하더라구요. 강추입니다!
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <p className="text-lg font-semibold">Jin Ji***</p>
            <p className="text-sm text-gray-500 mt-1">2024.04.16</p>
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
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
