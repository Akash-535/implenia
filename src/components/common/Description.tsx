import React from "react";

interface descriptionData {
  text?: string;
  myClass?: string;
}
const Description = ({ text, myClass }: descriptionData) => {
  return (
    <p
      className={`text-custom-2xl leading-custom-3xl text-custom-black tracking-[-0.28px] font-light font-sans-light max-md:text-lg ${myClass}`}
    >
      {text}
    </p>
  );
};

export default Description;
