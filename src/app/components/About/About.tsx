import React from 'react'
import imageView from '../assets/Stacked_blob.png'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";
import MarqueeSection from './MarqueeSection';
import Button from '../shared/Button';
import SwiperSection from './SwiperSection';
import Link from 'next/link';


export default function About() {
    return (
        <div className='max-w-[1400px] p-2 sm:px-4 mx-auto flex lg:flex-row flex-col  justify-between'>


            <div className='lg:max-w-[40%]  flex items-center '>
                <div className='space-y-5  w-full'>

                    <div className='flex  gap-3'>
                        <div className='flex justify-center items-center'>
                            <FaArrowRight className='text-(--color-primary)' size={25} />
                        </div>
                        <h1 className='text-[17px] sm:text-4xl text-(--color-secondary)'>About Us</h1>
                    </div>
                    <h1 className='sm:text-5xl font-semibold text-center  sm:max-w-100%'>We’re the <span className='text-(--color-secondary)'>Creative</span> Minds Building Tomorrow’s Brands</h1>

                    <p className='text-center sm:text-start'>At InfoBitCode, we craft digital experiences that connect ideas to innovation.
                        Our team of passionate designers, developers, and strategists work together to build brands that inspire trust and performance.
                        We turn information into impactful digital solutions — from sleek websites to full-scale brand systems.
                        Every pixel, every line of code, and every idea matters to us.
                        We believe technology should be simple, beautiful, and powerful.
                        With creativity and precision, InfoBitCode transforms your vision into digital reality. <Link className='text-(--color-secondary)' href={'/'}>View more...</Link> </p>

                    <div>
                        <MarqueeSection></MarqueeSection>

                    </div>


                </div>
            </div>
            <div className='flex justify-center lg:max-w-[40%]  items-center'>



                <SwiperSection></SwiperSection>


            </div>
        </div>
    )
}
