'use client'
import Link from "next/link";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-16">
      
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello!! I am Sachin Prajapati
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experience"
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
          />

          <p className="text-center md:tracking-wider mb-4 mt-3 text-sm md:text-lg lg:text-xl">
            MERN STACK Enthusiast and Software Developer
          </p>

          <Link href="#about">
            <MagicButton 
              title="Show my Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-3/4 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
    </div>
  );
};

export default Hero;
