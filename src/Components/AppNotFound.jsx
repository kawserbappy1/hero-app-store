import React from "react";
import appError from "../assets/App-Error.png";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <img src={appError} alt="" />

      <Link
        to={"/apps"}
        className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] px-6 py-3 rounded-md text-white inline-block text-center mt-5"
      >
        Show All Apps
      </Link>
    </div>
  );
};

export default AppNotFound;
