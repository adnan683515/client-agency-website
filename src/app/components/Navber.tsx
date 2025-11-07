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
    const [language, setLanguage] = useState('EN');

    const { aboutRef, serviceRef, contactRef, homeRef, goToProjectSection } = useMyContext();

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
            <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4 sm:px-6 lg:px-0">
                <Link href="/">
                    <Image src={Logo} alt="Infobitcode Logo" width={150} height={60} className="cursor-pointer" />
                </Link>

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

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-secondary) hover:bg-(--color-bit) transition"
                    >
                        <IoIosArrowBack size={20} className="rotate-180" />
                        <span className="text-white text-sm">{language}</span>
                    </button>

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

            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden flex flex-col items-center backdrop-blur-sm text-white py-6 space-y-4"
                    >
                        {navLinks.map((lnk, index) => (
                            <li key={index} onClick={() => setMenuOpen(false)}>
                                <Link
                                    href={`#${lnk.label.toLowerCase()}`}
                                    className="block text-lg hover:text-(--color-secondary) transition"
                                >
                                    {lnk.label}
                                </Link>
                            </li>
                        ))}

                        <button
                            onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-secondary) hover:bg-(--color-bit) transition"
                        >
                            <IoIosArrowBack size={20} className="rotate-180" />
                            <span className="text-white text-sm">{language}</span>
                        </button>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}
