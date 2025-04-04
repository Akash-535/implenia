import React from "react";
import Image from "next/image";
import Description from "./common/Description";
import CustomButton from "./common/CustomButton";
import Navbar from "./common/Navbar";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-hero-bg bg-cover bg-center bg-no-repeat relative max-w-[1920px] mx-auto"
    >
      <Navbar />
      <Image
        data-aos="fade-up-right"
        width={340}
        height={400}
        className="pointer-events-none absolute -bottom-5 left-0 max-lg:w-[260px] max-md:h-[280px] max-md:w-[220px] max-sm:h-[260px] max-sm:w-[190px] max-md:bottom-4 object-cover"
        src="/assets/images/hero-side-img.webp"
        alt="hero image"
      />
      <div className="flex items-start justify-center flex-col h-full w-full p-[207px_16px_168px_132px] min-[1920.98px]:max-w-[1470px] min-[1920.98px]:mx-auto max-xl:pt-40 max-lg:pt-28 max-md:pt-24 max-lg:pl-5 max-lg:text-center max-lg:items-center max-lg:pb-24">
        <Description
          text="Shape the future of Implenia!"
          myClass="text-white font-bold !font-sans-bold !leading-custom-xs !tracking-normal text-shadow"
        />
        <h1 className="relative z-[1] pt-4 pb-6 max-lg:pb-3 text-custom-7xl leading-custom-sm text-white font-bold font-sans-bold max-w-[600px] tracking-[0.35px] max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl text-shadow">
          WE ARE LOOKING FOR YOUR IDEA
        </h1>
        <CustomButton
          text="Bring your idea to life!"
          myClass="p-[21px_44px] xl:min-w-[312px] border-2 border-white text-white font-bold font-sans-bold max-lg:p-[15.5px_32px] hover:bg-black hover:border-black"
        />
      </div>
    </div>
  );
};

export default Hero;
