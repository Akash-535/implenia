"use client";
import React, { useState } from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import { KICK_COUNTER_LIST } from "@/utils/helper";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CustomButton from "./common/CustomButton";

const KickBox = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCount(inView),
  });
  return (
    <div className="max-w-[1112px] mx-auto pt-[140px] pb-[136px] px-4 max-xl:py-28 max-lg:py-20 max-md:py-14">
      <Heading text="IMPLENIA KICKBOX" myClass="max-lg:text-center" />
      <Description
        myClass="pt-4 pb-12 max-lg:pb-7 max-md:pb-4 max-sm:py-2 max-lg:text-center"
        text="Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!"
      />
      <div className="flex gap-[97px] items-center justify-center max-lg:flex-col max-xl:gap-20 max-lg:gap-14 max-md:gap-8 max-sm:gap-1.5 max-xl:flex-wrap">
        <div
          ref={ref}
          className="flex gap-[52px] items-center w-full max-md:flex-wrap max-lg:gap-4 max-xl:justify-center"
        >
          {KICK_COUNTER_LIST.map((obj, i) => (
            <div key={i} className="w-4/12 max-lg:w-6/12 max-lg:text-center">
              <span className="text-custom-yellow text-custom-8xl leading-custom-xs font-normal font-sans-regular w-[176px] max-xl:text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
                +{" "}
                <CountUp
                  start={0}
                  end={
                    count && i === 0
                      ? 155
                      : count && i === 1
                      ? 325
                      : count && i === 2
                      ? 250
                      : 0
                  }
                  duration={3}
                />
              </span>
              <p className="text-custom-2xl leading-custom-xs font-bold font-sans-bold max-lg:text-xl max-md:text-lg">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
        <CustomButton
          myClass="text-custom-red border-custom-red py-4 px-8 min-w-[268px] font-bold font-sans-bold hover:bg-custom-red hover:text-white"
          text="Submit your idea!"
        />
      </div>
    </div>
  );
};

export default KickBox;
