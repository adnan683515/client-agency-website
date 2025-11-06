"use client"

import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaFigma, FaGithub, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiVercel } from "react-icons/si";


export default function MarqueeSection() {
    const iconClass = "text-5xl text-gray-700 hover:text-[#F25912] transition mx-8";

    return (
        <div className=" py-7">
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
                <FaReact className={iconClass} />
                <SiNextdotjs className={iconClass} />
                <SiTailwindcss className={iconClass} />
                <SiTypescript className={iconClass} />
                <FaNodeJs className={iconClass} />
                <SiMongodb className={iconClass} />
                <FaFigma className={iconClass} />
                <FaGithub className={iconClass} />
                <SiFirebase className={iconClass} />
                <SiVercel className={iconClass} />
                <FaAws className={iconClass} />
            </Marquee>
        </div>
    );
}
