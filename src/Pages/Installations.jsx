import React, { useEffect, useState } from "react";
import download from "../assets/download.png";
import star from "../assets/star.png";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Installations = () => {
  const [instalList, setInstalList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedItem = JSON.parse(localStorage.getItem("applist"));
    if (savedItem) return setInstalList(savedItem);
  }, []);

  const sortedItem = () => {
    if (sortOrder === "lowToHigh") {
      return [...instalList].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "highToLow") {
      return [...instalList].sort((a, b) => b.size - a.size);
    } else {
      return instalList;
    }
  };

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("applist"));
    let upDateList = existingList.filter((p) => p.id !== id);
    setInstalList(upDateList);

    localStorage.setItem("applist", JSON.stringify(upDateList));
    toast.success("This App successfull Unstalled ", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="max-w-[1440px] mx-auto px-2 py-10 md:px-4 lg:px-6 xl:px-8">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-titleColor text-center capitalize mb-4">
          Your Installed Apps
        </h1>
        <p className="text-center text-base md:text-xl text-[#627382] mb-5 md:mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex gap-5 items-center justify-between flex-col sm:flex-row py-10">
        <h3 className="text-2xl font-semibold text-titleColor">{instalList.length} Apps Found</h3>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-200 shadow px-6 py-3"
        >
          <option value="none">Sort By size</option>
          <option value="lowToHigh">Low &gt; High</option>
          <option value="highToLow">High &lt; Low</option>
        </select>
      </div>

      <div>
        {sortedItem().map((p) => (
          <div key={p.id} className="flex items-center justify-between bg-white p-4 rounded-md mb-2 ">
            <div className="flex items-center gap-5">
              <div>
                <img src={p.image} alt="" className="size-20 rounded-sm" />
              </div>
              <div>
                <h2 className="text-xl font-[500] text-titleColor mb-4">{p.title}</h2>
                <p className="flex gap-3">
                  <span className="flex items-center gap-2 text-[#00D390]">
                    <img src={download} alt="" className="size-4" />
                    <span>{p.downloads}</span>
                  </span>
                  <span className="flex items-center gap-2 text-[#FF8811]">
                    <img src={star} alt="" className="size-4" />
                    <span>{p.ratingAvg}</span>
                  </span>
                  <span className="text-[#627382]">{p.size} MB</span>
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(p.id)}
                className="px-4 py-2 bg-[#00D390] text-white rounded-md cursor-pointer"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installations;
