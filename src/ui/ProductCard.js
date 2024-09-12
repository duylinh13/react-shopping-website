import React from "react";
import heartIcon from "../assets/icons/heart-icon.png";

export default function ProductCard({ index, image }) {
  return (
    <div className="flex flex-col space-y-4">
      <img
        key={index}
        src={image}
        alt={`Product ${index + 1}`}
        className="max-w-full h-auto"
      />
      <div className="flex flex-col space-y-4">
        <span className="text-[13px] text-black font-montserrat font-bold">
          [what happen] How to create
        </span>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[13px] text-black font-montserrat font-medium">
            2,500 won
          </span>
          <div className="flex space-x-2 items-center">
            <img src={heartIcon} alt="Heart icon" className="w-4 h-4" />
            <span className="text-[13px] text-zinc-600 font-montserrat font-medium">
              236
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
