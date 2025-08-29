"use client"

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image"
import {socialMedia}  from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          width={800}           // Replace with your actual size
          height={600}
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for exciting <span className="text-purple">job opportunities </span> 
          to grow and contribute?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m eager to apply my skills in real-world projects and collaborate with 
          innovative teams. Open to roles in frontend, backend, or full-stack 
          development. 
        </p> 

        <Link href="https://www.linkedin.com/in/sachin-prajapati-it/">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Sachin Prajapati
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info: any) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
