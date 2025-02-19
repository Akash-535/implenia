"use client";
import React, { useState } from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";

const HowWorks = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="pt-[128px] pb-[144px] bg-custom-white px-4">
      <div className="max-w-[1098px] mx-auto">
        <Heading text="HOW IT WORKS" myClass="pb-16 max-lg:pb-12 max-md:pb-8" />
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="bg-center cursor-pointer bg-cover bg-no-repeat bg-how-work-bg min-w-[1064px] max-xl:min-w-0 h-[580px] rounded-3xl relative"
        >
          {playVideo ? (
            <iframe
              src="https://www.youtube.com/embed/Idf0zh9f3qQ?si=wbQcbo7bTsz9faaA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-3xl"
            />
          ) : (
            <div className="w-full max-w-[372px] bg-[#F3B72C] py-[9px] px-[3px] h-[144px] absolute top-[24px] left-[29px] max-lg:max-w-80 max-md:max-w-60">
              <Description
                text="VIDEO CAN BE EXCHANGED FOR CAMPAIGNS."
                myClass="text-center leading-custom-xs !font-bold !font-sans-bold"
              />
              <Description
                text="-Titel: Name of Campaign"
                myClass="text-center leading-custom-xs !font-bold !font-sans-bold pt-7 max-lg:pt-5 max-md:pt-3.5"
              />
              <Description
                text="-Button: Join the campaign!"
                myClass="text-center leading-custom-xs !font-bold !font-sans-bold"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
