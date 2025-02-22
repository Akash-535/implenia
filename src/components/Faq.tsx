"use client";
import React, { useState } from "react";
import Heading from "./common/Heading";
import { FAQ_LIST } from "@/utils/helper";
import { FaqIcon } from "@/utils/icons";

const Faq = () => {
  const [open, setOpen] = useState<Number | null>(0);
  const faqHandler = (index: number) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className="pt-[128px] pb-[144px] max-lg:py-28 max-md:py-20 max-sm:py-14 px-4 bg-custom-white">
      <div className="max-w-[1090px] mx-auto">
        <Heading text="FAQs" myClass="max-lg:text-center" />
        <div className="pt-5">
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              className={`border-b py-3.5 border-off-white ${
                i === 0 && "pt-0"
              }`}
            >
              <button
                onClick={() => faqHandler(i)}
                className="w-full justify-between flex items-center text-custom-2xl leading-custom-2xl font-semibold font-sans-semibold text-start gap-1 max-lg:text-xl max-md:text-lg"
              >
                {obj.question}
                <span
                  className={` duration-300 ease-linear ${
                    open === i && "rotate-90"
                  }`}
                >
                  <FaqIcon />
                </span>
              </button>
              <div
                className={`overflow-auto duration-300 ease-linear ${
                  open === i ? "max-h-20" : "max-h-0"
                }`}
              >
                <p className="text-custom-2xl leading-custom-3xl text-custom-black font-light font-sans-light tracking-[-0.28px] max-lg:text-lg">
                  {obj.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
