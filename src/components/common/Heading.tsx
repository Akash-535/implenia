import React from "react";
interface headingData {
  text?: string;
  myClass?: string;
}
const Heading = ({ text, myClass }: headingData) => {
  return (
    <h2
      className={`text-custom-5xl leading-custom-2xl text-custom-black tracking-[-0.66px] font-bold font-sans-bold max-lg:text-4xl max-md:text-3xl ${myClass}`}
    >
      {" "}
      {text}
    </h2>
  );
};

export default Heading;
