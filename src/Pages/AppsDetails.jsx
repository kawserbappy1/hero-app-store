import React, { useEffect, useState } from "react";
import download from "../assets/download.png";
import star from "../assets/star.png";
import thumb from "../assets/thumb.png";
import useLoadApp from "./../Hooks/Hooks";
import { useParams } from "react-router";
import LoadingSpinner from "./../Components/LoadingSpinner";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppsDetails = () => {
  const { id } = useParams();
  const { appData, loading } = useLoadApp();
  const [installed, setInstalled] = useState(false);

  const findAppdataAppDetails = appData.find((app) => app.id === parseInt(id));
  useEffect(() => {
    if (findAppdataAppDetails) {
      const existingList = JSON.parse(localStorage.getItem("applist")) || [];
      const isInstalled = existingList.some((p) => p.id === findAppdataAppDetails.id);
      setInstalled(isInstalled);
    }
  }, [findAppdataAppDetails]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  const { image, companyName, size, downloads, ratingAvg, reviews, description } = findAppdataAppDetails;

  const handleAddtoInstallationPage = () => {
    const existingList = JSON.parse(localStorage.getItem("applist"));
    let upDateList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === findAppdataAppDetails.id);
      if (isDuplicate) {
        toast.error(" This App already Added to Intallaton page", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setInstalled(true);
        return;
      }
      upDateList = [...existingList, findAppdataAppDetails];
      toast.success("This App successfull added  to the installation page", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      upDateList.push(findAppdataAppDetails);
    }

    localStorage.setItem("applist", JSON.stringify(upDateList));
    setInstalled(true);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-2 py-10 md:px-4 lg:px-6 xl:px-8">
      <div className="flex flex-col md:flex-row gap-4 lg:gap-10  pb-2">
        <div className="max-w-md mx-auto">
          <img src={image} alt="" className="h-full" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-xl font-bold">SmPlan:ToDo List with Reminder</h3>
          <p className="text-xl text-[#627382] my-2">
            Developed by
            <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent ml-1">
              {companyName}
            </span>
          </p>

          <div className="border-b border-b-titleColor/20 my-8 md:my-4 lg:my-8"></div>

          <div className="flex gap-5 items-center justify-center md:gap-8 lg:gap-10  md:justify-start">
            <div>
              <img src={download} alt="" className="size-10" />
              <p className="text-titleColor/90 mt-2">Downloads</p>
              <h3 className="text-[40px] font-extrabold text-titleColor">{downloads}</h3>
            </div>

            <div>
              <img src={star} alt="" className="size-10" />
              <p className="text-titleColor/90 mt-2">Average Ratings</p>
              <h3 className="text-[40px] font-extrabold text-titleColor">{ratingAvg}</h3>
            </div>

            <div>
              <img src={thumb} alt="" className="size-10" />
              <p className="text-titleColor/90 mt-2">Total Reviews</p>
              <h3 className="text-[40px] font-extrabold text-titleColor">{reviews}</h3>
            </div>
          </div>

          <div className="text-center md:text-start">
            <button
              disabled={installed}
              onClick={handleAddtoInstallationPage}
              className={`px-5 py-3 rounded-md mt-7  transition-colors duration-200 ${
                installed ? "bg-gray-400 text-white cursor-not-allowed" : "bg-[#00D390] text-white hover:bg-[#00b87d]"
              }`}
            >
              {installed ? "installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-b-titleColor/20 my-4 md:my-2 lg:my-4"></div>
      {/* Chart here  */}
      <div className="w-full h-[250px] md:h-[300px] lg:h-[350px] p-2 md:p-5 rounded-md mb-10">
        <h3 className="text-lg font-semibold mb-4 text-titleColor">Ratings</h3>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            data={[...findAppdataAppDetails.ratings].sort((a, b) => b.name.split(" ")[0] - a.name.split(" ")[0])}
            margin={{
              top: 20,
              right: 40,
              bottom: 20,
              left: 40,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} />
            <XAxis type="number" />
            <Tooltip />
            <Bar dataKey="count" barSize={25} fill="#FF8811" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="border-b border-b-titleColor/20 mt-5 my-4 md:my-2 lg:my-4"></div>
      {/* product description  */}
      <div className="mt-10">
        <h4 className="text-2xl font-semibold text-titleColor mb-4">Description</h4>
        <p className="text-md md:text-base text-[#627382] leading-[32px]">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppsDetails;
