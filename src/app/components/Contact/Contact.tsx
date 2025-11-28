'use client';
import React from 'react';
import { useMyContext } from '../../context/MyContext';

const contactContent: Record<'en' | 'es', {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    emailTitle: string;
    emailValue: string;
    phoneTitle: string;
    phoneValue: string;
    addressTitle: string;
    addressValue: string;
}> = {
    en: {
        title: "CONTACT — Contact",
        subtitle: "Let's talk about your next project.\n\nAt Info Bit Code, we are ready to help you build the technology solution your business needs.\n\nTell us your idea, and we’ll guide you on the path to innovation.",
        nameLabel: "Name",
        namePlaceholder: "Your Name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Write your message...",
        sendBtn: "Send Message",
        emailTitle: "Email",
        emailValue: "contact@infobitcode.com",
        phoneTitle: "Phone",
        phoneValue: "+1 234 567 890",
        addressTitle: "Address",
        addressValue: "Paseo de La Castellana 194, Madrid, Spain"
    },
    es: {
        title: "CONTACTO — Contacto",
        subtitle: "Hablemos sobre tu próximo proyecto.\n\nEn Info Bit Code estamos listos para ayudarte a construir la solución tecnológica que tu empresa necesita.\n\nCuéntanos tu idea y te acompañamos en el camino hacia la innovación.",
        nameLabel: "Nombre",
        namePlaceholder: "Tu Nombre",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "tu@ejemplo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje...",
        sendBtn: "Enviar Mensaje",
        emailTitle: "Correo",
        emailValue: "contact@infobitcode.com",
        phoneTitle: "Teléfono",
        phoneValue: "+1 234 567 890",
        addressTitle: "Dirección",
        addressValue: "Paseo de La Castellana 194, Madrid, España"
    }
};

export default function Contact() {
    const { lan } = useMyContext();
    const content = contactContent[lan === 'es' ? 'es' : 'en']; 

    return (
        <section
            id="contact"
            className="max-w-[1400px] py-10 px-2 mx-auto sm:px-6 lg:px-0"
        >
            <div className="text-center max-w-3xl mx-auto mb-12 whitespace-pre-line">
                <h2 className="text-2xl sm:text-3xl text-center  font-bold text-gray-900">{content.title}</h2>
                <p className="mt-4 text-gray-600">{content.subtitle}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mx-auto">
                {/* Contact Form */}
                <form className="flex-1 bg-white rounded-2xl space-y-4 p-6">
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1" htmlFor="name">{content.nameLabel}</label>
                        <input
                            type="text"
                            id="name"
                            placeholder={content.namePlaceholder}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-bit)]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1" htmlFor="email">{content.emailLabel}</label>
                        <input
                            type="email"
                            id="email"
                            placeholder={content.emailPlaceholder}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-bit)]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1" htmlFor="message">{content.messageLabel}</label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder={content.messagePlaceholder}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-bit)]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-bit)] transition"
                    >
                        {content.sendBtn}
                    </button>
                </form>

                {/* Contact Info */}
                <div className="flex-1 flex flex-col justify-center space-y-1 sm:space-y-6">
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="sm:text-xl font-semibold text-gray-900 mb-2">{content.emailTitle}</h3>
                        <p className="text-gray-600">{content.emailValue}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="sm:text-xl font-semibold text-gray-900 mb-2">{content.phoneTitle}</h3>
                        <p className="text-gray-600">{content.phoneValue}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="sm:text-xl font-semibold text-gray-900 mb-2">{content.addressTitle}</h3>
                        <p className="text-gray-600">{content.addressValue}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
