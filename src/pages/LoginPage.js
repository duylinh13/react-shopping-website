import React from "react";

import facebookIcon from "../assets/icons/facebook-icon.webp";
import naverIcon from "../assets/icons/naver-icon.webp";
import kakaoIcon from "../assets/icons/kakao-icon.webp";
import googleIcon from "../assets/icons/google-icon.webp";

export default function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        if (email === "" || password === "") {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        } else {
            alert("로그인 성공!");
        }
    };

    return (
        <div className="flex justify-center py-12 space-y-8 items-center flex-col">
            <div className=" max-w-[28rem]">
                <span className="text-[45px] text-[#0565bb] font-montserrat font-extrabold">
                    Welcome!
                </span>
            </div>
            <div className="w-full max-w-[28rem]">
                <div className="border-b-2 border-black"></div>
            </div>
            <div className="flex flex-col w-full max-w-[28rem] space-y-4">
                <input
                    type="text"
                    placeholder="아이디 (이메일)"
                    className="w-full focus:outline-none font-montserrat focus:border-zinc-800 border text-[14px] font-light border-[#a1a1a1] p-4"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="w-full focus:outline-none font-montserrat focus:border-zinc-800 border text-[14px] font-light border-[#a1a1a1] p-4"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="w-full max-w-[28rem]">
                <button
                    className="w-full border border-[#dedede] font-medium bg-[#0565bb] font-montserrat text-white text-[14px] p-4"
                    onClick={handleLogin}
                >
                    로그인하기
                </button>
            </div>
            <div className="w-full flex flex-col space-y-6 py-8 items-center justify-center max-w-[28rem]">
                <span className="font-montserrat text-[#404142] text-[16px] font-medium">
                    SNS 계정으로 로그인
                </span>
                <div className="flex w-full flex-row justify-between">
                    <img src={naverIcon} alt="naver" className="w-16 h-16" />
                    <img src={kakaoIcon} alt="kakao" className="w-16 h-16" />
                    <img
                        src={facebookIcon}
                        alt="facebook"
                        className="w-16 h-16"
                    />
                    <img src={googleIcon} alt="google" className="w-16 h-16" />
                </div>
            </div>
            <div className="w-full max-w-[28rem]">
                <div
                    onClick={() => {
                        window.location.href = "/register";
                    }}
                    className="border hover:cursor-pointer hover:bg-zinc-50 flex justify-center py-4 border-[#020001]"
                >
                    <span className="text-[16px] font-medium font-montserrat">
                        계정이 없으신가요? 간편가입하기
                    </span>
                </div>
            </div>
            <div className="w-full max-w-[28rem]">
                <div className="flex px-24 flex-row justify-between">
                    <span className="text-[14px] hover:cursor-pointer font-light text-[#1a58f2]">
                        아이디(이메일)찾기
                    </span>
                    <span className="text-[14px] hover:cursor-pointer font-light text-[#1a58f2]">
                        비밀번호 찾기
                    </span>
                </div>
            </div>
        </div>
    );
}
