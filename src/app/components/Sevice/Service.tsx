"use client"
import React from 'react'
import './service.css'
import image1 from './../../assets/images/aboutImage1.jpg'
import girl from './../../assets/images/girl.jpg'
import Image from 'next/image'
import { useState } from "react";

import { FaVideo, FaMicrophone } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


// service image links
import service4 from './../../assets/images/serviceImag4.jpg'
import service1 from './../../assets/images/serviceImage.jpg'
import service2 from './../../assets/images/serviceimag2.jpg'
import service3 from './../../assets/images/aboutImage3.jpg'

const serviceImages = [service1, service2, service3, service4]

export default function Service() {


    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="min-h-[50vh] bg-(--color-bit) pb-10">
            <div className="max-w-[1400px] p-2 sm:p-0 mx-auto">

                {/* Top Section */}
                <div className="relative w-full sm:w-[80%] mx-auto">
                    <div className="flex flex-col justify-between sm:flex-row gap-6 pt-24 w-full ">

                        {/* Left Card */}
                        <div className="bg-(--color-secondary)   p-4 sm:min-h-[30vh] rounded-4xl sm:w-[40%]">
                            <div className="space-y-2">
                                <h1 className="text-2xl sm:text-3xl text-amber-50 font-semibold">Chat for Impact</h1>
                                <p className="text-sm sm:text-base">
                                    Connect with founders, funders and builders in the Chat for Impact community.
                                </p>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="relative flex-1 sm:max-w-[430px] min-h-[25vh] sm:min-h-[30vh] rounded-4xl overflow-hidden shadow-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${image1.src})` }}
                        >
                            <div className="sm:w-3/5 p-4 sm:p-6 flex flex-col justify-center rounded-l-lg z-20">
                                <h2 className="text-lg sm:text-xl font-bold text-white">Acceleration Program</h2>
                                <p className="text-white mt-2 text-sm sm:text-base">
                                    Join a select cohort for a multi-week journey to develop, demo, and launch your chat for impact service.
                                </p>
                            </div>

                            <div className="w-2/5 rounded-r-lg z-10">
                                <div className="absolute inset-0 bg-black/50 rounded-r-lg"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end items-start mt-10 sm:mt-20 gap-6 sm:gap-8">


                    <div className="hidden sm:flex sm:w-[65%] flex-col items-center text-center">
                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-3xl sm:text-6xl font-semibold leading-tight">
                                Together, we create digital solutions that make life better.
                            </h1>
                            <h2 className="text-lg sm:text-3xl text-gray-700">
                                Get tailored guidance from InfoBitCode experts and actionable insights from our global network to launch and scale your idea.
                            </h2>
                        </div>
                    </div>


                    <div className="sm:w-[30%] w-full bg-(--color-primary) h-auto sm:h-[200px] rounded-4xl p-4 flex flex-col overflow-hidden gap-4">
                        <div className="bg-black w-[4%] rounded-full h-full"></div>
                        <div className="px-2 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg text-white font-semibold">Weekly Training</h2>
                                <p className="text-white mt-1 text-sm sm:text-base max-w-full">
                                    Build new skills with our guided weekly programs.
                                </p>
                            </div>

                            <div className="flex justify-between items-center gap-4 sm:gap-6 mt-4">
                                <span className="text-lg text-white font-semibold">Every week</span>
                                <div className="flex -space-x-4">
                                    {serviceImages?.map((item, index) => (
                                        <Image
                                            key={index}
                                            src={item}
                                            alt={`user ${index}`}
                                            className="w-8 h-8  sm:w-12 sm:h-12 rounded-full border-2 border-white z-0"
                                            width={100}
                                            height={100}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex flex-col sm:flex-row justify-start mt-8 gap-6">

                    <div className="relative w-full sm:w-[70%] rounded-xl overflow-hidden min-h-[25vh] sm:min-h-[30vh]">
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="relative sm:w-[60%] h-full hover:scale-105 rounded-4xl overflow-hidden shadow-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${image1.src})` }}
                        >
                            <div className="sm:w-3/5 p-4 sm:p-6 flex flex-col justify-center rounded-l-lg z-20">
                                <h2 className="text-lg sm:text-xl font-bold text-white">Impact Builders Program</h2>
                                <p className="text-white mt-2 text-sm sm:text-base">
                                    Empowering creators to build impactful solutions through innovation and expert guidance.
                                </p>
                            </div>

                            <div className="w-2/5 rounded-r-lg z-10">
                                <div className="absolute inset-0 bg-black/50 rounded-r-lg"></div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full sm:w-[27%] relative flex justify-center items-center">
                        <div className="relative w-full h-[25vh] sm:h-[400px] rounded-2xl overflow-hidden">
                            <div
                                className="absolute inset-0  rounded-2xl bg-cover bg-center"
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
