import { FOOTER_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black pt-[138px] pb-[65px] px-4 max-xl:pt-28 max-lg:pt-20 max-md:py-16">
      <div className="max-w-[1117px] mx-auto flex w-full justify-between max-md:flex-col">
        <div className="max-w-[456px] w-full flex justify-between max-lg:max-w-sm max-md:max-w-none">
          <div className="max-w-[289px]">
            <p className="font-black text-base text-white leading-custom-2xl tracking-[-0.22px] font-sans-black">
              Implenia Innovation Hub
            </p>
            <p className="leading-custom-2xl tracking-[-0.22px] text-white font-sans-regular max-md:text-sm">
              Thurgauerstrasse 101A <br /> 8152 Glattpark (Opfikon)
            </p>
            <Link
              className="leading-custom-2xl tracking-[-0.22px] text-white font-sans-regular max-md:text-sm"
              href={"mailto:innovation@implenia.com"}
            >
              innovation@implenia.com
            </Link>
            <p className="font-black mt-10 max-lg:mt-8 max-md:mt-5 text-base text-white leading-custom-2xl tracking-[-0.22px] font-sans-black">
              Implenia Kickbox
            </p>
            <p className="leading-custom-2xl tracking-[-0.22px] text-white font-sans-regular max-md:text-sm max-md:max-w-[240px]">
              This revised version is based on Adobe Kickbox which is licensed
              under the Creative Commons Attribution License.
            </p>
            <p className="leading-custom-2xl mt-10 max-lg:mt-8 max-md:mt-5 tracking-[-0.22px] text-white font-sans-regular max-md:text-sm">
              Data Protection I Imprint
            </p>
            <p className="leading-[12.57px] mt-[38px] max-lg:mt-8 max-md:mt-4 text-xs tracking-[-0.22px] text-white font-sans-regular max-md:text-sm">
              Copyright © {year} Imlenia. Alle Rechte vorbehalten.
            </p>
          </div>
          <div className="max-w-[77px] flex flex-col">
            <p className="font-black text-base mb-5 text-white leading-custom-2xl tracking-[-0.22px] font-sans-black">
              Sitemap
            </p>
            {FOOTER_LIST.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="leading-custom-2xl font-sans-regular tracking-[-0.22px] text-white max-md:text-sm"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col max-md:mt-12">
          <p className="font-black text-base mb-[19px] text-white leading-custom-2xl tracking-[-0.22px] font-sans-black">
            Contact
          </p>
          <form className="w-[273px]">
            <div className="max-w-[189px]">
              <input
                type="email"
                required
                className="py-[17px] px-[19px] outline-none w-full bg-white"
                placeholder="Ihre E-Mail"
              />
            </div>
            <textarea
              required
              className="w-full resize-none mt-2 outline-none px-[15px] min-h-[121px] py-[18px] bg-white"
              placeholder="Ihre E-Mail"
            ></textarea>
            <div className="w-full justify-end flex">
              <button className="py-[9.5px] px-[21.5px] bg-custom-red text-white font-bold text-sm hover:text-custom-red hover:bg-white duration-300 ease-linear">
                SENDEN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
