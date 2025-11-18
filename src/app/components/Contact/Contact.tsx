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
        title: "Get in Touch",
        subtitle: "Have a project in mind or want to collaborate? Contact us and let's build something amazing together.",
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
        addressValue: "123 InfoBitCode Street, Silicon Valley, CA"
    },
    es: {
        title: "Ponte en Contacto",
        subtitle: "¿Tienes un proyecto en mente o quieres colaborar? Contáctanos y construyamos algo increíble juntos.",
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
        addressValue: "123 Calle InfoBitCode, Silicon Valley, CA"
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
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-bold text-gray-900">{content.title}</h2>
                <p className="mt-4 text-gray-600">{content.subtitle}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mx-auto">
                <form className="flex-1 bg-white rounded-2xl space-y-4">
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

                <div className="flex-1 flex flex-col justify-center space-y-6">
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.emailTitle}</h3>
                        <p className="text-gray-600">{content.emailValue}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.phoneTitle}</h3>
                        <p className="text-gray-600">{content.phoneValue}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.addressTitle}</h3>
                        <p className="text-gray-600">{content.addressValue}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
