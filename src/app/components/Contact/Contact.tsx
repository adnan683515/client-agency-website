import React from 'react';

export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full  py-10 px-0 max-w-[90%] mx-auto sm:px-6 lg:px-0"
        >

            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-bold text-gray-900">
                    Get in Touch
                </h2>
                <p className="mt-4 text-gray-600">
                    Have a project in mind or want to collaborate? Contact us and let's build something amazing together.
                </p>
            </div>


            <div className="flex flex-col md:flex-row gap-10  mx-auto">

                <form className="flex-1 bg-white p-6 rounded-2xl space-y-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-bit)]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-bit)]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Write your message..."
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-bit)]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-bit)] transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className="flex-1 flex flex-col justify-center space-y-6">
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600">contact@infobitcode.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl ">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600">+1 234 567 890</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl ">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600">123 InfoBitCode Street, Silicon Valley, CA</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
