import React from "react";

function OrderSummary() {
  return (
    <>
      <section className="mt-[1px] mb-[18px] flex justify-between items-center">
        <h2 className="text-[24px] font-medium leading-[2.5] text-[#111]">
          최근 주문
        </h2>
        <button className="text-[18px] font-bold leading-[3.33] text-[#111]">
          더보기 &gt;
        </button>
      </section>

      <div className="h-[2px] my-[14px] bg-[#222]"></div>

      <div className="font-bold flex justify-between items-center gap-x-4">
        <div className="w-[48px] h-[17px] text-[#111]">주문일</div>
        <div className="w-[64px] h-[17px] text-[#111]">주문내역</div>
        <div className="w-[65px] h-[17px] text-[#111]">주문번호</div>
        <div className="w-[64px] h-[17px] text-[#111]">기타</div>
      </div>

      <div className="h-[2px] my-[14px] bg-[#222]"></div>

      <div className="text-center mt-[79px] mb-[80px]">
        <h3 className="font-bold text-[20px] leading-[3] text-[#111]">
          최근 주문내역이 없습니다.
        </h3>
      </div>

      <div className="h-[2px] my-[14px] bg-[#898989]"></div>
    </>
  );
}

export default OrderSummary;
