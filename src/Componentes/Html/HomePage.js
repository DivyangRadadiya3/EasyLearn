import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="h-screen py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-6 my-20 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <div className="px-4 mb-20 text-center">
            <h2 className="text-2xl font-normal uppercase text-gray-800 md:text-4xl dark:text-teal-200">
              Let's start learn of html language with step by step
            </h2>
          </div>
          <div className="justify-center px-4 py-4 mx-auto lg:py-0">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-5 md:grid-cols-3">
              <div
                class="inline-flex rounded-md shadow-sm text-nowrap"
                role="group"
              >
                <NavLink to={"/Html/Page1"}>
                  <button
                    type="button"
                    className="px-4 py-2 text-2xl font-normal text-gray-900 bg-transparent border-r border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    <span
                      data-te-stepper-head-icon-ref
                      className="my-4 mr-2 w-10 h-10 items-center justify-center text-3xl font-medium text-yellow-400"
                    >
                      1
                    </span>
                    Introduction of HTML
                  </button>
                </NavLink>
                <NavLink to={"/Html/Page2"}>
                  <button
                    type="button"
                    className="px-4 py-2 text-2xl font-normal text-gray-900 bg-transparent border-r border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    <span
                      data-te-stepper-head-icon-ref
                      className="my-4 mr-2 w-10 h-10 items-center justify-center text-3xl font-medium text-yellow-400"
                    >
                      2
                    </span>
                    Description of HTML Example
                  </button>
                </NavLink>
                <NavLink to={"/Html/Page3"}>
                  <button
                    type="button"
                    className="px-4 py-2  text-2xl font-normal text-gray-900 bg-transparent border-r border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    <span
                      data-te-stepper-head-icon-ref
                      className="my-4 mr-2 w-10 h-10 items-center justify-center text-3xl font-medium text-yellow-400"
                    >
                      3
                    </span>
                    Featuers of HTML
                  </button>
                </NavLink>
                <NavLink to={"/Html/Page4"}>
                  <button
                    type="button"
                    className="px-4 py-2  text-2xl font-normal text-gray-900 bg-transparent border-r border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    <span
                      data-te-stepper-head-icon-ref
                      className="my-4 mr-2 w-10 h-10 items-center justify-center text-3xl font-medium text-yellow-400"
                    >
                      4
                    </span>
                    Text editors of HTML
                  </button>
                </NavLink>
                <button
                  type="button"
                  className="px-4 py-2 rounded-r-lg text-2xl font-normal text-yellow-400 bg-transparent  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-yellow-400 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  Solve Task
                </button>
              </div>

              {/* <ul
              data-te-stepper-init
              className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
            >
              <li
                data-te-stepper-step-ref
                data-te-stepper-step-active
                className="w-auto flex-auto"
              >
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center px-4 leading-6 rounded-full no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-['']  focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="my-6 mr-2 flex w-10 h-10 items-center justify-center rounded-full text-2xl font-medium text-white bg-slate-500"
                  >
                    1
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="font-normal text-2xl text-black dark:text-neutral-300 hover:text-yellow-700 dark:hover:text-yellow-500"
                  >
                    Introduction of HTML
                  </span>
                </div>
              </li>

              <li data-te-stepper-step-ref className="w-auto flex-auto">
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center px-4 leading-6 rounded-full no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-['']  focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="my-6 mr-2 flex w-10 h-10 items-center justify-center rounded-full text-2xl font-medium text-white bg-slate-500"
                  >
                    2
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="font-normal text-2xl text-black dark:text-neutral-300 hover:text-yellow-700 dark:hover:text-yellow-500"
                  >
                    Description of HTML Example
                  </span>
                </div>
              </li>

              <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                  >
                    3
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                  >
                    step3
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref
                  className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </div>
              </li>
            </ul> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
