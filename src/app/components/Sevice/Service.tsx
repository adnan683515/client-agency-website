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

        <div className="min-h-[50vh] bg-[var(--color-bit)] pb-10">
            <div className='max-w-[90%] mx-auto '>

                <div className='relative sm:w-[70%] mx-auto  '>
                    <div className="flex flex-col justify-between sm:flex-row gap-6 pt-24 w-full">

                        <div className="bg-[var(--color-secondary)] p-3 sm:min-h-[30vh] rounded-4xl sm:max-w-[250px]">
                            <div className="space-y-2">
                                <h1 className="text-amber-50 text-2xl font-semibold">
                                    Chat for Impact
                                </h1>
                                <p>
                                    Connect with founders, funders and builders in the Chat for Impact
                                    community.
                                </p>
                            </div>
                        </div>



                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="relative max-w-[430px] sm:min-h-[30vh] flex rounded-4xl overflow-hidden shadow-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${image1.src})` }}
                        >

                            <div className="sm:w-3/5  p-4 sm:p-6 flex flex-col justify-center rounded-l-lg z-20">
                                <h2 className="text-lg font-bold text-white">Acceleration Program</h2>
                                <p className="text-white mt-2">
                                    Join a select cohort for a multi-week journey to develop, demo, and
                                    launch your chat for impact service.
                                </p>
                            </div>


                            <div className="w-2/5 rounded-r-lg z-10">

                                <div className="absolute inset-0 bg-black/50 rounded-r-lg"></div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="flex justify-end items-center mt-10 sm:mt-20">
                    <div className="flex justify-between sm:w-[80%] gap-6">

                        <div className="sm:w-[65%] hidden sm:block flex justify-center items-start">
                            <div className="max-w-3xl space-y-2">
                                <h1 className="text-6xl text-center font-semibold leading-tight">
                                    Together, we create digital solutions that make life better.
                                </h1>
                                <h2 className="text-3xl text-center text-gray-700">
                                    Get tailored guidance from InfoBitCode experts and actionable insights from our global network to launch and scale your idea.
                                </h2>
                            </div>
                        </div>

                        <div className="sm:w-[30%] bg-[var(--color-primary)]  h-[200px]  rounded-4xl p-3 flex  overflow-hidden ">

                            <div className="bg-black w-[14px] rounded-full h-full"></div>

                            <div className=" px-2 p-2">
                                <div>
                                    <h2 className="text-lg text-white font-semibold">Weekly Training</h2>
                                    <p className="text-white mt-1 text-sm max-w-[80%]">
                                        Build new skills with our guided weekly programs.
                                    </p>
                                </div>


                                <div className="flex  justify-between items-center sm:gap-6 mt-7">

                                    <div className="flex-shrink-0">
                                        <span className="text-lg text-white font-semibold">Every week</span>
                                    </div>


                                    <div className="flex -space-x-4">
                                        {
                                            serviceImages?.map((item, index) => {
                                                return <Image key={index} className='w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white z-0' src={item} width={100} height={100} alt={`user ${index}`}></Image>
                                            })
                                        }

                                    </div>

                                </div>

                            </div>





                        </div>
                    </div>
                </div>


                <div className="flex justify-start mt-8 ">
                    <div className="sm:relative sm:w-[70%]  sm:h-[300px]  rounded-xl overflow-hidden">


                        {/* Child 1 - top left */}
                        <div className="sm:absolute mb-8 sm:mb-0 sm:top-0 sm:left-0 rounded-5xl  flex items-center justify-center  font-bold">

                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="relative max-w-[430px]  h-[25vh] sm:min-h-[30vh] flex rounded-4xl overflow-hidden shadow-lg bg-cover bg-center"
                                style={{ backgroundImage: `url(${image1.src})` }}
                            >

                                <div className="sm:w-3/5  p-4 sm:p-6 flex flex-col justify-center rounded-l-lg z-20">
                                    <h2 className="text-lg font-bold text-white">Impact Builders Program</h2>
                                    <p className="text-white mt-2">
                                        Empowering creators to build impactful solutions through innovation and expert guidance.
                                    </p>
                                </div>


                                <div className="w-2/5 rounded-r-lg z-10">

                                    <div className="absolute inset-0 bg-black/50 rounded-r-lg"></div>
                                </div>
                            </div>
                        </div>

                        {/* Child 2 - bottom right */}
                        <div className="sm:absolute sm:bottom-0 w-full sm:w-[27%] right-0    flex items-center justify-center font-bold">


                            <div className="relative w-full mx-auto h-[25vh] sm:h-[400px] rounded-2xl overflow-hidden">
                                <div
                                    className="absolute rounded-2xl pt-15 sm:mt-22 inset-0 bg-center bottom-0 bg-cover"
                                    style={{ backgroundImage: `url(${girl.src})` }}
                                ></div>

                                <div className="absolute inset-0 bg-black/20  "></div>

                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4 z-20 bg-black/30  rounded-full">
                                    <button className="bg-white text-gray-800 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                                        <FaMicrophone size={20} />
                                    </button>

                                    <button className="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                                        <IoCall size={20} />
                                    </button>

                                    <button className="bg-white text-gray-800 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                                        <FaVideo size={20} />
                                    </button>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>




            </div>

        </div>

    )
}
