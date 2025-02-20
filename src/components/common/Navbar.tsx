"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVBAR_LIST } from "@/utils/helper";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const activeHandler = (index: number) => {
    setActive(active === index ? null : index);
  };
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
            src="/assets/images/logo-icon.webp"
            className="max-lg:size-16 max-sm:size-10"
            alt="logo image"
          />
        </Link>
        <div
          className={`flex gap-9 max-lg:fixed max-lg:top-0 max-lg:flex-col max-lg:justify-center max-lg:w-full z-10 max-lg:items-center max-lg:h-full duration-300 ease-linear ${
            open ? "right-0 bg-black" : "max-lg:-right-full"
          }`}
        >
          {NAVBAR_LIST.map((obj, i) => (
            <div key={i}>
              <Link
                href="#"
                onClick={() => activeHandler(i)}
                className={`max-lg:hidden text-base font-bold font-sans-bold leading-custom-2xl tracking-[0.28px] duration-300 ease-linear hover:text-custom-yellow max-lg:text-white ${
                  active === i && "text-custom-dark-yellow"
                }`}
              >
                {obj}
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(!open)}
                className="lg:hidden text-base font-bold font-sans-bold leading-custom-2xl tracking-[0.28px] duration-300 ease-linear hover:text-custom-yellow max-lg:text-white"
              >
                {obj}
              </Link>
            </div>
          ))}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="z-[15] flex-col gap-1 lg:hidden flex cursor-pointer"
        >
          <span
            className={`w-8 h-1 bg-custom-yellow duration-300  ease-linear rounded ${
              open && "rotate-45 translate-y-3"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-custom-yellow duration-300 ease-linear rounded ${
              open && "-translate-x-10 opacity-0 duration-700"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-custom-yellow duration-300 ease-linear rounded ${
              open && "-rotate-45 -translate-y-1"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
