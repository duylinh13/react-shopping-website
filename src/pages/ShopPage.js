import React from "react";
import Category from "../ui/Category";

import Banner from "../assets/images/banner-img@2x.png";

export default function ShopPage() {
  return (
    <div>
      <div className="">
        <img src={Banner} alt="Banner" className="" />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
}
