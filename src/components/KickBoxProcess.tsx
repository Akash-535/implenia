import React from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import { KICKBOX_PROCESS_LIST } from "@/utils/helper";
import Image from "next/image";
import CustomButton from "./common/CustomButton";

const KickBoxProcess = () => {
  return (
    <div className="pt-[129px] pb-[144px] max-w-[1100px] mx-auto px-4 flex flex-col items-start max-lg:items-center max-xl:py-28 max-lg:py-20 max-md:py-14">
      <Heading text="KICKBOX PROCESS" myClass="max-lg:text-center" />
      <Description
        myClass="pt-[19px] pb-16 max-lg:text-center max-lg:pt-3 max-lg:pb-9"
        text="The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions: 1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors."
      />
      <div className="flex gap-[51px] justify-center items-center max-lg:flex-wrap max-lg:gap-8">
        {KICKBOX_PROCESS_LIST.map((obj, i) => (
          <div
            key={i}
            className="flex flex-col gap-10 justify-center items-center max-lg:gap-7 max-md:gap-4"
          >
            <Image
              width={227}
              height={92}
              className="max-lg:w-52 object-cover pointer-events-none"
              src={obj.image}
              alt="process box"
            />
            <div className="w-full max-w-[323px] min-h-[457px] border border-black p-[18px_20px_19px_26px] rounded-[28px] max-lg:min-h-[400px] max-lg:max-w-[300px] max-lg:px-[13px] object-cover">
              <p
                className={`text-custom-2xl leading-custom-xs font-semibold ${
                  i === 0
                    ? "text-custom-red"
                    : i === 1
                    ? "text-custom-blue"
                    : "text-custom-yellow"
                }`}
              >
                {obj.name}
              </p>
              <h3 className="leading-custom-2xl text-custom-black text-[35px] tracking-[-0.66px] font-semibold font-sans-semibold pt-1.5">
                {obj.heading}
              </h3>
              <p className="max-w-[277px] pt-3 text-custom-black text-custom-2xl max-lg:text-lg leading-custom-3xl tracking-[-0.28px] font-light font-sans-light">
                {obj.description}
              </p>
              <p className="max-w-[277px] text-custom-black pt-7 max-xl:pt-3 text-custom-2xl max-lg:text-lg leading-custom-3xl tracking-[-0.28px] font-light font-sans-light">
                {obj.descriptionTwo}
              </p>
            </div>
          </div>
        ))}
      </div>
      <CustomButton
        myClass="text-custom-red border-custom-red py-4 px-8 min-w-[268px] font-bold font-sans-bold hover:bg-custom-red hover:text-white mt-[39px] ml-5 max-lg:text-center max-lg:ml-0 max-lg:mt-6"
        text="Start your RedBox!"
      />
    </div>
  );
};

export default KickBoxProcess;
