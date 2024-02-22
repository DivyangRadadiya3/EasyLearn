import React, { useState, useEffect } from "react";
// import Login from "../Login";
// import Home from "./Home";
// import Register from "../Register";
// // import Html from "./Courses/Html";
// import Contact from "../contact/ContactUs";
// import Profile from "../Dashboard/Profile";
// import { useNavigate } from "react-router-dom";
// import { NavLink, Route, Routes } from "react-router-dom";
// import { UserAuth } from "../../Context/AuthContext";
import { HiOutlineDocumentText } from "react-icons/hi";
// import { CiFacebook, CiLinkedin, CiInstagram, CiYoutube } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout, AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
// import { BiArrowBack } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const initialState = {
//   website: "",
//   age: "21 to 25",
//   sector: "Chemical",
//   organization: [],
//   destination: "",
//   city: "",
//   country: "India",
//   hobbies: "",
//   language: "",
//   photoURL:
//     "https://th.bing.com/th?id=OIP.FTgrJyVFtgBnlReUwwkLSgHaHS&w=252&h=247&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
// };

const DashboardNavBar = ({ setActivePage, activePage }) => {
  
  const [toggle, setToggle] = useState(false);


  // async function signout() {
  //   try {
  //     await logOut()
  //       .then(() => {
  //         toast.success("Log out Successfully...");
  //       })
  //       .then(() => {
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         const errorMessage = error.message;
  //         toast.error(errorMessage);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center sm:block md:block lg:hidden xl:hidden 2xl:hidden">
        {/* Mobile menu button*/}
        <button
          type="button"
          onClick={() => setToggle(!toggle)}
          className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-slate-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          {toggle ? (
            <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="relative px-2  md:fixed w-full md:w-2/12 mt-[85px]  inset-0 border-r-2">
        <ul className="py-4 text-lg" aria-labelledby="dropdown">
          <li
            onClick={() => {
              setActivePage(1);
            }}
            className={`${
              activePage === 1
                ? "active:bg-[#252525]  active:text-white"
                : "text-indigo-700"
            } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-slate-500 hover:text-white`}
          >
            <svg
              viewBox="0 0 24 24"
              className=" h-11 w-16 md:h-8 md:w-7 text-xl block md:pt-1 py-2 pl-3 pr-4
                    rounded md:bg-transparent peer-active: md:text-blue-700 md:p-0"
            >
              <BsPersonCircle />
            </svg>{" "}
            Profile
          </li>
          <li
            onClick={() => {
              setActivePage(2);
            }}
            className={`${
              activePage === 2 ? "active:bg-[#252525] " : "text-indigo-700"
            } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-slate-500 hover:text-white `}
          >
            <svg
              viewBox="0 0 24 24"
              className=" h-11 w-16 md:h-8 md:w-7 text-xl block md:pt-1 py-2 pl-3 pr-4
                    rounded md:bg-transparent peer-active: md:text-blue-700 md:p-0"
            >
              <FiSettings />
            </svg>
            Setting
          </li>
          <li
            onClick={() => {
              setActivePage(3);
            }}
            className={`${
              activePage === 3 ? "active:bg-[#252525]" : "text-indigo-700"
            } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-slate-500 hover:text-white `}
          >
            <svg
              viewBox="0 0 24 24"
              className=" h-11 w-16 md:h-8 md:w-7 text-xl block md:pt-1 py-2 pl-3 pr-4
                    rounded md:bg-transparent peer-active: md:text-blue-700 md:p-0"
            >
              <HiOutlineDocumentText />
            </svg>
            Docs
          </li>
          <li
            onClick={() => {
              setActivePage(4);
            }}
            className={`${
              activePage === 4 ? "active:bg-[#252525]" : "text-indigo-700"
            } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-slate-500 hover:text-white `}
          >
            <svg
              viewBox="0 0 24 24"
              className=" h-11 w-16 md:h-8 md:w-7 text-xl block md:pt-1 py-2 pl-3 pr-4
                    rounded md:bg-transparent peer-active: md:text-blue-700 md:p-0"
            >
              <AiOutlineQuestionCircle />
            </svg>
            Help
          </li>
          <li
            onClick={() => {
              setActivePage(5);
            }}
            className={`${
              activePage === 5 ? "active:bg-[#252525]" : "text-indigo-700"
            } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-slate-500 hover:text-white `}
          >
            <svg
              viewBox="0 0 24 24"
              className=" h-11 w-16 md:h-8 md:w-7 text-xl block md:pt-1 py-2 pl-3 pr-4
                    rounded md:bg-transparent peer-active: md:text-blue-700 md:p-0"
            >
              <AiOutlineLogout />
            </svg>
            Log Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardNavBar;
