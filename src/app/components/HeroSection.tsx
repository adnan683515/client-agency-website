"use client";
import React from "react";
import './css/Hero.css'
import Button from "./shared/Button";

export default function HeroSection() {
    return (
        <section className="relative curved-edge border-none w-full min-h-screen sm:min-h-[95vh] flex items-center justify-center overflow-hidden">

            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
            >
                <source src='./hero_vedio1.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <div className="absolute w-full h-full bg-black/70"></div>


            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-[25px] sm:text-5xl md:text-6xl font-bold mb-4">
                    We Build Brands That <span className={`text-[var(--color-secondary)]`}>Convert</span>
                </h1>
                <p className="sm:text-lg md:text-xl mb-8">
                    <span >Creative solutions</span> for your business growth
                </p>
                <div className="flex justify-center gap-5 sm:gap-4">

                    <Button
                        btn_name="Get a Quote"
                        mobile_px="px-3"
                        laptop_px="sm:px-6"
                        mobile_py="py-3"
                        laptop_py="sm:py-3"
                        mobile_text_size="text-[12px]"
                        tablet_text_size="sm:text-[18px]"
                        bg_color="bg-[var(--color-secondary)]"
                        text_color="text-white"
                        // hover_bg_color="hover:bg-transparent"
                        hover_text_color="hover:text-white"
                        rounded="rounded-full"
                        hover_border="hover:border hover:border-[var(--color-secondary)]"
                        hover_bg_color="hover:bg-[var(--color-bit)]"

                    />

                    <Button
                        btn_name="View Portfolio"
                        mobile_px="px-3"
                        laptop_px="sm:px-6"
                        mobile_py="py-1"
                        laptop_py="sm:py-3"
                        mobile_text_size="text-[12px]"
                        tablet_text_size="sm:text-[20px]"
                        bg_color="bg-transparent"
                        text_color="text-white"
                        hover_text_color="hover:text-black"
                        hover_bg_color="hover:bg-[var(--color-bit)]"
                        rounded="rounded-full"
                        border="border"
                        hover_border="hover:border-[var(--color-bit)]"
                    />


                </div>
            </div>

            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
                <span className="text-[var(--color-primary)]  text-5xl">↓</span>
            </div>
        </section>
    );
}
