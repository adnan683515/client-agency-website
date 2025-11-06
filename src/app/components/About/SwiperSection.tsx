"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import Image from "next/image";


// import image  
import image1 from "./../../assets/images/aboutImage1.jpg"
import imag2 from './../../assets/images/aboutImage2.jpg'
import image3 from './../../assets/images/aboutImage3.jpg'

export default function SwiperSection() {
    // Attach ref to SVG element
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLSpanElement>(null);

    const onAutoplayTimeLeft = (
        swiper: any,
        time: number,
        progress: number
    ) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
        }

        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper relative"
        >
            <SwiperSlide>

                <Image src={image1} width={300} height={400} alt="image-1"></Image>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={imag2} width={300} height={400} alt="image-1"></Image>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image3} width={300} height={400} alt="image-1"></Image>
            </SwiperSlide>

            <div className="autoplay-progress absolute bottom-4 right-4 w-12 h-12">
                <svg
                    className="w-full h-full text-amber-200"
                    viewBox="0 0 48 48"
                    ref={progressCircle} // now correctly typed
                >
                    <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="var(--color-bit)"
                        strokeWidth="4"
                        fill="none"
                    />
                </svg>
                <span
                    ref={progressContent}
                    className="absolute inset-0 flex items-center justify-center text-sm text-white"
                ></span>
            </div>
        </Swiper>
    );
}
