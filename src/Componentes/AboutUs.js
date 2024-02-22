import React, { useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { GiAlarmClock } from "react-icons/gi";
import { PiHandsPrayingFill } from "react-icons/pi";
import {
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleUp,
} from "react-icons/hi2";

function AboutUs() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 mx-auto lg:mb-0 ">
              <div className="px-4 pl-4 mb-6">
                <p className="my-2 text-7xl font-normal text-lime-500 dark:text-teal-300">
                  About Us
                </p>
                <div className=" mt-20 inline-flex px-4 pl-4 mb-6">
                  <span className="text-orange-300 dark:text-orange-300">
                    <svg className="w-14 h-14" viewBox="0 0 16 16">
                      <PiHandsPrayingFill />
                    </svg>
                  </span>
                  <p className="w-auto text-3xl font-normal px-5 md:text-5xl dark:text-white">
                    Welcome to our site
                  </p>
                  <span className="text-orange-300 dark:text-orange-300">
                    <svg className="w-14 h-14" viewBox="0 0 16 16">
                      <PiHandsPrayingFill />
                    </svg>
                  </span>
                </div>
                <p className="px-4 mb-8 text-3xl font-light text-center leading-10 text-gray-800 dark:text-slate-300">
                  we strive to help our community with that same integrity and
                  passion. Our focus is to improve the way our content is
                  published and distributed. Our goal is to become even more
                  efficient and user-friendly for our ever-growing community of
                  eLearning members and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-36 h-1 my-6 overflow-hidden bg-emerald-200 rounded-lg"></div>
        <div className="max-w-6xl py-10 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <div className="px-4 pl-4 mb-6">
            <h2 className="pb-2 text-2xl font-normal uppercase text-slate-800 md:text-4xl dark:text-slate-300">
              Who we are ?
            </h2>
          </div>
          <p className="px-4 p-4 mb-14 text-3xl text-light text-justify font-light leading-10 text-gray-800 dark:text-slate-300">
            we strive to help our community with that same integrity and
            passion. Our focus is to improve the way our content is published
            and distributed. Our goal is to become even more efficient and
            user-friendly for our ever-growing community of eLearning members
            and partners.
          </p>
          <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 ">
                <span className="text-blue-500 dark:text-blue-400">
                  <svg className="w-10 h-10" viewBox="0 0 16 16">
                    <GrDocumentText />
                  </svg>
                </span>
                <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-yellow-400">
                  01
                </p>
                <h2 className="text-2xl text-gray-700 dark:text-slate-200">
                  Project and Plan
                </h2>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg  shadow-md">
                <span className="text-blue-500 dark:text-blue-400">
                  <svg className="w-10 h-10" viewBox="0 0 16 16">
                    <GoPeople />
                  </svg>
                </span>
                <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-yellow-400">
                  3,590
                </p>
                <h2 className="text-2xl text-gray-700 dark:text-slate-200">
                  Helped people
                </h2>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg  shadow-md">
                <span className="text-blue-500 dark:text-blue-400">
                  <svg className="w-10 h-10" viewBox="0 0 16 16">
                    <RxPerson />
                  </svg>
                </span>
                <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-yellow-400">
                  74
                </p>
                <h2 className="text-2xl text-gray-700 dark:text-slate-200">
                  Volunteer
                </h2>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg  shadow-md">
                <span className="text-blue-500 dark:text-blue-400">
                  <svg className="w-10 h-10" viewBox="0 0 16 16">
                    <GiAlarmClock />
                  </svg>
                </span>
                <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-yellow-400">
                  100
                </p>
                <h2 className="text-2xl text-gray-700 dark:text-slate-200">
                  Timing
                </h2>
              </div>
            </div>
            {/* <a
              href="#"
              className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 "
            >
              Learn more
            </a> */}
          </div>
        </div>
        <div className="max-w-6xl py-10 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <div className="px-4 mb-10 md:text-center">
            <h2 className=" text-2xl font-normal uppercase text-gray-800 md:text-4xl dark:text-gray-300">
              What we do ?
            </h2>
            {/* <div className="flex-1 h-2 mt-1 mb-6 overflow-hidden rounded bg-blue-200"></div> */}
            {/* <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            </div> */}
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10  lg:mb-0 ">
              <p className="mb-4 text-4xl font-normal text-slate-800 dark:text-slate-300">
                We are providing a better facility
              </p>
              <p className="px-4 p-4 text-3xl text-justify font-light leading-10 mb-4 text-gray-500 dark:text-slate-500">
                The EasyLearn website comes in a number of editions, designed to
                assist with the creation of learning communities by offering
                various opportunities for collaboration and interaction through
                an icon-based user interface. The platform offers tools for
                content creation, test building, assignments management,
                reporting, internal messaging, forum, chat, surveys, calendar
                and others.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-lg text-gray-600 dark:text-gray-300">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <div className="bg-gray-400 rounded-full h-5 w-5 text-black text-xs text-center">
                      <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                  </span>
                  Increase access to learning opportunities/increase
                  flexibility.
                </li>
                <li className="flex items-center mb-4 text-lg text-slate-600 dark:text-slate-300">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <div className="bg-gray-400  rounded-full h-5 w-5 text-black  text-xs text-center">
                      <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                  </span>
                  Enhance the general quality of teaching/learning.
                </li>
                <li className="flex items-center mb-4 text-lg text-slate-600 dark:text-slate-300">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <div className="bg-gray-400  rounded-full h-5 w-5 text-black  text-xs text-center">
                      <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                  </span>
                  Support Team
                </li>
                <li className="flex items-center mb-4 text-lg text-slate-600 dark:text-slate-300">
                  <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                    <div className="bg-gray-400  rounded-full h-5 w-5 text-black  text-xs text-center">
                      <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                  </span>
                  Successful Growth for career.
                </li>
              </ul>
              {/* <a
                href="#"
                className="px-4 py-2 text-black bg-blue-500 rounded-md dark:bg-gray-400  dark:hover:bg-slate-300 hover:bg-slate-600"
              >
                Learn more
              </a> */}
            </div>
            <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
              <img
                src="i6.png"
                alt=""
                className="relative z-1 object-cover w-full rounded-md md:h-96 h-44"
              />
              <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex">
                <svg
                  width="290"
                  height="166"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl py-6 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <div className="px-4 mb-10 text-center">
            <h2 className="text-2xl font-normal uppercase text-gray-800 md:text-4xl dark:text-gray-300">
              Why choose us ?
            </h2>
          </div>
          {/* <div className="flex flex-wrap items-center"> */}
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <p className="mb-4 text-4xl font-normal text-slate-800 dark:text-slate-300">
              We are providing a better facility
            </p>
            <p className="px-4 p-4 text-3xl text-justify font-light leading-10 mb-4 text-gray-500 dark:text-slate-500">
              Develop the skills and competencies needed, and also ensure that
              learners have the digital literacy skills required in their
              discipline, profession or career – or, put simply, to get work in
              the future.
            </p>
            <ul className="mb-10">
              <li className="flex items-center mb-4 text-lg text-slate-500 dark:text-slate-300">
                <span className="mr-3 text-gray-500 dark:text-gray-400 ">
                  <div className="bg-gray-400 rounded-full h-6 w-6 text-black  text-sm text-center">
                    <i className="fa-solid fa-1 p-1"></i>
                  </div>
                </span>
                solve interesting-challenging tasks and learn some new.
              </li>
            </ul>
            {/* <a
              href="#"
              className="px-4 py-2 text-black bg-blue-500 rounded-md dark:bg-gray-400  dark:hover:bg-slate-300 hover:bg-slate-600"
            >
              Learn more
            </a> */}
          </div>
          {/* <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8"> */}
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <img
                src="i6.png"
                alt=""
                className="object-cover w-full mb-6 rounded-lg h-80"
              />
              <img
                src="i7.png"
                alt=""
                className="object-cover w-full rounded-lg h-80"
              />
            </div>
            <div className="w-full px-4 md:w-1/2 xl:mt-11">
              <img
                src="i5.png"
                alt=""
                className="object-cover w-full mb-6 rounded-lg h-80"
              />
              <img
                src="i4.png"
                alt=""
                className="object-cover w-full rounded-lg h-80"
              />
            </div>
          </div>
        </div>
        <div className="mx-36 h-1 my-6 overflow-hidden bg-emerald-300 rounded-lg"></div>
        <div className="max-w-6xl py-6 my-20 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <div className="px-4 mb-10 text-center">
            <h2 className="text-2xl font-normal uppercase text-gray-800 md:text-4xl dark:text-gray-300">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col mx-auto justify-between max-w-3xl px-6 py-4 mb-4 bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between ">
              <span className="font-normal text-2xl text-black dark:text-white">
                What is Components ? How does it help us ?
              </span>
              <button
                type="button"
                onClick={() => setToggle(!toggle)}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-[#56574e] dark:text-[#56574e]  hover:cursor-pointer"
              >
                <svg className="w-6 h-6" viewBox="0 0 16 16">
                  {toggle ? (
                    <HiOutlineChevronDoubleUp />
                  ) : (
                    <HiOutlineChevronDoubleDown />
                  )}
                </svg>
              </button>
            </div>
            <div
              className={
                toggle
                  ? "block border-t border-black mt-3 pt-3 text-xl text-justify font-normal leading-7 mb-4  text-gray-900 dark:text-slate-500"
                  : "hidden"
              }
            >
              Components are pre made web structures which are used for making a
              website faster and easier. It is a sort of a boilerplate code
              which gives you an option to modify it however you want
            </div>
          </div>
        </div>
        <div className="mx-36 h-1 my-6 overflow-hidden bg-emerald-300 rounded-lg"></div>
        <div className="max-w-6xl py-6 my-20 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <div className="px-4 mb-10 text-center">
            <h2 className="text-2xl font-normal uppercase text-gray-800 md:text-4xl dark:text-gray-300">
              our team
            </h2>
          </div>
          <div className="justify-center px-4 py-4 mx-auto lg:py-0">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:grid-cols-2">
              <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                <a href="#" className="">
                  <img
                    src="i2.png"
                    alt=""
                    className="object-cover w-full h-64 rounded-t-lg"
                  />
                </a>
                <div className="p-5">
                  <a href="#" className="">
                    <h2 className="mb-2 text-2xl font-normal tracking-tight text-lime-700 dark:text-lime-700">
                      CEO & CTO
                    </h2>
                  </a>
                  <p className="mb-3 font-medium text-gray-700 dark:text-gray-300">
                    There are some dummy text which helps to write message for
                    the receivers.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center ">
                      <img
                        src="i2.png"
                        alt=""
                        className="object-cover object-right w-8 h-8 rounded-full"
                      />
                      <div className="ml-2">
                        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                          DIVYANG RADADIYA
                        </h2>
                        <span className="text-lg text-gray-700 dark:text-gray-300">
                          Web developer
                        </span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="px-3 py-2 text-base text-black bg-white border-2 border-lime-400 rounded-full dark:hover:bg-lime-400 hover:text-black  hover:bg-lime-400"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                <a href="#" className="">
                  <img
                    src="i2.png"
                    alt=""
                    className="object-cover w-full h-64 rounded-t-lg"
                  />
                </a>
                <div className="p-5">
                  <a href="#" className="">
                    <h2 className="mb-2 text-2xl font-normal tracking-tight text-lime-700 dark:text-lime-700">
                      CEO & CTO
                    </h2>
                  </a>
                  <p className="mb-3 font-medium text-gray-700 dark:text-gray-300">
                    There are some dummy text which helps to write message for
                    the receivers.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center ">
                      <img
                        src="i10.png"
                        alt=""
                        className="object-cover object-right w-8 h-8 rounded-full"
                      />
                      <div className="ml-2">
                        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                          SAHIL RAJAPARA
                        </h2>
                        <span className="text-lg text-gray-700 dark:text-gray-300">
                          Web developer
                        </span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="px-3 py-2 text-base text-black bg-white border-2 border-lime-400 rounded-full dark:hover:bg-lime-400 hover:text-black  hover:bg-lime-400"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="h-auto items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 "> */}
        {/* <div className="px-4 py-10 mb-6 md:text-center ">
          <p className="pb-2 text-xl font-normal uppercase text-gray-800 md:text-4xl dark:text-gray-300">
            our team
          </p>
        </div> */}
        {/* <div className="flex justify-around max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
              <a href="#" className="">
                <img
                  src="i2.png"
                  alt=""
                  className="object-cover w-full h-64 rounded-t-lg"
                />
              </a>
              <div className="p-5">
                <a href="#" className="">
                  <h2 className="mb-2 text-2xl font-normal tracking-tight text-gray-700 dark:text-gray-300">
                    CEO & CTO
                  </h2>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                  There are some dummy text which helps to write message for the
                  receivers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <img
                      src="i2.png"
                      alt=""
                      className="object-cover object-right w-8 h-8 rounded-full"
                    />
                    <div className="ml-2">
                      <h2 className="text-lg font-seminormal text-gray-700 dark:text-gray-300">
                        DIVYANG RADADIYA
                      </h2>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        Web developer
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="px-3 py-2 text-xs text-black bg-white rounded-full dark:hover:bg-slate-300 hover:text-black  hover:bg-slate-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
              <a href="#" className="">
                <img
                  src="i2.png"
                  alt=""
                  className="object-cover w-full h-64 rounded-t-lg"
                />
              </a>
              <div className="p-5">
                <a href="#" className="">
                  <h2 className="mb-2 text-xl font-normal tracking-tight text-gray-700 dark:text-gray-300">
                    CEO & CTO
                  </h2>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                  There are some dummy text which helps to write message for the
                  receivers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <img
                      src="i10.png"
                      alt=""
                      className="object-cover object-right w-8 h-8 rounded-full"
                    />
                    <div className="ml-2">
                      <h2 className="text-lg font-normal text-gray-700 dark:text-gray-300">
                        SAHIL RAJAPARA
                      </h2>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        Web developer
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="px-3 py-2 text-xs text-black bg-white rounded-full hover:bg-slate-400 hover:text-black"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </section> */}
      {/*<section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:mx-auto lg:mb-0 ">
              <div className="mx-auto lg:max-w-md">
                <div className=" px-4 pl-4 mb-6 border-l-4 border-slate-300">
                  <span className="text-xl text-gray-600 uppercase dark:text-slate-300">
                    Who we are?
                  </span>
                  <h1 className="mt-2 text-3xl font-medium text-gray-700 md:text-5xl dark:text-teal-300">
                    About Us
                  </h1>
                </div>
                <p className="px-4 mb-10 text-xl text-justify leading-7 text-gray-500 dark:text-slate-300">
                  we strive to help our community with that same integrity and
                  passion. Our focus is to improve the way our content is
                  published and distributed. Our goal is to become even more
                  efficient and user-friendly for our ever-growing community of
                  eLearning members and partners.
                </p>
                <div className="flex flex-row mx-auto">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl">
                      <span className="text-blue-500 dark:text-blue-400">
                      <svg
                          className="w-10 h-10"
                          viewBox="0 0 16 16"
                        >
                          <GrDocumentText />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-yellow-400">
                        01
                      </p>
                      <h2 className="text-lg text-gray-700 dark:text-slate-200">
                        Project and Plan
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl">
                      <span className="text-blue-500 dark:text-blue-400">
                      <svg
                          className="w-10 h-10"
                          viewBox="0 0 16 16"
                        >
                          <GoPeople/>
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-yellow-400">
                        3,590
                      </p>
                      <h2 className="text-lg text-gray-700 dark:text-slate-200">
                        Helped people
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl">
                      <span className="text-blue-500 dark:text-blue-400">
                      <svg
                          className="w-10 h-10"
                          viewBox="0 0 16 16"
                        >
                          <RxPerson />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-yellow-400">
                        74
                      </p>
                      <h2 className="text-lg text-gray-700 dark:text-slate-200">
                        Volunteer
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl">
                      <span className="text-blue-500 dark:text-blue-400">
                      <svg
                          className="w-10 h-10"
                          viewBox="0 0 16 16"
                        >
                          <GiAlarmClock />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-yellow-400">
                        100
                      </p>
                      <h2 className="text-lg text-gray-700 dark:text-slate-200">
                        Timing
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="i1.png"
                alt=""
                className="relative object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-900 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <img
                  src="i2.png"
                  alt=""
                  className="relative z-1 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                />
                <div className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-14 h-14 bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="relative">
                <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                  About Us
                </h1>
                <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                  Welcome to our site
                </h1>
              </div>
              <p className="mt-6 mb-10 font-normal text-2xl leading-7 text-gray-500 dark:text-gray-300">
                The main objectives of selecting a course to build own best
                career. We can provide platform that build user career best in
                "IT" field. Learn some new language-related information and
                build some new language-related code. We're firm believers in
                the power of Learning and Development and the power of sharing.
              </p>
              <a
                href="#"
                className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 "
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center bg-stone-100 lg:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              What we do
            </h2>
            <div className="flex-1 h-2 mt-1 mb-6 overflow-hidden rounded bg-blue-200"></div>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                We are providing a better facility
              </h2>
              <p className="mb-4 text-lg leading-7 text-gray-500 dark:text-gray-300">
                The EasyLearn website comes in a number of editions, designed to
                assist with the creation of learning communities by offering
                various opportunities for collaboration and interaction through
                an icon-based user interface. The platform offers tools for
                content creation, test building, assignments management,
                reporting, internal messaging, forum, chat, surveys, calendar
                and others.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-lg text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <div className="bg-blue-400 rounded-full h-5 w-5 text-black  text-xs text-center">
                      <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                  </span>
                  Increase access to learning opportunities/increase
                  flexibility.
                </li>
                <li className="flex items-center mb-4 text-lg text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <div className="bg-blue-400 rounded-full h-5 w-5 text-black  text-xs text-center">
                      <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                  </span>
                  Enhance the general quality of teaching/learning.
                </li>
                <li className="flex items-center mb-4 text-lg text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <div className="bg-blue-400 rounded-full h-5 w-5 text-black  text-xs text-center">
                      <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                  </span>
                  Support Team
                </li>
                <li className="flex items-center mb-4 text-lg text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                    <div className="bg-blue-400 rounded-full h-5 w-5 text-black  text-xs text-center">
                      <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                  </span>
                  Successful Growth for career.
                </li>
              </ul>
              <a
                href="#"
                className="px-4 py-2 text-gray-100 bg-blue-500 rounded-3xl dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600"
              >
                Learn more
              </a>
            </div>
            <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
              <img
                src="i6.png"
                alt=""
                className="relative z-1 object-cover w-full rounded-3xl md:h-96 h-44"
              />
              <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex">
                <svg
                  width="290"
                  height="166"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center py-20 bg-gray-100 font-poppins dark:bg-gray-900 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <img
                    src="i6.png"
                    alt=""
                    className="object-cover w-full mb-6 rounded-lg h-80"
                  />
                  <img
                    src="i7.png"
                    alt=""
                    className="object-cover w-full rounded-lg h-80"
                  />
                </div>
                <div className="w-full px-4 md:w-1/2 xl:mt-11">
                  <img
                    src="i5.png"
                    alt=""
                    className="object-cover w-full mb-6 rounded-lg h-80"
                  />
                  <img
                    src="i4.png"
                    alt=""
                    className="object-cover w-full rounded-lg h-80"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
              <span className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                Why choose us
              </span>
              <h2 className="mt-2 mb-4 text-2xl font-normal text-gray-700 dark:text-gray-300">
                We are providing a better facility
              </h2>
              <p className="mb-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
                Develop the skills and competencies needed, and also ensure that
                learners have the digital literacy skills required in their
                discipline, profession or career – or, put simply, to get work
                in the future.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-lg text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                    <div className="bg-blue-400 rounded-full h-6 w-6 text-black  text-sm text-center">
                      <i className="fa-solid fa-1 p-1"></i>
                    </div>
                  </span>
                  solve interesting-challenging tasks and learn some new.
                </li>
              </ul>
              <a
                href="#"
                className="px-4 py-2 text-gray-100 bg-blue-500 rounded-3xl dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center bg-gray-100 xl:h-screen dark:bg-gray-800">
        <div className="p-4 mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h1 className="mb-4 text-3xl font-bold dark:text-white">
              {" "}
              Frequently Asked Questions{" "}
            </h1>
            <p className="max-w-xl mx-auto text-gray-500">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae
              quam nostrum harum non in at eaque quibusdam eum ratione.
            </p>
          </div>
          <div className="max-w-xl">
            <div className="flex flex-col justify-between w-full px-6 py-4 mb-4 bg-white rounded shadow dark:bg-gray-700">
              <div className="flex items-center justify-between ">
                <span className="font-bold dark:text-white">
                  {" "}
                  What is Components ? How does it help us?{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-blue-500 dark:text-blue-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full px-6 py-4 mb-4 bg-white rounded shadow dark:bg-gray-700">
              <div className="flex items-center justify-between">
                <span className="font-bold text-blue-500 dark:text-blue-400">
                  {" "}
                  What is Components ? How does it help us?{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-blue-500 rotate-180 dark:text-blue-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                Components are pre made web structures which are used for making
                a website faster and easier. It is a sort of a boilerplate code
                which gives you an option to modify it however you want
              </div>
            </div>
            <div className="flex flex-col justify-between w-full px-6 py-4 mb-4 bg-white rounded shadow dark:bg-gray-700">
              <div className="flex items-center justify-between ">
                <span className="font-bold dark:text-white">
                  {" "}
                  What is Components ? How does it help us?{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-blue-500 dark:text-blue-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full px-6 py-4 mb-4 bg-white rounded shadow dark:bg-gray-700">
              <div className="flex items-center justify-between ">
                <span className="font-bold dark:text-white">
                  {" "}
                  What is Components ? How does it help us?{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-blue-500 dark:text-blue-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 ">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
              <a href="#" className="">
                <img
                  src="i2.png"
                  alt=""
                  className="object-cover w-full h-64 rounded-t-lg"
                />
              </a>
              <div className="p-5">
                <a href="#" className="">
                  <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                    Lorem ipsum dor ismudsa suditdsas
                  </h2>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  There are some dummy text which helps to write message for the
                  receivers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <img
                      src="i2.png"
                      alt=""
                      className="object-cover object-right w-8 h-8 rounded-full"
                    />
                    <div className="ml-2">
                      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                        David beckham
                      </h2>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        Node developer
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="px-3 py-2 text-xs text-black bg-white rounded-fblack:bg-white dark:hover:bg-blue-600 hover:bg-blue-600 hover:text-gray-100"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
              <a href="#" className="">
                <img
                  src="i8.png"
                  alt=""
                  className="object-cover w-full h-64 rounded-t-lg"
                />
              </a>
              <div className="p-5">
                <a href="#" className="">
                  <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                    Lorem ipsum dor ismudsa suditdsas
                  </h2>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  There are some dummy text which helps to write message for the
                  receivers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <img
                      src="i8.png"
                      alt=""
                      className="object-cover object-right w-8 h-8 rounded-full"
                    />
                    <div className="ml-2">
                      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                        David beckham
                      </h2>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        Node developer
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="px-3 py-2 text-xs text-gray-200 bg-blue-700 rounded-full hover:bg-blue-600 hover:text-gray-100"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
              <a href="#" className="">
                <img
                  src="i10.png"
                  alt=""
                  className="object-cover w-full h-64 rounded-t-lg"
                />
              </a>
              <div className="p-5">
                <a href="#" className="">
                  <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                    Lorem ipsum dor ismudsa suditdsas
                  </h2>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  There are some dummy text which helps to write message for the
                  receivers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <img
                      src="i10.png"
                      alt=""
                      className="object-cover object-right w-8 h-8 rounded-full"
                    />
                    <div className="ml-2">
                      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                        David beckham
                      </h2>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        Node developer
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="px-3 py-2 text-xs text-gray-200 bg-blue-700 rounded-full hover:bg-blue-600 hover:text-gray-100"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default AboutUs;
