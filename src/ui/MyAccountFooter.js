import React from "react";
import { MdOutlineLocalShipping, MdOutlineReceiptLong } from "react-icons/md";
import { FaUser, FaHeart, FaTicketAlt, FaClipboard } from "react-icons/fa";

const FooterItem = ({ Icon, label, description }) => (
  <div className="w-[245px] h-[125px] bg-[#f8f9ff] pt-2 flex flex-col items-center">
    <Icon className="w-[66px] h-[49px]" aria-label={description} />
    <span className="text-[18px] font-bold leading-[1.33] text-[#111]">
      {label}
    </span>
    <span className="text-[18px] font-normal leading-[1.33] text-[#111]">
      {description}
    </span>
  </div>
);

function MyAccountFooter() {
  return (
    <footer className="flex justify-between w-full mb-20 mt-10">
      {[
        { Icon: MdOutlineReceiptLong, label: "ORDER", description: "주문내역" },
        { Icon: FaUser, label: "PROFILE", description: "회원정보" },
        { Icon: FaHeart, label: "WISHLIST", description: "관심상품" },
        { Icon: FaTicketAlt, label: "COUPON", description: "쿠폰" },
        { Icon: FaClipboard, label: "BOARD", description: "보드" },
        {
          Icon: MdOutlineLocalShipping,
          label: "ADDRESS",
          description: "배송 관리",
        },
      ].map((item, index) => (
        <FooterItem key={index} {...item} />
      ))}
    </footer>
  );
}

export default MyAccountFooter;
