import React from "react";
import { STORIES_LIST } from "@/utils/helper";
import Image from "next/image";
import Heading from "./common/Heading";
import CustomButton from "./common/CustomButton";

const Stories = () => {
  return (
    <div
      id="stories"
      className="pt-[128px] pb-[144px] max-lg:py-28 max-md:py-20 max-sm:py-14 px-4"
    >
      <div className="container mx-auto max-w-[1091px] max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
        <Heading
          myClass="pb-[25px] max-sm:pb-3 max-lg:text-center"
          text="INTRAPRENEURSHIP STORIES"
        />
        <div className="max-w-[1071px] max-xl:gap-10 max-xl:justify-start max-sm:justify-center flex-wrap ml-auto flex justify-between">
          {STORIES_LIST.map((obj, i) => (
            <div
              key={i}
              className="border border-solid max-w-[323px] border-black relative rounded-[28px]"
            >
              <div
                className={`max-w-[104px] w-full flex justify-center items-center min-h-[27px] rounded-[13.5px] absolute top-[27px] left-[23px] max-sm:top-4 max-sm:left-3 font-sans-semibold font-semibold ${
                  i === 0 ? "bg-custom-blue" : "bg-custom-yellow"
                }`}
              >
                <p className="font-semibold text-white text-[21px] leading-[100%]">
                  {obj.name}
                </p>
              </div>
              <Image
                src={obj.image}
                alt={obj.name}
                width={325}
                height={207}
                className="rounded-[28px] max-md:rounded-2xl object-cover"
              />
              <h3 className="text-[35px] leading-[44px] tracking-[0.66px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:leading-[36px] max-md:leading-[32px] max-sm:leading-[28px] font-semibold text-blackLight pt-[49px] max-sm:py-8 max-sm:px-4 pb-[63.5px] pr-[17px] pl-[27.5px]">
                {obj.heading}
              </h3>
            </div>
          ))}
        </div>
        <CustomButton
          myClass="text-custom-red border-custom-red py-4 px-8 min-w-[268px] font-bold font-sans-bold hover:bg-custom-red hover:text-white mt-[39px] ml-5 max-lg:text-center max-lg:ml-0 max-lg:mt-6"
          text="More Stories"
        />
      </div>
    </div>
  );
};

export default Stories;
