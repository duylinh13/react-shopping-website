import React from "react";

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
            <input type="checkbox" className="mr-4" />
            <img
              src="img/shop-thumbnail-01.png"
              alt="thumbnail"
              className="w-20 h-20 object-contain"
            />
            <div className="ml-4">
              <p>[Apparel] what happened beanie</p>
              <p className="text-red-600 text-sm">23,000₩ [10%] 2,300₩</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-center">
            <button className="px-2 py-1 border border-black">-</button>
            <input
              type="text"
              className="w-12 text-center mx-2 border border-black"
              value="1"
              readOnly
            />
            <button className="px-2 py-1 border border-black">+</button>
          </div>

          {/* Price */}
          <p>20,700₩</p>

          {/* Shipping */}
          <p>3,000₩</p>

          <button className="bg-orange-500 text-white px-4 py-2">
            BUY NOW
          </button>
        </div>

        {/* Product 2 */}
        <div className="grid grid-cols-6 gap-4 items-center py-4 border-b text-center">
          {/* Checkbox, Image, and Product Info */}
          <div className="flex items-center col-span-2">
            <input type="checkbox" className="mr-4" />
            <img
              src="img/shop-thumbnail-01.png"
              alt="thumbnail"
              className="w-20 h-20 object-contain"
            />
            <div className="ml-4">
              <p>[Apparel] what happened beanie</p>
              <p className="text-red-600 text-sm">23,000₩ [10%] 2,300₩</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-center">
            <button className="px-2 py-1 border border-gray-400">-</button>
            <input
              type="text"
              className="w-12 text-center mx-2 border border-gray-400"
              value="1"
              readOnly
            />
            <button className="px-2 py-1 border border-gray-400">+</button>
          </div>

          {/* Price */}
          <p>20,700₩</p>

          {/* Shipping */}
          <p>무료 업체배송</p>

          <button className="bg-orange-500 text-white px-4 py-2">
            BUY NOW
          </button>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-6 gap-4 py-4 text-center">
          <button className="col-span-2 text-gray-500 underline">
            선택상품 삭제
          </button>

          {/* Summary */}
          <div className="col-span-4 flex items-center justify-between text-lg">
            <p>51,400₩</p>
            <p>+</p>
            <p>3,000₩</p>
            <p>=</p>
            <p>51,400₩</p>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
