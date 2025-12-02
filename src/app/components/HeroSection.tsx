'use client';
import React, { useEffect, useState } from "react";
import './css/Hero.css'
import Button from "./shared/Button";
import { useMyContext } from "../context/MyContext";

type HeroContent = {
    title: string;
    subtitle: string;
    quoteBtn: string;
    portfolioBtn: string;
};


const heroContent: Record<'en' | 'es', HeroContent> = {
    en: {
        title: "Technology that drives your evolution",
        subtitle: "At Info Bit Code, we transform ideas into powerful digital tools. We create intelligent technological solutions that optimize processes, strengthen your business, and connect you with the future.",
        quoteBtn: "Get Started",
        portfolioBtn: "View Portfolio"
    },
    es: {
        title: "Tecnología que impulsa tu evolución",
        subtitle: "En Info Bit Code convertimos ideas en herramientas digitales poderosas. Creamos soluciones tecnológicas inteligentes que optimizan procesos, fortalecen tu negocio y te conectan con el futuro.",
        quoteBtn: "Comenzar",
        portfolioBtn: "Ver Portafolio"
    }
};


export default function HeroSection() {
    const { lan ,goToProjectSection ,serviceRef} = useMyContext(); 
    const [locale, setLocale] = useState(lan || 'en');


    useEffect(() => {
        if (lan && heroContent[lan]) {
            setLocale(lan);
        }
    }, [lan]);

    const content = heroContent[locale];

    return (
        <section className="relative curved-edge border-none w-full min-h-screen sm:min-h-[95vh] flex items-center justify-center overflow-hidden">
            <video autoPlay loop muted className="absolute w-full h-full object-cover">
                <source src='./hero_vedio2.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute w-full h-full bg-black/70"></div>

            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-[25px] sm:text-5xl md:text-6xl font-bold mb-4">
                    {content.title}
                </h1>
                <p className="sm:text-lg md:text-xl sm:w-[50%] mx-auto mb-8">
                    {content.subtitle}
                </p>
                <div className="flex justify-center gap-5 sm:gap-4">
                    <Button
                        btn_name={content.quoteBtn}
                        mobile_px="px-3"
                        laptop_px="sm:px-6"
                        mobile_py="py-3"
                        laptop_py="sm:py-3"
                        mobile_text_size="text-[12px]"
                        tablet_text_size="sm:text-[18px]"
                        bg_color="bg-[var(--color-secondary)]"
                        text_color="text-white"
                        hover_text_color="hover:text-white"
                        rounded="rounded-full"
                        hover_border="hover:border hover:border-[var(--color-secondary)]"
                        hover_bg_color="hover:bg-[var(--color-bit)]"
                        onClick={()=>goToProjectSection(serviceRef)}
                    />

                  
                </div>
            </div>
        </section>
    );
}
