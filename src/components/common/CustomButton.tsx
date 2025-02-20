import React from "react";

interface buttonData {
  text?: string;
  myClass?: string;
}
const CustomButton = ({ myClass, text }: buttonData) => {
  return (
    <button
      className={`border-2 rounded-full text-custom-2xl leading-custom-xs duration-300 ease-linear ${myClass}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
