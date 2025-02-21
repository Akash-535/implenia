import Image from "next/image";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  // State for back-to-top
  const [scrollTop, setScrollToTop] = useState(false);
  // Smooth scroll to top
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Update state if scrolled past 500px
  const setHendler = () => {
    setScrollToTop(window.scrollY > 500);
  };
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", setHendler);
  }, []);

  return (
    <>
      {scrollTop && (
        <button
          onClick={scrollHandler}
          className="fixed right-2.5 bottom-2.5 animate-bounce z-40 cursor-pointer"
        >
          <Image
            width={48}
            height={48}
            className="max-xl:size-8 pointer-events-none"
            src="/assets/images/back-to-top.webp"
            alt="back to top"
          />
        </button>
      )}
    </>
  );
};
export default BackToTop;
