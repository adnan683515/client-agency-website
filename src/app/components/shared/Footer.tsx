import React from 'react';
import logo from '../../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { useMyContext } from '../../context/MyContext';

export default function Footer() {


    const { aboutRef,
        contactRef,
        serviceRef, goToProjectSection, homeRef } = useMyContext()
    return (
        <footer className="bg-black/90  backdrop-blur-lg text-white py-10 ">
            <div className="max-w-[1400px] p-2 sm:p-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>


                    <Image onClick={() => goToProjectSection(homeRef)} src={logo} width={140} height={140} alt='footer-image'></Image>
                    <p className="text-sm text-gray-200">
                        We craft stunning digital experiences for modern businesses. Let's bring your ideas to life!
                    </p>
                </div>


                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-gray-200">

                        <li onClick={() => goToProjectSection(aboutRef)}>About</li>
                        <li onClick={() => goToProjectSection(serviceRef)}>Services</li>
                        <li onClick={() => goToProjectSection(contactRef)}>Contact</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Contact</h2>
                    <p className="text-gray-200 mb-2">123 Agency St., New York, NY</p>
                    <p className="text-gray-200 mb-2">email@example.com</p>
                    <p className="text-gray-200">+1 234 567 890</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

            </div>

            <div className="mt-10 text-center text-gray-400 text-sm">
                &copy; 2025 Our Agency. All rights reserved.
            </div>
        </footer>
    );
}
