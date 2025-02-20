"use client";
import React, { useState } from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";

const HowWorks = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="pt-[128px] pb-[144px] bg-custom-white px-4 max-xl:py-28 max-lg:py-20 max-md:py-14">
      <div className="max-w-[1098px] mx-auto">
        <Heading
          text="HOW IT WORKS"
          myClass="pb-[65px] max-lg:pb-12 max-md:pb-8"
        />
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="bg-center cursor-pointer xl:ml-1 bg-cover bg-no-repeat bg-how-work-bg max-w-[1064px] max-xl:min-w-0 h-[580px] rounded-3xl relative max-lg:h-[450px] max-md:h-[300px]"
        >
          {playVideo ? (
            <iframe
              src="https://www.youtube.com/embed/Idf0zh9f3qQ?si=wbQcbo7bTsz9faaA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-3xl"
            />
          ) : (
            <div className="w-full max-w-[372px] bg-[#F3B72C] py-[9px] px-[3px] h-[144px] absolute top-[24px] left-[29px] max-lg:max-w-80 max-md:max-w-60 max-md:h-32 max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-2.5">
              <Description
                text="VIDEO CAN BE EXCHANGED FOR CAMPAIGNS."
                myClass="text-center leading-custom-xs !font-bold !font-sans-bold max-md:text-base"
              />
              <Description
                text="-Titel: Name of Campaign"
                myClass="text-center leading-custom-xs !font-bold !font-sans-bold max-md:text-base pt-7 max-lg:pt-3.5 max-md:pt-1.5"
              />
              <Description
                text="-Button: Join the campaign!"
                myClass="text-center leading-custom-xs !font-bold !font-sans-bold max-md:text-base"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
