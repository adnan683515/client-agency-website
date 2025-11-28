'use client';
import React from 'react';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import { useMyContext } from '../../context/MyContext';

const footerContent: Record<'en' | 'es', {
    description: string;
    quickLinks: string[];
    contact: {
        address: string;
        email: string;
        phone: string;
    };
    copyright: string;
}> = {
    en: {
        description: "We craft stunning digital experiences for modern businesses. Let's bring your ideas to life!",
        quickLinks: ["About", "Services", "Contact"],
        contact: {
            address: "Paseo de La Castellana 194, Madrid, España",
            email: "contact@infobitcode.com",
            phone: "+1 234 567 890"
        },
        copyright: "© 2025 Our Agency. All rights reserved."
    },
    es: {
        description: "Creamos experiencias digitales impresionantes para empresas modernas. ¡Hagamos realidad tus ideas!",
        quickLinks: ["Acerca de", "Servicios", "Contacto"],
        contact: {
            address: "123 Calle Agencia, Nueva York, NY",
            email: "correo@ejemplo.com",
            phone: "+1 234 567 890"
        },
        copyright: "© 2025 Nuestra Agencia. Todos los derechos reservados."
    }
};

export default function Footer() {
    const { lan, aboutRef, contactRef, serviceRef, homeRef, goToProjectSection } = useMyContext();
    const content = footerContent[lan === 'es' ? 'es' : 'en'];

    return (
        <footer className="bg-black/90 backdrop-blur-lg text-white py-10">
            <div className="max-w-[1400px] p-2 lg:p-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <Image onClick={() => goToProjectSection(homeRef)} src={logo} width={140} height={140} alt="footer-logo" />
                    <p className="text-sm text-gray-200">{content.description}</p>
                </div>

                <div>
                    <h2 className="sm:text-xl font-bold mb-4">{lan === 'es' ? 'Enlaces rápidos' : 'Quick Links'}</h2>
                    <ul className="space-y-2 text-[15px]  text-gray-200">
                        <li onClick={() => goToProjectSection(aboutRef)}>{content.quickLinks[0]}</li>
                        <li onClick={() => goToProjectSection(serviceRef)}>{content.quickLinks[1]}</li>
                        <li onClick={() => goToProjectSection(contactRef)}>{content.quickLinks[2]}</li>
                    </ul>
                </div>

                <div>
                    <h2 className="sm:text-xl font-bold mb-4">{lan === 'es' ? 'Contacto' : 'Contact'}</h2>
                    <p className="text-gray-200 text-[15px] mb-2">{content.contact.address}</p>
                    <p className="text-gray-200 text-[15px] mb-2">{content.contact.email}</p>
                    <p className="text-gray-200 text-[15px]">{content.contact.phone}</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-400 text-sm">
                {content.copyright}
            </div>
        </footer>
    );
}
