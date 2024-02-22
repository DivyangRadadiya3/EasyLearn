import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Langagues = [
  {
    name: "HTML",
    intro:
      "HTML is the Hyper Text Markup Language for the Web. HTML lets you format text, add graphics, create links, input forms, frames and tables, etc., and save it all in a text file that any browser can read and display.",
  },
  {
    name: "CSS",
    intro:
      "HTML is the Hyper Text Markup Language for the Web. HTML lets you format text, add graphics, create links, input forms, frames and tables, etc., and save it all in a text file that any browser can read and display.",
  },
  {
    name: "JAVASCRIPT",
    intro:
      "HTML is the Hyper Text Markup Language for the Web. HTML lets you format text, add graphics, create links, input forms, frames and tables, etc., and save it all in a text file that any browser can read and display.",
  },
  {
    name: "BOOTSTRAP",
    intro:
      "HTML is the Hyper Text Markup Language for the Web. HTML lets you format text, add graphics, create links, input forms, frames and tables, etc., and save it all in a text file that any browser can read and display.",
  },
  {
    name: "REACT",
    intro:
      "HTML is the Hyper Text Markup Language for the Web. HTML lets you format text, add graphics, create links, input forms, frames and tables, etc., and save it all in a text file that any browser can read and display.",
  },
];

function Tutorials() {
  return (
    <>
      <div className="flex flex-wrap justify-around mx-auto mt-10">
        {Langagues.map((value,index) => (
          <NavLink to={value.name} key={index}>
            <div className="p-4  max-w-sm" key={index}>
              <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-600  p-8 flex-col">
                <div className="flex item-center mb-3">
                  <p className="text-white dark:text-teal-400 text-2xl  font-medium">
                    {value.name}
                  </p>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className=" text-lg text-justify text-white dark:text-slate-200">
                    {value.intro}
                  </p>
                  <NavLink to={"/Html/HomePage"}>
                  <p className="mt-3 text-xl font-medium text-black dark:text-white hover:text-yellow-400 inline-flex items-center">
                    Learn More 
                    <div
                      className="w-4 h-4 ml-2"
                    >
                      <MdOutlineKeyboardDoubleArrowRight />
                    </div>
                  </p>
                  </NavLink>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
          
        {/* <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-white dark:text-white text-lg font-medium">
                Feature 2
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias. Rem perspiciatis iure ut laborum inventore
                et maxime amet.
              </p>
              <a
                href="#"
                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-white dark:text-white text-lg font-medium">
                Feature 3
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias. Rem perspiciatis iure ut laborum inventore
                et maxime amet.
              </p>
              <a
                href="#"
                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Tutorials;
