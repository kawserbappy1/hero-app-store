import React from "react";
import { Link } from "react-router";
import error_page from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] text-center px-4">
      <img src={error_page} alt="" />
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">Oops! Page not found.</h2>
      <p className="text-gray-500 mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
      <Link
        to="/"
        className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white px-6 py-3 rounded-md font-medium shadow hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
