import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black":"#1D1D1B",
        "custom-yellow":"#FEBE32",
        "custom-red":"#FF132D",
        "custom-white":'#F5F5F5',
        "custom-blue":"#009FE3",
        "custom-gray":"#8F9090",
        "custom-dark-yellow":"#EBA82C",
        "off-white":"#9DA1A2"
      },
      fontSize:{
        "custom-2xl":"21px",
        "custom-5xl":"49px",
        "custom-7xl":"76px",
        "custom-8xl":"80px"
      },
      lineHeight:{
        "custom-xs":"100%",
        "custom-sm":"105%",
        "custom-2xl":"125%",
        "custom-3xl":"127%"
      }
    },
    fontFamily:{
      "sans-bold":"source-sans-bold , sans-sarif",
      "sans-light":"source-sans-light ,sans-sarif",
      "sans-regular":"source-sans-regular , sans-sarif",
      "sans-semibold":"source-sans-semibold , sans-sarif",
      "sans-black":"source-sans-black , sans-sarif"      
    },
    backgroundImage:{
      "hero-bg":"url('/assets/images/hero-bg.webp')",
      "how-work-bg":"url('/assets/images/how-work-img.webp')"
    },
    boxShadow:{
     'header-shadow':"0px 4px 8px 0px #00000040",
     'card-shadow':"0px 10px 80px 0px #00000840"
    },
  },
  plugins: [],
} satisfies Config;
