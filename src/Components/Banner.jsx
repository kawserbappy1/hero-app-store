import React from "react";
import googlePlay from "../assets/googlePlay.png";
import apple from "../assets/apple.png";
import hero from "../assets/hero.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="px-2 pt-10 md:pt-16 lg:pt-20">
      <h1 className="capitalize text-4xl font-bold leading-[40px] sm:leading-[58px] md:leading-[68px] lg:leading-[84px] text-center sm:text-5xl md:text-6xl lg:text-7xl">
        we Build <br />{" "}
        <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">
          productive
        </span>{" "}
        apps
      </h1>
      <p className="max-w-5xl mx-auto text-base md:text-[20px] leading-[24px] md:leading-[32px] text-textColor text-center mt-4">
        AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal
        is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex items-center justify-center gap-2 md:gap-5 py-10">
        <Link
          to={"https://play.google.com/store/apps?hl=en"}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border border-gray-200 text-sm md:text-base rounded-sm shadow-sm"
        >
          <img src={googlePlay} alt="" className="size-5 md:size-8" /> Google Play
        </Link>
        <Link
          to={"https://www.apple.com/app-store/"}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border border-gray-200 text-sm md:text-base rounded-sm shadow-sm"
        >
          <img src={apple} alt="" className="size-5 md:size-8" /> App Store
        </Link>
      </div>
      <div className="max-w-sm md:max-w-md mx-auto">
        <img src={hero} alt="" className=" w-full object-cover" />
      </div>
    </div>
  );
};

export default Banner;
