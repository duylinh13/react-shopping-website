import React, { useState } from "react";
import Image from "../assets/images/item-img-01.png";

const OrderForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    recipient: "",
    address: "",
    postCode: "",
    phone1: ["", "", ""],
    phone2: ["", "", ""],
  });

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4  mx-auto">
      <div className=" bg-white">
        <div className="w-[137px] h-[28px] mt-[50px] mb-[70px] ml-[100px] text-[#0565bb] font-montserrat text-[36px] font-extrabold leading-[1.67]">
          ORDER
        </div>
      </div>

      <div className="flex space-x-4">
        {/* Left Column */}

        <div className="p-6 max-w-4xl mx-auto bg-white ">
          {/* Steps Navigation */}
          <div className="mb-4 flex justify-start">
            <span>01 Shopping Bag &gt;</span>
            <span className="font-bold text-blue-600">02 Order &gt;</span>
            <span>03 Order Confirmed</span>
          </div>

          {/* Orderer Info Section */}
          <div className="mb-6">
            <h4 className="font-bold text-lg mb-2">주문자 정보</h4>
            <p>김형준 +82)10 - 0000-0000</p>
            <p className="text-blue-600">본인인증 완료</p>
          </div>

          {/* Shipping Info Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-lg">배송정보</h4>
              <p className="text-gray-700 text-sm">* 표시는 필수입력 항목</p>
            </div>
            {/* Recipient */}
            <div className="mb-4 flex gap-6">
              <label className="block text-gray-700">배송지 선택</label>
              <input
                type="text"
                name="recipient"
                value={shippingInfo.recipient}
                onChange={handleInputChange}
                className=" px-3 py-2 border w-[480px]"
              />
            </div>{" "}
            <div className="mb-4 flex gap-12">
              <label className="block text-gray-700">수령인 *</label>
              <input
                type="text"
                name="recipient"
                value={shippingInfo.recipient}
                onChange={handleInputChange}
                className=" px-3 py-2 border w-[480px]"
              />
            </div>
            <div className="mb-4 flex gap-10">
              <label>
                연락처1 <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  maxLength="3"
                  className="w-[100px] h-[44px] border border-gray-200 bg-white"
                />
                <input
                  type="text"
                  maxLength="4"
                  className="w-[100px] h-[44px] border border-gray-200 bg-white"
                />
                <input
                  type="text"
                  maxLength="4"
                  className="w-[100px] h-[44px] border border-gray-200 bg-white"
                />
              </div>
            </div>
            <div className="mb-4 flex gap-12">
              <label>연락처2</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  maxLength="3"
                  className="w-[100px] h-[44px] border border-gray-200 bg-white"
                />
                <input
                  type="text"
                  maxLength="4"
                  className="w-[100px] h-[44px] border border-gray-200 bg-white"
                />
                <input
                  type="text"
                  maxLength="4"
                  className="w-[100px] h-[44px] border border-gray-200 bg-white"
                />
              </div>
            </div>
            <div className="mb-4 ml-[100px]">
              <input type="checkbox" /> 배송지를 배송지 목록에 추가합니다.
            </div>
            <div className="mb-4 ml-[100px]">
              <div className="relative">
                <p className=" p-2">배송시 요청사항을 선택해 주세요.</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <div className="border-b border-black pb-4 mb-4">
              <h4 className="text-lg font-semibold">쿠폰 / 마일리지</h4>
            </div>

            {/* 쿠폰 */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">쿠폰</label>
              <div className="flex">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 "
                />
              </div>
            </div>

            {/* 마일리지 */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">마일리지</label>

              <div className="flex">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 ">
          <div className="border-b border-gray-300 pb-4 mb-4">
            <h4 className="text-lg font-semibold">주문정보</h4>
          </div>
          <div className="space-y-4">
            {/* Order Items */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 mb-14">
                <div className="flex-shrink-0 w-24 h-24 mr-20">
                  <img
                    src={Image} // Use the imported image
                    alt="product-img"
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">WHP</h3>
                  <h3 className="text-md font-medium text-gray-700">
                    [apparel] what happened beanie
                  </h3>
                  <p className="text-gray-800">23,000원</p>
                  <p className="text-red-500">[10%] 2,300원</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-20">
                <div className="flex-shrink-0 w-24 h-24 mr-20">
                  <img
                    src={Image} // Use the imported image
                    alt="product-img"
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">WHP</h3>
                  <h3 className="text-md font-medium text-gray-700">
                    [apparel] what happened beanie
                  </h3>
                  <p className="text-gray-800">23,000원</p>
                  <p className="text-red-500">[10%] 2,300원</p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between py-2">
                <span>총 상품금액</span>
                <span>51,400원</span>
              </div>
              <div className="flex justify-between py-2">
                <span>쿠폰 사용</span>
                <span>- 0 원</span>
              </div>
              <div className="flex justify-between py-2">
                <span>마일리지 사용</span>
                <span>- 0 원</span>
              </div>
              <div className="flex justify-between py-2">
                <span>배송비</span>
                <span>3,000 원</span>
              </div>
              <div className="flex justify-between font-bold py-2">
                <span>총 결제금액</span>
                <span className="text-xl">
                  54,400 <span className="text-sm">원</span>
                </span>
              </div>
            </div>

            {/* Agreement and Checkout */}
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <input type="checkbox" id="agreement" className="mr-2" />
                <label htmlFor="agreement">
                  상품 및 구매 조건을 확인하였으며, 결제 대행 서비스에
                  동의합니다. (필수)
                </label>
              </div>
              <div className="space-y-2 mb-4">
                <a href="/order" className="text-blue-500 hover:underline">
                  개인정보 처리 방침 &amp; 이용약관
                </a>
                <a href="/order" className="text-blue-500 hover:underline">
                  결제대행 서비스 이용약관 (주)KG이니시스, (주)토스페이먼츠
                </a>
              </div>
              <button
                className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                type="button"
              >
                CHECK OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
