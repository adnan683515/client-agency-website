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


const aboutContent: Record<'en' | 'es', {
    headingSmall: string;
    headingBig: string;
    paragraph: string;
    paragraph2: string;
    strategyPoints: string[];

}> = {
    en: {
        headingSmall: "About Us",
        headingBig: "Innovation, Experience, and Technology That Transforms",
        paragraph: `At Info Bit Code, we are a multidisciplinary team passionate about creating digital solutions that generate real impact.
We design, develop, and implement modern, secure, and scalable software—always aligned with each client’s unique goals.`,
        strategyPoints: [
            "Cutting-edge technology",
            "Agile and flexible processes",
            "High technical expertise",
            "Tailor-made solutions"
        ],
        paragraph2: `We believe innovation should be simple, useful, and accessible. That’s why we support our clients at every stage, from the initial idea to their ongoing growth.`,

    },

    es: {
        headingSmall: "Sobre Nosotros",
        headingBig: "Innovación, Experiencia y Tecnología que Transforma",
        paragraph: `En Info Bit Code somos un equipo multidisciplinario apasionado por crear soluciones digitales que generan impacto real.
Diseñamos, desarrollamos e implementamos software moderno, seguro y escalable, adaptado a los objetivos de cada cliente.
`,
        strategyPoints: [
            "Tecnología de vanguardia",
            "Procesos ágiles y flexibles",
            "Alta especialización técnica",
            "Soluciones hechas a medida"
        ],
        paragraph2: `Creemos que la innovación debe ser simple, útil y accesible. Por eso acompañamos a nuestros clientes en cada etapa del camino, desde la idea inicial hasta su crecimiento continuo.`

    }
};


export default function About() {
    const { lan } = useMyContext();
    const content = aboutContent[lan === 'es' ? 'es' : 'en'];

    return (
        <div className='max-w-[1400px] p-2 sm:px-4 mx-auto flex lg:flex-row flex-col justify-between'>
            <div className='lg:max-w-[40%] flex items-center'>
                <div className='space-y-3 w-full'>
                    <div className=''>
                        <h1 className=' text-center text-2xl  sm:text-start font-semibold sm:text-2xl text-(--color-secondary)'>{content.headingSmall}</h1>
                    </div>
                    <h1 className='sm:text-3xl text-2xl md:text-4xl font-bold  text-start sm:text-start sm:max-w-100%'>
                        {content.headingBig.split('Creative').map((part, index, arr) =>
                            index === 1 ? <span key={index} className='text-(--color-secondary)'>Creative</span> : part
                        )}
                    </h1>
                    <p className='text-start sm:text-start'>
                        {content.paragraph}
                    </p>
                    <ul className="space-y-1 ">
                        {content.strategyPoints?.map((point, index) => (
                            <li key={index} className="text-start">
                                • {point}
                            </li>
                        ))}
                    </ul>
                    <p className='text-start sm:text-start'>
                        {content.paragraph2}
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
