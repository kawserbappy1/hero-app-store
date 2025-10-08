import React, { useState, useEffect } from "react";
import useLoadApp from "../Hooks/Hooks";
import AppsCard from "../Components/AppsCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppNotFound from "../Components/AppNotFound";

const Apps = () => {
  const { appData, loading } = useLoadApp();
  const [isSearch, setIsSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedApps, setSearchedApps] = useState([]);

  useEffect(() => {
    if (!appData.length) return;
    setIsSearching(true);
    const setTimes = setTimeout(() => {
      const searchValidation = isSearch.trim().toLowerCase();
      const filtered = searchValidation
        ? appData.filter((app) => app.title.toLowerCase().includes(searchValidation))
        : appData;
      setSearchedApps(filtered);
      setIsSearching(false);
    }, 200);

    return () => clearTimeout(setTimes);
  }, [isSearch, appData]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative max-w-[1440px] mx-auto py-10 px-2 md:px-4 lg:px-6 xl:px-8">
      {isSearching && (
        <div className="absolute inset-0 flex justify-center items-center bg-white/60  z-10">
          <LoadingSpinner />
        </div>
      )}

      <div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-titleColor text-center capitalize mb-4">
          Our All Applications
        </h1>
        <p className="text-center text-base md:text-xl text-[#627382] mb-5 md:mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 py-5">
        <h3 className="text-2xl font-semibold text-titleColor">({searchedApps.length}) Apps Found</h3>
        <label className="input flex items-center gap-2 border px-3 py-2 rounded-md">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setIsSearch(e.target.value)}
            value={isSearch}
            type="search"
            placeholder="Search"
            className="outline-none flex-1"
            autoFocus
          />
        </label>
      </div>

      {searchedApps.length === 0 && !isSearching ? (
        <AppNotFound></AppNotFound>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
