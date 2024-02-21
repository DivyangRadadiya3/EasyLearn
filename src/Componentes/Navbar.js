import React, { useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { VscAccount } from "react-icons/vsc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { BsPersonCircle } from "react-icons/bs";

  const navigation = [
    { name: "Home", id: 1 },
    { name: "Tutorials", id: 2 },
    { name: "AboutUs", id: 3 },
    { name: "ContactUs", id: 4 },
    { name: "Dashboard", id: 5 },
  ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeButton, setActiveButton] = useState(navigation[0].id);

  return (
    <>
      <div className="top-0 sticky z-20 w-auto px-2 sm:px-6 lg:px-8 bg-white shadow-md py-2 border-b-2">
        <div className="relative flex p-2 items-center justify-between">
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
          <div className="flex flex-row float-left pl-2">
            <img className="rounded-full h-12 w-auto" src="icon.png" alt="E" />
            <span className="text-black text-4xl font-light  whitespace-nowrap">
              asyLearn
            </span>
          </div>
          <div className="absolute inset-y-0 right-0 flex pr-2 sm:justify-end sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <div className="flex space-x-4">
                  {navigation.map((value, index) => (
                    <NavLink to={value.name} key={index}>
                      <button
                        key={index}
                        onClick={() => {
                          setActiveButton(value.id);
                        }}
                        className={`${
                          value.id == activeButton
                            ? "bg-gray-700 text-white"
                            : "text-black hover:bg-slate-500 hover:text-white"
                        } rounded-full px-5 py-2 text-xl  font-normal
                        `}
                        // aria-current={value.current ? "page" : undefined}
                      >
                        {value.name}
                      </button>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
