import React from "react";

import snsIcon01 from "../assets/icons/snsicon-01.webp";
import snsIcon02 from "../assets/icons/snsicon-02.webp";
import snsIcon03 from "../assets/icons/snsicon-03.webp";

export default function Footer() {
    return (
        <div className="py-12 space-y-12 px-24">
            <div className="flex flex-row justify-between">
                <div className="space-y-4">
                    <span className="text-[13px] text-black font-montserrat font-bold">
                        what happened
                    </span>
                    <div className="flex flex-col space-y-2">
                        <span className="text-[13px] text-black font-montserrat font-medium">
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                        </span>
                        <span className="text-[13px] text-black font-montserrat font-medium">
                            [공지] 29CM 강남 스토어 영업 종료
                        </span>
                        <span className="text-[13px] text-black font-montserrat font-medium">
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                        </span>
                        <span className="text-[13px] text-black font-montserrat font-medium">
                            [공지] iOS 10 이하 버전 지원 중단 안내
                        </span>
                        <span className="text-[13px] text-black font-montserrat font-medium">
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                        </span>
                    </div>
                </div>

                <div className="flex flex-row space-x-20">
                    <div className="space-y-4">
                        <span className="text-[13px] text-black font-montserrat font-bold">
                            about us
                        </span>
                        <div className="flex flex-col space-y-2">
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                회사 소개
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                인재 채용
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                상시 할인 혜택
                            </span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[13px] text-black font-montserrat font-bold">
                            my order
                        </span>
                        <div className="flex flex-col space-y-2">
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                내 주문
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                주문 배송
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                취소 / 교환 / 반품 내역
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                상품 리뷰 내역
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                증빙 서류 발급
                            </span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[13px] text-black font-montserrat font-bold">
                            my account
                        </span>
                        <div className="flex flex-col space-y-2">
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                회원 정보 수정
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                회원 등급
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                마일리지 현황
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                쿠폰
                            </span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[13px] text-black font-montserrat font-bold">
                            help
                        </span>
                        <div className="flex flex-col space-y-2">
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                1 : 1 상담 내역
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                상품 Q & A 내역
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                공지 사항
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                자주하는 질문
                            </span>
                            <span className="text-[13px] text-black font-montserrat font-medium">
                                고객의 소리
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-zinc-300"></div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-[13px] text-zinc-400 font-montserrat font-medium">
                        © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 :
                        홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ
                        test0101@what happened.co.kr
                    </span>
                    <span className="text-[13px] text-zinc-400 font-montserrat font-medium">
                        서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000
                        l 서비스 이용약관 l 개인정보처리방침
                    </span>
                </div>
                <div>
                    <div className="flex flex-row space-x-4">
                        <img src={snsIcon01} alt="sns-icon-01" />
                        <img src={snsIcon02} alt="sns-icon-02" />
                        <img src={snsIcon03} alt="sns-icon-03" />
                    </div>
                </div>
            </div>
        </div>
    );
}
