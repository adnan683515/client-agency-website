"use client";

import Marquee from "react-fast-marquee";


import { FaReact, FaNodeJs, FaFigma, FaGithub, FaAws, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiVercel, SiDocker, SiKubernetes, SiGraphql, SiPostgresql, SiRedis, SiJest, SiExpress } from "react-icons/si";

export default function MarqueeSection() {

    return (
        <div className="py-7">
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
                
        
                <FaReact className="text-5xl mx-5" style={{ color: "#61DAFB" }} />

               
                <SiNextdotjs className="text-5xl mx-5" style={{ color: "#000000" }} />

           
                <SiTailwindcss className="text-5xl mx-5" style={{ color: "#38BDF8" }} />

         
                <SiTypescript className="text-5xl mx-5" style={{ color: "#3178C6" }} />

          
                <FaNodeJs className="text-5xl mx-5" style={{ color: "#83CD29" }} />

             
                <SiExpress className="text-5xl mx-5" style={{ color: "#000000" }} />

            
                <SiMongodb className="text-5xl mx-5" style={{ color: "#4FAA41" }} />

      
                <SiPostgresql className="text-5xl mx-10" style={{ color: "#336791" }} />

          
                <SiRedis className="text-5xl mx-5" style={{ color: "#DC382D" }} />

          
                <SiFirebase className="text-5xl mx-5" style={{ color: "#FFCA28" }} />

            
                <SiVercel className="text-5xl mx-5" style={{ color: "#000000" }} />

             
                <FaAws className="text-5xl mx-5" style={{ color: "#FF9900" }} />

           
                <SiDocker className="text-5xl mx-5" style={{ color: "#0db7ed" }} />

               
                <SiKubernetes className="text-5xl mx-5" style={{ color: "#326CE5" }} />

                <SiGraphql className="text-5xl mx-5" style={{ color: "#E535AB" }} />

           
                <SiJest className="text-5xl mx-5" style={{ color: "#99425b" }} />

                <FaPython className="text-5xl mx-5" style={{ color: "#3776AB" }} />

               
                <FaHtml5 className="text-5xl mx-10" style={{ color: "#E34C26" }} />

           
                <FaCss3Alt className="text-5xl mx-10" style={{ color: "#264DE4" }} />

              
                <FaFigma className="text-5xl mx-10" style={{ color: "#F24E1E" }} />

              
                <FaGithub className="text-5xl mx-10" style={{ color: "#000000" }} />

            </Marquee>
        </div>
    );
}
