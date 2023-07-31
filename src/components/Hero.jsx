import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/hero-image.jpg";
import PlayIcon from "@/assets/images/play-icon.svg";

const Hero = ({ data }) => {
  return (
    <div className="w-full h-full flex items-center">
      <Image
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover rounded-bl-lg rounded-br-lg"
      />
      <div className="absolute left-2/4 top-2/4 flex items-center flex-col lg:w-[800px] md:w-[350px] -translate-x-1/2 -translate-y-1/2">
        <h1 className="lg:text-7xl lg:leading-[96px] md:text-3xl font-normal md:leading-10 text-center text-white mb-6">
          {data.longtitle}
        </h1>
        <p className="lg:text-xl md:text-base leading-8 text-center font-normal text-gray-200 mb-12">
          {data.description}
        </p>
        <button className="flex items-center gap-6 px-10 rounded-3xl bg-blue-600 h-16">
          Find out more
          <Image
            src={PlayIcon}
            className="bg-no-repeat bg-cover"
            alt="Find out more"
            width={24}
            height={24}
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default Hero;
