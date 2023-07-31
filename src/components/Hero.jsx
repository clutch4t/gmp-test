import Image from "next/image";
import React from "react";
import PlayIcon from "@/assets/images/play-icon.svg";

const Hero = ({ data }) => {
  return (
    <div className="bg-[url('../assets/images/hero-image.jpg')] w-full h-full absolute bg-no-repeat bg-cover rounded-bl-lg rounded-br-lg flex items-center">
      <div className="absolute left-2/4 top-2/4 flex items-center flex-col w-[800px] -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl font-normal leading-[96px] text-center text-white mb-6">
          {data.longtitle}
        </h1>
        <p className="text-xl leading-[30px] text-center font-normal text-gray-200 mb-12">
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
