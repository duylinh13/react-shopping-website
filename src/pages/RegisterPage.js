import React from "react";

export default function RegisterPage() {
    const [registerAccount, setRegisterAccount] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        address: "",
        addressDetail: "",
        phoneNumber: "",
    });

    const handleSubmit = () => {
        const phoneNumberPattern = /^[0-9]+$/;
        if (!phoneNumberPattern.test(registerAccount.phoneNumber)) {
            alert("올바른 전화번호를 입력해주세요.");
            return;
        } else if (registerAccount.email.indexOf("@") === -1) {
            alert("올바른 이메일을 입력해주세요.");
            return;
        } else if (
            registerAccount.password !== registerAccount.passwordConfirm
        ) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        } else if (
            registerAccount.email === "" ||
            registerAccount.password === "" ||
            registerAccount.passwordConfirm === ""
        ) {
            alert("필수 항목을 모두 입력해주세요.");
            return;
        } else if (registerAccount.phoneNumber.length < 10) {
            alert("올바른 전화번호를 입력해주세요.");
            return;
        } else {
            alert("회원가입이 완료되었습니다.");
            window.location.href = "/login";
        }
    };

    return (
        <div className="flex font-noto-kr justify-center py-12 space-y-8 items-center flex-col">
            <div className=" max-w-[28rem]">
                <span className="text-[45px] text-[#0565bb] font-montserrat font-extrabold">
                    JOIN US
                </span>
            </div>
            <div className="w-full max-w-[28rem]">
                <div className="border-b-2 border-black"></div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex flex-col w-full max-w-[28rem] space-y-6">
                    <div className="space-y-2">
                        <label className="text-[16px] font-medium text-[#222]">
                            아이디(이메일) *
                        </label>
                        <input
                            type="text"
                            placeholder="example@email.com"
                            className="w-full focus:outline-none font-montserrat focus:border-zinc-800 border text-[14px] font-light border-[#a1a1a1] p-4"
                            required
                            onChange={(e) => {
                                setRegisterAccount({
                                    ...registerAccount,
                                    email: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[16px] font-medium text-[#222]">
                            비밀번호 *
                        </label>
                        <input
                            type="password"
                            placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
                            className="w-full focus:outline-none focus:border-zinc-800 border text-[14px] font-light border-[#a1a1a1] p-4"
                            required
                            onChange={(e) => {
                                setRegisterAccount({
                                    ...registerAccount,
                                    password: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[16px] font-medium text-[#222]">
                            비밀번호 확인 *
                        </label>
                        <input
                            type="password"
                            className="w-full focus:outline-none focus:border-zinc-800 border text-[14px] font-light border-[#a1a1a1] p-4"
                            required
                            onChange={(e) => {
                                setRegisterAccount({
                                    ...registerAccount,
                                    passwordConfirm: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="space-y-2 font-noto-kr">
                        <label className="text-[16px] font-medium text-[#222]">
                            주소
                        </label>
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full focus:outline-none focus:border-zinc-800 border text-[14px] font-light border-[#a1a1a1] p-4 pr-12"
                                    required
                                    onChange={(e) => {
                                        setRegisterAccount({
                                            ...registerAccount,
                                            address: e.target.value,
                                        });
                                    }}
                                />
                                <button className="absolute top-0 right-0 h-full px-4 text-[#659bf5] focus:outline-none">
                                    검색
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="추가 주소"
                                className="w-full focus:outline-none focus:border-zinc-800 border text-[14px] font-light border-[#a1a1a1] p-4"
                                required
                                onChange={(e) => {
                                    setRegisterAccount({
                                        ...registerAccount,
                                        addressDetail: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="font-noto-kr space-y-2">
                        <label className="text-[16px] font-medium text-[#222]">
                            연락처
                        </label>
                        <input
                            type="tel"
                            inputmode="numeric"
                            oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                            pattern="[0-9]*"
                            className="w-full focus:outline-none focus:border-zinc-800 border text-[14px] font-light border-[#a1a1a1] p-4"
                            required
                            onChange={(e) => {
                                setRegisterAccount({
                                    ...registerAccount,
                                    phoneNumber: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[28rem]">
                <div className="border-b-2 border-black"></div>
            </div>
            <div className="w-full max-w-[28rem]">
                <div className="w-full flex flex-col font-noto-kr items-end justify-end space-y-2">
                    <div className="space-x-2">
                        <input type="checkbox" />
                        <span className="text-black text-[14px] font-light">
                            <span className="text-[#659bf5]">이용약관</span>및
                            <span className="text-[#659bf5]">
                                개인정보 처리 방침
                            </span>
                            에 동의합니다. (필수)
                        </span>
                    </div>
                    <div className="space-x-2">
                        <input type="checkbox" />
                        <span className="text-black text-[14px] font-light">
                            광고 및 메일 수신에 동의합니다. (선택)
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[28rem]">
                <button
                    onClick={handleSubmit}
                    className="w-full border border-[#dedede] font-medium bg-[#0565bb] font-montserrat text-white text-[14px] p-4"
                >
                    가입하기
                </button>
            </div>
        </div>
    );
}
