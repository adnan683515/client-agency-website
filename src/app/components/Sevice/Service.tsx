'use client';
import React, { useState } from "react";
import './service.css'
import Image from 'next/image'
import { FaVideo, FaMicrophone } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useMyContext } from '../../context/MyContext'

// Images
import image1 from './../../assets/images/excited-by-good-news-motivated-colleagues-celebrating-corporate-success-together.jpg'
import programmImage from './../../assets/images/medium-shot-colleagues-working-together.jpg'
import girl from './../../assets/images/girl.jpg'
import service4 from './../../assets/images/serviceImag4.jpg'
import service1 from './../../assets/images/serviceImage.jpg'
import service2 from './../../assets/images/serviceimag2.jpg'
import service3 from './../../assets/images/aboutImage3.jpg'

const serviceImages = [service1, service2, service3, service4]

// Content mapping
const serviceContent: Record<'en' | 'es', {
    chatTitle: string;
    chatDesc: string;
    listItems: string[];
    joinCommunity: string;
    accelerationTitle: string;
    accelerationDesc: string;
    weeklyTitle: string;
    weeklyDesc: string;
    togetherTitle: string;
    togetherSubtitle: string;
    impactProgramTitle: string;
    impactProgramDesc: string;
}> = {
    en: {
        chatTitle: "Chat for Impact",
        chatDesc: "Connect with founders, funders, and builders in the Chat for Impact community. InfoBitCode helps you transform ideas into digital experiences that inspire and deliver results.",
        listItems: ["Collaborate on innovative projects", "Learn from digital strategy experts", "Access resources and tools from InfoBitCode"],
        joinCommunity: "Join the Community",
        accelerationTitle: "Acceleration Program",
        accelerationDesc: "Join a select cohort for a multi-week journey to develop, demo, and launch your chat for impact service.",
        weeklyTitle: "Weekly Training",
        weeklyDesc: "Build new skills with our guided weekly programs.",
        togetherTitle: "Together, we create digital solutions that make life better.",
        togetherSubtitle: "Get tailored guidance from InfoBitCode experts and actionable insights from our global network to launch and scale your idea.",
        impactProgramTitle: "Impact Builders Program",
        impactProgramDesc: "Empowering creators to build impactful solutions through innovation and expert guidance."
    },
    es: {
        chatTitle: "Chat para Impacto",
        chatDesc: "Conéctate con fundadores, financiadores y creadores en la comunidad Chat para Impacto. InfoBitCode te ayuda a transformar ideas en experiencias digitales que inspiran y generan resultados.",
        listItems: ["Colabora en proyectos innovadores", "Aprende de expertos en estrategia digital", "Accede a recursos y herramientas de InfoBitCode"],
        joinCommunity: "Únete a la Comunidad",
        accelerationTitle: "Programa de Aceleración",
        accelerationDesc: "Únete a una cohorte selecta para un viaje de varias semanas para desarrollar, demostrar y lanzar tu servicio Chat para Impacto.",
        weeklyTitle: "Entrenamiento Semanal",
        weeklyDesc: "Desarrolla nuevas habilidades con nuestros programas guiados semanalmente.",
        togetherTitle: "Juntos, creamos soluciones digitales que mejoran la vida.",
        togetherSubtitle: "Obtén orientación personalizada de los expertos de InfoBitCode y conocimientos prácticos de nuestra red global para lanzar y escalar tu idea.",
        impactProgramTitle: "Programa Constructores de Impacto",
        impactProgramDesc: "Empoderando a los creadores para construir soluciones impactantes mediante innovación y guía experta."
    }
}

export default function Service() {
    const [isHovered, setIsHovered] = useState(false);
    const { lan } = useMyContext()
    const content = serviceContent[lan === 'es' ? 'es' : 'en']; // fallback to English

    return (
        <div className="min-h-[50vh] bg-(--color-bit) pb-10">
            <div className="max-w-[1400px] p-2 sm:p-3 lg:p-0 mx-auto">

                {/* Chat & Acceleration */}
                <div className="relative w-full sm:w-[80%] mx-auto">
                    <div className="flex flex-col justify-between sm:flex-row gap-6 pt-24 w-full ">
                        <div className="bg-(--color-secondary) p-4 sm:min-h-[20vh] rounded-4xl sm:w-[40%] flex flex-col justify-between">
                            <div className="space-y-2">
                                <h1 className="text-2xl sm:text-2xl text-amber-50 font-semibold">{content.chatTitle}</h1>
                                <p className="text-sm sm:text-base text-amber-100">{content.chatDesc}</p>
                                <ul className="list-disc list-inside text-amber-100 space-y-1 text-sm sm:text-base">
                                    {content.listItems.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            </div>
                            <div className="mt-4 pt-4 border-t border-amber-200 flex justify-between items-center">
                                <span className="text-amber-50 font-medium text-sm sm:text-base">{content.joinCommunity}</span>
                                <button className="bg-amber-50 text-(--color-secondary) px-4 py-2 rounded-full text-sm sm:text-base hover:bg-amber-100 transition">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="relative flex-1 sm:max-w-[430px] min-h-[25vh] sm:min-h-[30vh] rounded-4xl overflow-hidden shadow-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${image1.src})` }}
                        >
                            <div className="sm:w-3/5 p-4 sm:p-6 flex flex-col justify-center rounded-l-lg z-20">
                                <h2 className="text-lg sm:text-xl font-bold text-black">{content.accelerationTitle}</h2>
                                <p className="text-black mt-2 text-sm sm:text-base">{content.accelerationDesc}</p>
                            </div>
                            <div className="w-2/5 rounded-r-lg z-10">
                                <div className="absolute inset-0 bg-black/20 rounded-r-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Weekly & Together */}
                <div className="flex flex-col sm:flex-row justify-end items-start mt-10 sm:mt-20 gap-6 sm:gap-8">
                    <div className="hidden sm:flex sm:w-[65%] flex-col items-center text-center">
                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-3xl sm:text-6xl font-semibold leading-tight">{content.togetherTitle}</h1>
                            <h2 className="text-lg sm:text-3xl text-gray-700">{content.togetherSubtitle}</h2>
                        </div>
                    </div>

                    <div className="sm:w-[30%] w-full bg-(--color-primary) h-auto sm:h-[200px] rounded-4xl p-4 flex flex-col overflow-hidden gap-4">
                        <div className="bg-black w-[4%] rounded-full h-full"></div>
                        <div className="px-2 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg text-white font-semibold">{content.weeklyTitle}</h2>
                                <p className="text-white mt-1 text-sm sm:text-base max-w-full">{content.weeklyDesc}</p>
                            </div>
                            <div className="flex justify-between items-center gap-4 sm:gap-6 mt-4">
                                <span className="text-lg text-white font-semibold">Every week</span>
                                <div className="flex -space-x-4">
                                    {serviceImages?.map((item, index) => (
                                        <Image
                                            key={index}
                                            src={item}
                                            alt={`user ${index}`}
                                            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white z-0"
                                            width={100}
                                            height={100}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact Program & Girl Image */}
                <div className="flex flex-col sm:flex-row justify-start mt-8 gap-6">
                    <div className="relative w-full sm:w-[70%] rounded-xl overflow-hidden h-[25vh] sm:min-h-[30vh]">
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="relative sm:w-[60%] h-full hover:scale-105 transition duration-700 rounded-4xl overflow-hidden shadow-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${programmImage.src})` }}
                        >
                            <div className="sm:w-3/5 p-4 sm:p-6 flex flex-col justify-center rounded-l-lg z-100">
                                <h2 className="text-lg sm:text-xl font-bold text-black">{content.impactProgramTitle}</h2>
                                <p className="text-black mt-2 text-sm sm:text-base">{content.impactProgramDesc}</p>
                            </div>
                            <div className="w-2/5 rounded-r-lg -z-10">
                                <div className="absolute inset-0 bg-black/30 rounded-r-lg"></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-[27%] relative flex justify-center items-center">
                        <div className="relative w-full h-[25vh] sm:h-[400px] rounded-2xl overflow-hidden">
                            <div
                                className="absolute inset-0 rounded-2xl bg-cover bg-center"
                                style={{ backgroundImage: `url(${girl.src})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>

                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4 z-20 bg-black/30 rounded-full p-2">
                                <button className="bg-white text-gray-800 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                                    <FaMicrophone size={20} />
                                </button>
                                <button className="bg-red-600 text-white w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                                    <IoCall size={20} />
                                </button>
                                <button className="bg-white text-gray-800 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                                    <FaVideo size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
