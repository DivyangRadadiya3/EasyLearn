import React, { useState, useEffect } from "react";
import Login from "../Login";
// import Home from "./Home";
import Register from "../Register";
// // import Html from "./Courses/Html";
import Contact from "../contact/ContactUs";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { NavLink, Route, Routes } from "react-router-dom";
// import { UserAuth } from "../../Context/AuthContext";
import { HiOutlineDocumentText } from "react-icons/hi";
// import { CiFacebook, CiLinkedin, CiInstagram, CiYoutube } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout, AiOutlineQuestionCircle } from "react-icons/ai";
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

const DashboardNavBar = () => {
  // const { user, logOut } = UserAuth();
  const [activeButton, setActiveButton] = useState();
  const navigate = useNavigate();

  function pgActive(pageName) {
    setActiveButton(pageName);
  }

  useEffect(() => {
    setActiveButton("Profile");
  }, []);

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
      <div className="w-full h-full">
        <div className="flex flex-no-wrap">
          <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between flex sm:flex min-height: 716px">
            <div className="relative px-2 z-5 md:fixed w-full md:w-2/12 mt-[85px]  inset-0 border-r-2">
              <ul className="py-4 text-lg" aria-labelledby="dropdown">
              <NavLink to={Profile}>
                <li
                  className={`${
                    activeButton === "Profile"
                      ? "active:bg-[#252525]  active:text-white"
                      : "text-indigo-700"
                  } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-gray-400 hover:text-black`}
                  onClick={() => pgActive("Profile")}
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
                </NavLink>
                <li
                  className={`${
                    activeButton === "Setting"
                      ? "active:bg-[#252525] "
                      : "text-indigo-700"
                  } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-gray-400 hover:text-black `}
                  onClick={() => pgActive("Setting")}
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
                  className={`${
                    activeButton === "Docs"
                      ? "active:bg-[#252525]"
                      : "text-indigo-700"
                  } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-gray-400 hover:text-black `}
                  onClick={() => pgActive("Docs")}
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
                  className={`${
                    activeButton === "Help"
                      ? "active:bg-[#252525]"
                      : "text-indigo-700"
                  } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-gray-400 hover:text-black `}
                  onClick={() => pgActive("Help")}
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
                  className={`${
                    activeButton === "Log Out"
                      ? "active:bg-[#252525]"
                      : "text-indigo-700"
                  } flex items-start rounded-full px-4 py-2 cursor-pointer hover:bg-gray-400 hover:text-black `}
                  onClick={() => [pgActive("Log Out")]}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavBar;
