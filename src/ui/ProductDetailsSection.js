// ProductDetailsSection.js
import React from "react";

const ProductDetailsSection = ({ activeTab, handleTabClick }) => {
  return (
    <div>
      <div className="info-section">
        <div className="info-section-head flex justify-between items-center mb-4 border-b border-black">
          <h4 className="text-xl font-semibold">상품 Q&amp;A</h4>
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
        <div className="mb-4 border-b border-black">
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
    </div>
  );
};

export default ProductDetailsSection;
