"use client";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import KickBox from "@/components/KickBox";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Hero />
      <KickBox />
      <HowWorks />
    </>
  );
}
