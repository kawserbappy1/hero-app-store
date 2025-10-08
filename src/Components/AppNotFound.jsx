import React from "react";
import appError from "../assets/App-Error.png";
import { Link } from "react-router-dom";

const AppNotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center py-10">
      <img src={appError} alt="" />
      <h2 className="text-2xl md:text-5xl font-bold text-titleColor my-2">OPPS!! APPS NOT FOUND</h2>
      <p className="text-base md:text-xl text-[#627382]">
        The App you are requesting is not found on our system. please try another apps
      </p>
      <Link
        to={"/"}
        className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] px-6 py-3 rounded-md text-white inline-block text-center mt-5"
      >
        Go Back
      </Link>
    </div>
  );
};

export default AppNotFound;
