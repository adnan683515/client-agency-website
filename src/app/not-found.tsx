import React from 'react'

export default function NotFound() {



    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center  text-black">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
                <a
                    href="https://adnan683515.github.io/client-agency-website/"
                    className="bg-(--color-secondary) text-white px-6 py-2 rounded-full hover:bg-(--color-bit) transition"
                >
                    Go Home
                </a>
            </div>
        </div>
    )
}
