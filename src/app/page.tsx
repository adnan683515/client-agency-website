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


      <div ref={homeRef} className="">
        <HeroSection></HeroSection>
      </div>

      <div ref={aboutRef} className="  sm:py-30  my-0">

        <About></About>
      </div>

      <div ref={serviceRef} className="my-[30px]">
      
        <div >
          <Service></Service>
        </div>
      </div>


      <div>
   
        <div ref={contactRef}>
          <Contact></Contact>
        </div>
      </div>

    </div>
  );
}
