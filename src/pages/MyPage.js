import React from "react";
import MyAccountHeader from "../ui/MyAccountHeader";
import OrderSummary from "../ui/OrderSummary";
import OrderStatus from "../ui/OrderStatus";
import MyAccountFooter from "../ui/MyAccountFooter";

function MyPage() {
  return (
    <div className="my-page">
      <MyAccountHeader />
      <OrderSummary />
      <OrderStatus />
      <MyAccountFooter />
    </div>
  );
}

export default MyPage;
