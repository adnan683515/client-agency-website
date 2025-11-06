import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About/About";
import Service from "./components/Sevice/Service";
import Contact from "./components/Contact/Contact";


export default function Home() {
  return (
    <div >

      <HeroSection></HeroSection>

      <div className="sm:my-[100px]">

        <About></About>
      </div>

      <div className="my-[100px] ">
        <div className="flex justify-center items-center animate-bounce">
          <span className="text-[var(--color-primary)] mb-5 text-5xl">↓</span>
        </div>
        <Service></Service>
      </div>


      <div>
        <div className="flex justify-center items-center animate-bounce">
          <span className="text-[var(--color-primary)]  text-5xl">↓</span>
        </div>
        <Contact></Contact>
      </div>

    </div>
  );
}
