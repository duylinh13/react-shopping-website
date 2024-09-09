import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";

function MyPage() {
  return (
    <div className="my-page">
      <span className="flex justify-center items-center text-[#0565bb] font-extrabold text-3xl leading-[1.67] mt-[89px] mb-[70px]   ">
        MY ACCOUNT
      </span>

      <span className="flex justify-center items-center text-[16px] font-medium leading-[3.75] text-[#111] mt-[70px] mb-[1px]   ">
        <span className=" font-normal text-[#9a9a9a]">01 home &gt;</span> 02 my
        account
      </span>

      <div className="flex justify-between items-center mt-[1px] mb-[18px] ">
        <span className="text-[24px] font-medium leading-[2.5] text-[#111]">
          최근 주문
        </span>
        <span className="text-[18px] font-bold leading-[3.33] text-[#111] mr-2">
          더보기 >
        </span>
      </div>

      <div className=" h-[2px] my-[14px]  bg-[#222]"></div>

      <div className="font-bold flex justify-between items-center gap-x-4">
        <span className="font-bold ml-[75px] w-[48px] h-[17px]  text-[#111] ">
          주문일
        </span>
        <span className="w-[64px] h-[17px] font-bold text-[#111] ml-[210px]">
          주문내역
        </span>
        <span className="  w-[65px] h-[17px] font-bold text-[#111]">
          주문번호
        </span>
        <span className="w-[64px] h-[17px] font-bold text-[#111]">기타</span>
      </div>

      <div className=" h-[2px] my-[14px]  bg-[#222]"></div>

      <span className="font-bold flex justify-center items-center  mt-[79px]  mb-[80px] ml-[15px]  text-[20px] leading-[3] text-[#111]">
        최근 주문내역이 없습니다.
      </span>

      <div className=" h-[2px] my-[14px]  bg-[#898989]"></div>

      <div class="flex w-full justify-between items-start">
        <div class="flex w-1/2 justify-between items-start mr-20">
          <div class="flex flex-col items-start ml-10 mt-8">
            <span class="font-light text-[14px] leading-[0] text-[#111]">
              - 사용가능적립금
            </span>
            <span class="font-light text-[14px] leading-[4.29] text-[#111]">
              - 사용가능적립금
            </span>
            <span class="font-light text-[14px] leading-[0] text-[#111]">
              - 쿠폰
            </span>
          </div>

          <div class="flex flex-col items-start">
            <span class="font-light text-[14px] leading-[4.29] text-[#111]">
              1,000원
            </span>
            <span class="font-light text-[14px] leading-[0] text-[#111]">
              0원
            </span>
            <span class="font-light text-[14px] leading-[4.29] text-[#111]">
              0개
            </span>
          </div>
        </div>

        <div class="w-[1px] h-[98px] bg-[#111] mx-auto"></div>

        <div class="flex w-1/2 justify-between items-start mr-20">
          <div class="flex flex-col items-start ml-10">
            <span class="font-light text-[14px] leading-[4.29] text-[#111]">
              - 총구매적립금
            </span>
            <span class="font-light text-[14px] leading-[0] text-[#111]">
              - 총주문
            </span>
          </div>

          <div class="flex flex-col items-start ">
            <span class="font-light text-[14px] leading-[4.29] text-[#111]">
              1,000원
            </span>
            <span class="font-light text-[14px] leading-[0] text-[#111]">
              0원
            </span>
          </div>
        </div>
      </div>

      <div className=" h-[2px] my-[14px]  bg-[#222]"></div>

      <div className=" mt-[100px] mb-[19px] text-[24px] font-[500] leading-[2.5] text-[#111]">
        <span className="block">나의 주문처리 현황</span>
      </div>

      <div className=" h-[2px] my-[14px]  bg-[#222]"></div>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-center ml-20">
          <span className="text-[18px] font-normal leading-[1.33] text-[#111] flex flex-col items-center justify-center">
            입금전
            <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
              0
            </span>
          </span>
        </div>

        <div className="w-[1px] h-[60px] bg-[#111]"></div>

        <div className="flex flex-col items-center">
          <span className="text-[18px] font-normal leading-[1.33] text-[#111] flex flex-col items-center justify-center">
            입금준비중
            <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
              0
            </span>
          </span>
        </div>

        <div className="w-[1px] h-[60px] bg-[#111]"></div>

        <div className="flex flex-col items-center">
          <span className="text-[18px] font-normal leading-[1.33] text-[#111] flex flex-col items-center justify-center">
            입금전
            <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
              0
            </span>
          </span>
        </div>

        <div className="w-[1px] h-[60px] bg-[#111]"></div>

        <div className="flex flex-col items-center">
          <span className="text-[18px] font-normal leading-[1.33] text-[#111] flex flex-col items-center justify-center">
            배송완료
            <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
              0
            </span>
          </span>
        </div>

        <div className="w-[1px] h-[60px] bg-[#111]"></div>

        <div className="flex flex-col items-center mr-20">
          <div className="text-[18px] font-normal leading-[1.33] text-[#111]">
            <div className="mb-2">- 취소 : 0</div>
            <div className="mb-2">- 교환 : 0</div>
            <div>- 반품 : 0</div>
          </div>
        </div>
      </div>

      <div className=" h-[2px] my-[14px]  bg-[#222]"></div>

      <div className="flex justify-between w-full mb-20 mt-10">
        <div className="w-[245px] h-[125px] bg-[#f8f9ff] pt-2 flex flex-col items-center">
          <MdOutlineReceiptLong className="w-[66px] h-[49px]" />
          <span className="text-[18px] font-bold leading-[1.33] text-[#111]">
            ORDER
          </span>
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            주문내역
          </span>
        </div>
        <div className="w-[245px] h-[125px] bg-[#f8f9ff] pt-2 flex flex-col items-center">
          <FaUser className="w-[66px] h-[49px]" />
          <span className="text-[18px] font-bold leading-[1.33] text-[#111]">
            PROFILE
          </span>
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            회원정보
          </span>
        </div>

        <div className="w-[245px] h-[125px] bg-[#f8f9ff] pt-2 flex flex-col items-center">
          <FaHeart className="w-[66px] h-[49px]" />
          <span className="text-[18px] font-bold leading-[1.33] text-[#111]">
            WISHLIST
          </span>
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            관심상품
          </span>
        </div>

        <div className="w-[245px] h-[125px] bg-[#f8f9ff] pt-2 flex flex-col items-center">
          <FaTicketAlt className="w-[66px] h-[49px]" />
          <span className="text-[18px] font-bold leading-[1.33] text-[#111]">
            COUPON
          </span>
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            쿠폰
          </span>
        </div>

        <div className="w-[245px] h-[125px] bg-[#f8f9ff] pt-2 flex flex-col items-center">
          <FaClipboard className="w-[66px] h-[49px]" />
          <span className="text-[18px] font-bold leading-[1.33] text-[#111]">
            BOARD
          </span>
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            보드
          </span>
        </div>

        <div className="w-[245px] h-[125px] bg-[#f8f9ff] pt-2 flex flex-col items-center">
          <MdOutlineLocalShipping className="w-[66px] h-[49px]" />
          <span className="text-[18px] font-bold leading-[1.33] text-[#111]">
            ADDRESS
          </span>
          <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
            배송 관리
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
