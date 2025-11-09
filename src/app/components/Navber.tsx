'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';
import { useMyContext } from '../context/MyContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const { aboutRef, serviceRef, contactRef, homeRef, goToProjectSection, lan, setLan, } = useMyContext();

    const navLinks = [
        { label: 'Home', ref: homeRef },
        { label: 'Service', ref: serviceRef },
        { label: 'About', ref: aboutRef },
        { label: 'Contact', ref: contactRef },
    ];


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <nav
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-md shadow-md text-white' : 'bg-transparent text-white'
                }`}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between py-3 px-2 md:px-4 lg:px-2">
                <Link href="/">
                    <Image src={Logo} alt="Infobitcode Logo" width={150} height={60} className="cursor-pointer" />
                </Link>

                {/* Desktop nav links */}
                <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
                    {navLinks.map((ln, index) => (
                        <li
                            key={index}
                            className="hover:text-(--color-secondary) transition cursor-pointer"
                            onClick={() => goToProjectSection?.(ln.ref)}
                        >
                            {ln.label}
                        </li>
                    ))}
                </ul>

                {/* Language switch + Hamburger */}
                <div className="flex items-center gap-4">
                    {/* Desktop language switch */}
                    <button
                        onClick={() => setLan(lan === 'en' ? 'es' : 'en')}
                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-secondary) hover:bg-(--color-bit) transition"
                    >
                        <IoIosArrowBack size={20} className="rotate-180" />
                        <span className="text-white text-sm">{lan.toUpperCase()}</span>
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden flex flex-col gap-1.5"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden flex flex-col items-center backdrop-blur-sm text-white py-6 space-y-4"
                    >
                        {navLinks.map((ln, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    goToProjectSection(ln.ref);
                                    setMenuOpen(false);
                                }}
                            >
                                {ln.label}
                            </li>
                        ))}

                        {/* Mobile language switch */}
                        <button
                            onClick={() => setLan(lan === 'en' ? 'es' : 'en')}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-secondary) hover:bg-(--color-bit) transition"
                        >
                            <IoIosArrowBack size={20} className="rotate-180" />
                            <span className="text-white text-sm">{lan.toUpperCase()}</span>
                        </button>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}
