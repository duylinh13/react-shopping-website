import React from "react";

function MyAccountHeader() {
  return (
    <header className="text-center mt-[89px] mb-[70px]">
      <h1 className="text-[#0565bb] font-extrabold text-3xl leading-[1.67]">
        MY ACCOUNT
      </h1>
      <nav className="mt-[70px] mb-[1px]">
        <span className="text-[16px] font-medium leading-[3.75] text-[#111]">
          <span className="text-[#9a9a9a] font-normal">01 home &gt;</span> 02 my
          account
        </span>
      </nav>
    </header>
  );
}

export default MyAccountHeader;
