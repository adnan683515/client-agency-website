'use client';
import React from 'react';
import imageView from '../assets/Stacked_blob.png';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import MarqueeSection from './MarqueeSection';
import Button from '../shared/Button';
import SwiperSection from './SwiperSection';
import Link from 'next/link';
import { useMyContext } from '../../context/MyContext';

// Content mapping
const aboutContent: Record<'en' | 'es', {
    headingSmall: string;
    headingBig: string;
    paragraph: string;
    viewMoreText: string;
}> = {
    en: {
        headingSmall: "About Us",
        headingBig: "We’re the Creative Minds Building Tomorrow’s Brands",
        paragraph: `At InfoBitCode, we craft digital experiences that connect ideas to innovation.
    Our team of passionate designers, developers, and strategists work together to build brands that inspire trust and performance.
    We turn information into impactful digital solutions — from sleek websites to full-scale brand systems.
    Every pixel, every line of code, and every idea matters to us.
    We believe technology should be simple, beautiful, and powerful.
    With creativity and precision, InfoBitCode transforms your vision into digital reality.`,
        viewMoreText: "View more..."
    },
    es: {
        headingSmall: "Sobre Nosotros",
        headingBig: "Somos las Mentes Creativas que Construyen las Marcas del Mañana",
        paragraph: `En InfoBitCode, creamos experiencias digitales que conectan ideas con innovación.
    Nuestro equipo de diseñadores, desarrolladores y estrategas apasionados trabaja en conjunto para construir marcas que inspiren confianza y rendimiento.
    Convertimos la información en soluciones digitales impactantes — desde sitios web elegantes hasta sistemas de marca completos.
    Cada píxel, cada línea de código y cada idea importa para nosotros.
    Creemos que la tecnología debe ser simple, hermosa y poderosa.
    Con creatividad y precisión, InfoBitCode transforma tu visión en realidad digital.`,
        viewMoreText: "Ver más..."
    }
};

export default function About() {
    const { lan } = useMyContext();
    const content = aboutContent[lan === 'es' ? 'es' : 'en']; // fallback to English

    return (
        <div className='max-w-[1400px] p-2 sm:px-4 mx-auto flex lg:flex-row flex-col justify-between'>
            <div className='lg:max-w-[40%] flex items-center'>
                <div className='space-y-5 w-full'>
                    <div className='flex gap-3'>
                        <div className='flex justify-center items-center'>
                            <FaArrowRight className='text-(--color-primary)' size={25} />
                        </div>
                        <h1 className='text-[17px] sm:text-4xl text-(--color-secondary)'>{content.headingSmall}</h1>
                    </div>
                    <h1 className='sm:text-5xl font-semibold text-center sm:max-w-100%'>
                        {content.headingBig.split('Creative').map((part, index, arr) =>
                            index === 1 ? <span key={index} className='text-(--color-secondary)'>Creative</span> : part
                        )}
                    </h1>
                    <p className='text-center sm:text-start'>
                        {content.paragraph} <Link className='text-(--color-secondary)' href={'/'}>{content.viewMoreText}</Link>
                    </p>
                    <div>
                        <MarqueeSection />
                    </div>
                </div>
            </div>

            <div className='flex justify-center lg:max-w-[40%] items-center'>
                <SwiperSection />
            </div>
        </div>
    );
}
