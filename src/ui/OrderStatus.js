import React from "react";

function OrderStatus() {
  return (
    <>
      <section className="text-center mt-[100px] mb-[19px]">
        <h2 className="text-[24px] font-[500] leading-[2.5] text-[#111]">
          나의 주문처리 현황
        </h2>
      </section>

      <div className="h-[2px] my-[14px] bg-[#222]"></div>

      <section className="flex justify-between items-center w-full">
        <div className="flex flex-col items-center">
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            입금전
            <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
              0
            </span>
          </span>
        </div>

        <div className="w-[1px] h-[60px] bg-[#111]"></div>

        <div className="flex flex-col items-center">
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            입금준비중
            <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
              0
            </span>
          </span>
        </div>

        <div className="w-[1px] h-[60px] bg-[#111]"></div>

        <div className="flex flex-col items-center">
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            입금전
            <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
              0
            </span>
          </span>
        </div>

        <div className="w-[1px] h-[60px] bg-[#111]"></div>

        <div className="flex flex-col items-center">
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            배송완료
            <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
              0
            </span>
          </span>
        </div>

        <div className="w-[1px] h-[60px] bg-[#111]"></div>

        <div className="flex flex-col items-center">
          <div className="text-[18px] font-normal leading-[1.33] text-[#111]">
            <div className="mb-2">- 취소 : 0</div>
            <div className="mb-2">- 교환 : 0</div>
            <div>- 반품 : 0</div>
          </div>
        </div>
      </section>

      <div className="h-[2px] my-[14px] bg-[#222]"></div>
    </>
  );
}

export default OrderStatus;
