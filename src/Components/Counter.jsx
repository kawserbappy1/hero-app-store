import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] p-20 px-2 md:px-4 lg:px-6 xl:px-8">
      <h1 className="text-white text-center font-bold text-3xl lg:text-4xl xl:text-5xl">
        Trusted by Millions, Built for You
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        <div className="text-center">
          <p className="text-white opacity-90">Total Downloads</p>
          <h2 className="text-white text-7xl font-bold capitalize leading-[72px] my-4">
            <CountUp end={29.6} decimals={1} suffix=" M" />
          </h2>
          <p className="text-white opacity-90">21% more than last month</p>
        </div>

        <div className="text-center">
          <p className="text-white opacity-90">Total Reviews</p>
          <h2 className="text-white text-7xl font-bold capitalize leading-[72px] my-4">
            <CountUp end={906} suffix=" K" />
          </h2>
          <p className="text-white opacity-90">46% more than last month</p>
        </div>

        <div className="text-center">
          <p className="text-white opacity-90">Active Apps</p>
          <h2 className="text-white text-7xl font-bold capitalize leading-[72px] my-4">
            <CountUp end={132} suffix=" +" />
          </h2>
          <p className="text-white opacity-90">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
