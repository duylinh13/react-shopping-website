import React from "react";

import webLogo from "../assets/images/logo.webp";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between sticky top-0 z-50 bg-black px-24 py-6">
      <div
        onClick={() => {
          window.location.href = "/";
        }}
        className="hover:cursor-pointer"
      >
        <img src={webLogo} alt="logo" />
      </div>
      <div className="flex flex-row items-center space-x-8">
        <span
          onClick={() => {
            window.location.href = "/introduce";
          }}
          className="hover:cursor-pointer hover:text-zinc-300 text-white font-medium font-montserrat uppercase text-[14px]"
        >
          Introduction
        </span>

        <span className="hover:cursor-pointer hover:text-zinc-300 text-white font-medium font-montserrat uppercase text-[14px]">
          solution
        </span>
        <span className="hover:cursor-pointer hover:text-zinc-300 text-white font-medium font-montserrat uppercase text-[14px]">
          Rate plan
        </span>
        <span className="hover:cursor-default text-white font-medium font-montserrat uppercase text-[14px]">
          |
        </span>
        <span
          onClick={() => {
            window.location.href = "/login";
          }}
          className="hover:cursor-pointer hover:text-zinc-300 text-white font-medium font-montserrat uppercase text-[14px]"
        >
          login
        </span>
        <span className="hover:cursor-pointer hover:text-zinc-300 text-white font-medium font-montserrat uppercase text-[14px]">
          Apply for free use
        </span>
      </div>
    </nav>
  );
}
