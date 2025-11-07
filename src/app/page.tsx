"use client"
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About/About";
import Service from "./components/Sevice/Service";
import Contact from "./components/Contact/Contact";
import { useMyContext } from "./context/MyContext";



export default function Home() {
  const { aboutRef,
    contactRef,
    serviceRef, homeRef } = useMyContext()


  return (
    <div >


      <div ref={homeRef}>
        <HeroSection></HeroSection>
      </div>

      <div ref={aboutRef} className="sm:my-[50px] my-0">

        <About></About>
      </div>

      <div ref={serviceRef} className="my-[20px]">
        <div className="flex justify-center items-center animate-bounce">
          <span className="text-(--color-primary) mb-5 text-5xl">↓</span>
        </div>

        <div >
          <Service></Service>
        </div>
      </div>


      <div>
        <div className="flex justify-center items-center animate-bounce">
          <span className="text-(--color-primary)  text-5xl">↓</span>
        </div>

        <div ref={contactRef}>
          <Contact></Contact>
        </div>
      </div>

    </div>
  );
}
