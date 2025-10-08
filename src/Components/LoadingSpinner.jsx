import React from "react";
import logo from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <h1 className="text-3xl sm:text-6xl uppercase tracking-wider font-bold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">
          l
        </h1>
        <img src={logo} alt="" className="size-10 sm:size-15 mx-4 animate-spin" />
        <h1 className="text-3xl sm:text-6xl uppercase tracking-wider font-bold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">
          ading
        </h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
