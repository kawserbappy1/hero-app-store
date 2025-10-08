import React from "react";
import useLoadApp from "../Hooks/Hooks";
import AppsCard from "./AppsCard";
import { Link } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

const HomeApps = () => {
  const { appData, loading } = useLoadApp();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-[1440px] mx-auto py-10 px-2 md:px-4 lg:px-6 xl:px-8 ">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-titleColor text-center capitalize mb-4">
          Trending Apps
        </h1>
        <p className="text-center text-base md:text-xl text-[#627382] mb-5 md:mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {appData.slice(0, 8).map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to={"/apps"}
          className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] px-6 py-3 rounded-md text-white inline-block text-center mt-10"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default HomeApps;
