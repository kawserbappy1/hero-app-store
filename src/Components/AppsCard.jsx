import React from "react";
import { Link } from "react-router";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";

const AppsCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <div className="p-4 bg-white rounded-sm">
      <Link to={`/app-details/${id}`} className="flex flex-col">
        <div className=" bg-[#d9d9d9] flex-1">
          <img src={image} alt={title} className="size-60 w-full " />
        </div>
        <h2 className="text-lg font-[500] capitalize text-titleColor py-4 flex-1">{title}</h2>
        <div className="flex items-center justify-between">
          <button className="bg-[#F1F5E8] text-[#00D390] px-[10px] py-[6px] flex items-center gap-2 rounded-sm">
            <LiaDownloadSolid />
            {downloads}
          </button>
          <button className="bg-[#FFF0E1] text-[#FF8811] px-[10px] py-[6px] flex items-center gap-2 rounded-sm">
            <FaStar />
            {ratingAvg}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default AppsCard;
