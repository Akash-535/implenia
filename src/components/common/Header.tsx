"use client";
import React, { useEffect, useState } from "react";
import logoImg from "../../../public/assets/images/logo-icon.webp";
import Link from "next/link";
import Image from "next/image";
import { HEADER_LIST } from "@/utils/helper";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div className="py-[18.5px] px-4 bg-white max-lg:py-4 max-sm:py-3 shadow-header-shadow">
      <div className="max-w-[1177px] mx-auto flex justify-between items-center w-full">
        <Link href="#">
          <Image
            width={93}
            height={93}
            src={logoImg}
            className="pointer-events-none max-lg:size-16 max-sm:size-10"
            alt="logo image"
          />
        </Link>
        <div
          className={`flex gap-9 max-lg:fixed max-lg:top-0 max-lg:flex-col max-lg:justify-center max-lg:w-full z-10 max-lg:items-center max-lg:h-full duration-300 ease-linear ${
            open ? "right-0 bg-yellow-100" : "max-lg:-right-full"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <Link
              href="#"
              key={i}
              className="text-base font-bold font-sans-bold leading-custom-2xl tracking-[0.28px] duration-300 ease-linear hover:text-custom-yellow"
            >
              {obj}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="z-[15] flex-col gap-1 lg:hidden flex cursor-pointer"
        >
          <span
            className={`w-8 h-1 bg-black duration-300 ease-linear rounded ${
              open && "rotate-45 translate-y-3 bg-custom-yellow"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-black duration-300 ease-linear rounded ${
              open && "-translate-x-10 opacity-0 duration-700 bg-custom-yellow"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-black duration-300 ease-linear rounded ${
              open && "-rotate-45 -translate-y-1 bg-custom-yellow"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
