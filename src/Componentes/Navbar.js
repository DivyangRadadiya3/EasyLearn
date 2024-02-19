import React,{ useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { VscAccount } from "react-icons/vsc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { BsPersonCircle } from "react-icons/bs";

const navigation = [
  { name: "Home", current: true },
  { name: "Tutorials", current: false },
  { name: "AboutUs", current: false },
  { name: "ContactUs", current: false },
  { name: "Dashboard", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeButton, setActiveButton] = useState();

  function pgActive(pageName) {
    setActiveButton(pageName);
  }

  return (
    // <Disclosure
    //   as="nav"
    //   className=""
    // >
    //   {({ open }) => (
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
                        // href={value.href}
                        className={classNames(
                          value.current
                            ? "bg-gray-700 text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "rounded-full px-5 py-2 text-xl  font-normal"
                        )}
                        // aria-current={value.current ? "page" : undefined}
                      >
                        {value.name}
                      </button>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div> 
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
          </div>
        </div>
        <div
          className={
            toggle
              ? "block my-3 bg-gray-200 dark:bg-gray-200 rounded-md shadow-md  w-full lg:hidden"
              : "hidden"
          }
        >
          <div className="space-y-1 px-2 py-3">
            {navigation.map((item, index) => (
              <NavLink to={item.name} key={index}>
                <button
                  key={index}
                  // onClick={() => setToggle(!toggle)}
                  // as="a"
                  // href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-700 text-white"
                      : "text-black hover:bg-gray-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-xl font-normal w-full"
                  )}
                  // aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* <div className={toggle ? "block shadow-lg  w-full lg:hidden" : "hidden"}>
        <div className="space-y-1 px-2 pb-3 pt-2 ">
          {navigation.map((item, index) => (
            <NavLink to={item.name} key={index}>
              <button
                key={index}
                // onClick={() => setToggle(!toggle)}
                // as="a"
                // href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-700 text-white"
                    : "text-black hover:bg-gray-800 hover:text-white",
                  "block rounded-md px-3 py-2 text-xl font-normal w-full"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </button>
            </NavLink>
          ))}
        </div>
      </div> */}
    </>
  );
}
