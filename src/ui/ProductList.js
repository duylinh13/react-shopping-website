import React from "react";

import img01 from "../assets/images/img-01.webp";
import img02 from "../assets/images/img-02.webp";
import img03 from "../assets/images/img-03.png";
import img04 from "../assets/images/img-04.png";
import img05 from "../assets/images/img-05.png";
import img06 from "../assets/images/img-06.png";
import img07 from "../assets/images/img-07.png";
import img08 from "../assets/images/img-08.png";
import img09 from "../assets/images/img-09.png";
import img10 from "../assets/images/img-10.png";
import img11 from "../assets/images/img-11.png";
import img12 from "../assets/images/img-12.png";
import img13 from "../assets/images/img-13.png";
import img14 from "../assets/images/img-14.png";
import img15 from "../assets/images/img-15.png";
import img16 from "../assets/images/img-16.png";
import img17 from "../assets/images/img-17.png";
import img18 from "../assets/images/img-18.png";
import img19 from "../assets/images/img-19.png";
import img20 from "../assets/images/img-20.png";
import img21 from "../assets/images/img-21.png";
import img22 from "../assets/images/img-22.png";
import img23 from "../assets/images/img-23.png";
import img24 from "../assets/images/img-24.png";
import img25 from "../assets/images/img-25.png";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const images = [
        img01,
        img02,
        img03,
        img04,
        img05,
        img06,
        img07,
        img08,
        img09,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
    ];
    return (
        <div className="px-28 py-24 flex flex-col space-y-24 justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <ProductCard key={index} image={image} />
                ))}
            </div>
            <div>
                <button className="border-[3px] font-montserrat border-black px-8 py-3 text-[16px] font-extrabold">
                    SEE MORE
                </button>
            </div>
        </div>
    );
}
