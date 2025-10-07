import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { VscGithub } from "react-icons/vsc";
import { CgMenuGridO } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <nav className="max-w-[1440px] mx-auto px-2 flex items-center justify-between h-16 md:px-4 lg:px-6 xl:px-8">
        {/* logo here  */}
        <Link to={"/"} className="flex items-center gap-1">
          <img src={logo} alt="" className="size-10" />
          <h1 className="uppercase font-bold leading-[26px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">
            HERO.IO
          </h1>
        </Link>

        {/* Destop menu here  */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[#9F62F2] decoration-2 underline-offset-4 font-semibold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                    : "font-[600] leading-[24.32px] text-black/90 hover:text-[#632EE3]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/apps"}
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[#9F62F2] decoration-2 underline-offset-4 font-semibold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                    : "font-[600] leading-[24.32px] text-black/90 hover:text-[#632EE3]"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/installation"}
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[#9F62F2] decoration-2 underline-offset-4 font-semibold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                    : "font-[600] leading-[24.32px] text-black/90 hover:text-[#632EE3]"
                }
              >
                Installations
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navigation Button  */}
        <div className="hidden md:flex">
          <Link
            to={"https://github.com/kawserbappy1"}
            target="_blank"
            className="flex items-center gap-2 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] px-4 py-3 rounded-md text-white"
          >
            <VscGithub className="text-white" />
            <span>Contribute</span>
          </Link>
        </div>

        {/* Mobile Menu Icon  */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] p-3 text-2xl text-white cursor-pointer z-20"
        >
          {isOpen ? <RiCloseLine /> : <CgMenuGridO />}
        </div>
      </nav>

      {/* Mobile Device menu */}
      <div
        className={`md:hidden absolute top-0  w-full bg-[#f5f5f5] min-h-screen transition-all duration-500 ${
          isOpen ? "left-0" : "-left-[100%]"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-4 py-20">
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-[#9F62F2] decoration-2 underline-offset-4 font-semibold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                  : "font-[600] leading-[24.32px] text-black/90 hover:text-[#632EE3]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to={"/apps"}
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-[#9F62F2] decoration-2 underline-offset-4 font-semibold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                  : "font-[600] leading-[24.32px] text-black/90 hover:text-[#632EE3]"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to={"/installation"}
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-[#9F62F2] decoration-2 underline-offset-4 font-semibold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                  : "font-[600] leading-[24.32px] text-black/90 hover:text-[#632EE3]"
              }
            >
              Installations
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
