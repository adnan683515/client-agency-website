"use client";
import React from "react";
import dynamic from "next/dynamic";
import lottiLoading from "./../../assets/Lottie/Sandy Loading.json";


const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
);

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-white">
            <Player
                autoplay
                loop
                src={lottiLoading}
                style={{ height: "250px", width: "250px" }}
            />
        </div>
    );
}
