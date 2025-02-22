"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Heading from "./common/Heading";
import Image from "next/image";
import Description from "./common/Description";
import CustomButton from "./common/CustomButton";
import { PrevIcon, NextIcon } from "@/utils/icons";

const OurCommunity = () => {
  return (
    <div
      id="community"
      className="py-[129.5px] px-4 flex flex-col items-start max-lg:items-center max-xl:py-28 max-lg:pt-20 max-lg:pb-14 max-md:py-14 max-md:pb-10 bg-custom-white"
    >
      <div className="container mx-auto relative">
        <div className="absolute top-[58%] max-lg:hidden -translate-y-1/2 flex left-0 prev-button z-50 cursor-pointer size-10">
          <PrevIcon />
        </div>
        <div className="absolute top-[58%] max-lg:hidden -translate-y-1/2 flex right-0 next-button z-50 cursor-pointer size-10">
          <NextIcon />
        </div>
        <Heading text="WHAT OUR COMMUNITY SAYS" myClass="max-lg:text-center" />
        <div className="pt-28 max-xl:pt-28 max-lg:pt-20 max-md:pt-10 max-sm:pt-5">
          <p className="text-[100px] text-center -mb-9 leading-custom-2xl tracking-[-0.66px] font-normal font-sans-regular text-custom-yellow">
            “
          </p>
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Navigation, Pagination]}
            className="max-w-[795px] mx-auto mySwiper max-lg:!pb-12"
          >
            <div className="swiper-pagination max-lg:block hidden"></div>
            {[...Array(2)].map((_, i) => (
              <SwiperSlide key={i} className="text-center">
                <p className="text-[32px] font-semibold font-sans-semibold max-w-[795px] mx-auto text-center leading-custom-2xl max-lg:text-2xl max-md:text-lg">
                  With innovative and efficient solutions we can surprise our
                  customers and increase our chances of success - I experienced
                  this in many projects. Take the time to be courageous and
                  active with new ideas!
                </p>
                <div className="text-start flex items-center gap-3.5 pl-[84px] pt-[30px] max-lg:pl-10 max-lg:pt-6">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/jens-vollmar.webp"
                    className="object-cover max-w-20 max-h-20 rounded-s-full"
                    alt="jens vollmar"
                  />
                  <div>
                    <Description
                      text="Head Division Buildings"
                      myClass="text-custom-gray font-semibold font-sans-semibold tracking-normal leading-custom-xs"
                    />
                    <Description
                      text="Jens Vollmar"
                      myClass="font-semibold font-sans-semibold tracking-normal leading-custom-xs"
                    />
                  </div>
                </div>
                <CustomButton
                  myClass="text-custom-red border-custom-red py-4 px-8 min-w-[268px] font-bold font-sans-bold hover:bg-custom-red hover:text-white mt-[39px] ml-5 max-lg:text-center max-lg:ml-0 max-lg:mt-6"
                  text="Join the community!"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
