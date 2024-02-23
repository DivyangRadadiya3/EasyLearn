import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { UserAuth } from "../UserAuth/AuthContext";
// import { UserAuth } from "D:/divyang radadiya/desktop/reactcode/EasyLearn/src/Context/AuthContext.js";
import {
  HiOutlineMail,
  HiOutlineDocumentText,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import { CiFacebook, CiLinkedin, CiInstagram, CiYoutube } from "react-icons/ci";
import { FiEdit3, FiSettings, FiX } from "react-icons/fi";
// import { AiOutlineLogout, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPersonCircle, BsPen, BsList } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  website: "",
  age: "21 to 25",
  sector: "Chemical",
  organization: [],
  destination: "",
  city: "",
  country: "India",
  hobbies: "",
  language: "",
  photoURL:
    "https://th.bing.com/th?id=OIP.FTgrJyVFtgBnlReUwwkLSgHaHS&w=252&h=247&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
};

const Profilecard = () => {
  // const { user, logOut } = UserAuth();
  const [toggle, setToggle] = useState(false);
  const [comp, setComp] = useState(false);
  const [state, setState] = useState(initialState);
  const [activeButton, setActiveButton] = useState();
  const {
    username,
    website,
    organization,
    destination,
    city,
    hobbies,
    language,
    photoURL,
    age,
  } = state;

  const [Company, setCompany] = useState([
    "CodexByte",
    "D_Code",
    "Infosys",
    "Techno",
    "Tata Consultancy service",
    "HCL Technologies",
  ]);
  const [selectedItems, setSelected] = useState([]);
  const [trainer, setTrainer] = useState("hidden");
  const [data, setData] = useState({});
  const imgs = [
    "https://th.bing.com/th?id=OIP.FTgrJyVFtgBnlReUwwkLSgHaHS&w=252&h=247&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.inXSw5jbycIIlXC1dIXdiwHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://th.bing.com/th/id/OIP.53tpipDfpRLX8XWq8Z-egQHaHZ?w=200&h=199&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.BAdrtOmCjHMDXWlyWKB3YAHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.B42mmL001bNfILjXjuoAyQHaHx?w=190&h=199&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.mrfb_atnkblnmsDiAbLNKwHaHa?w=198&h=199&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.ez7RzHW97bgoNBngoVliLgHaHX?w=206&h=205&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.t0A5oxtEOEuCVNzO5XDiXgHaHa?w=212&h=212&c=7&r=0&o=5&pid=1.7",
  ];
  const navigate = useNavigate();
  // console.log(state);

  // useEffect(() => {
  //   fireDb.child("User").on("value", (info) => {
  //     if (info.val() !== null) {
  //       setData({ ...info.val()[user.uid] });
  //     } else {
  //       setData({});
  //     }
  //   });
  // }, [user.uid]);

  // useEffect(() => {
  //   if (user.uid) {
  //     setState({ ...initialState, ...data });
  //   } else {
  //     setState({ ...data });
  //   }
  // }, [user.uid, data]);

  // useEffect(() => {
  //   setState({ ...state, organization: selectedItems });
  // }, [selectedItems]);

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function Add(value) {
    setSelected(selectedItems.concat(value));
    setCompany(Company.filter((id) => id !== value));
    setComp(!comp);
  }

  function Remove(value) {
    setSelected(selectedItems.filter((id) => id !== value));
    setCompany(Company.concat(value));
  }

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

  function save() {
    if (!website || !organization || !destination || !city || !hobbies) {
      toast.warn("Fill up empty field!");
    } else {
      // fireDb.child(`User/${user.uid}`).set(state, (err) => {
      //   if (err) {
      //     toast.error(err.message);
      //   } else {
      //     toast.success("Details upload Successfully...");
      //   }
      // });
      toast.warn("Fill up empty field!");
    }
  }

  return (
    <>
        <div className="flex">
          <div className="relative bg-white shadow-xl rounded-3xl w-4/12 mx-3 p-3 px-6">
            <div className="relative">
              <img
                className="h-40 w-40 rounded-full border mx-auto"
                src={photoURL || imgs[0]}
                alt="Profile"
              />

              <label className="absolute text-3xl bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex mt-10">
                  <button
                    type="button"
                    className="h-14 flex md:h-10 text-sm md:text-2xl font-base px-3 text-black"
                    onClick={() => setToggle(!toggle)}
                  >
                    <FiEdit3 />
                    <span className="text-lg">Edit</span>
                  </button>
                </div>
              </label>
            </div>
            <div
              className={`${
                toggle ? "block" : "hidden"
              } fixed inset-0  bg-gray-300 bg-opacity-50 z-20 overflow-y-auto h-full w-full `}
            >
              <div className="relative top-20 left-3 sm:left-1/4 md:left-1/4 p-4 border w-fit shadow-lg rounded-xl bg-white">
                <div className="top-10">
                  <button
                    type="button"
                    className="h-14 flex md:h-10 text-sm md:text-2xl space-x-4 font-base px-3 text-black"
                    onClick={() => setToggle(!toggle)}
                  >
                    <BiArrowBack />
                    <p className="text-xl">Back</p>
                  </button>
                </div>
                <div className="bg-white grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 md:gap-3 text-sm">
                  {imgs.map((photo) => {
                    return (
                      <div className="hover:cursor-pointer">
                        <img
                          className="h-28 w-28 rounded-full"
                          src={photo || imgs[0]}
                          alt="Profile"
                          onClick={() =>
                            setState({ ...state, photoURL: photo })
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <h1 className="text-gray-900 text-center font-semibold text-xl my-1">
              {username}
            </h1>

            <div className="flex justify-center mt-4">
              <HiOutlineMail className="h-8 w-6 mr-3" />
            </div>
            <div className="flex justify-center mb-5 text-lg text-muted whitespace-nowrap ">
              {data.email}
            </div>

            <h3 className="text-gray-900 text-center  text-lg font-medium mb-5">
              Social Media Links
            </h3>
            <ul className="space-y-4">
              <li className="flex h-10 sm:h-10 justify-between w-full bg-gray-200 rounded-full">
                <div className="rounded-full p-1 bg-yellow-300 ">
                  <svg
                    className="h-9 sm:h-11 md:h-11 md:pl-2 sm:pl-2  sm:text-lg text-2xl text-black"
                    viewBox="0 0 24 24"
                  >
                    <CiFacebook />
                  </svg>
                </div>
                <div className="pt-1 text-lg font-normal">divyang</div>
                <div className="pr-1">
                  <svg
                    className="h-14 md:h-10 text-sm md:text-2xl px-3 py-3 text-green-900"
                    viewBox="0 0 24 24"
                  >
                    <BsPen />
                  </svg>
                </div>
              </li>
              <li className="flex h-10 sm:h-10 justify-between w-full bg-gray-200 rounded-full">
                <div className="rounded-full p-1 bg-yellow-300 ">
                  <svg
                    className="h-9 sm:h-11 md:h-11 md:pl-2 sm:pl-2  sm:text-lg text-2xl text-black"
                    viewBox="0 0 24 24"
                  >
                    <CiLinkedin />
                  </svg>
                </div>
                <div className="pt-1 text-lg font-normal">divyang</div>
                <div className="pr-1">
                  <svg
                    className="h-14 md:h-10 text-sm md:text-2xl px-3 py-3 text-green-900"
                    viewBox="0 0 24 24"
                  >
                    <BsPen />
                  </svg>
                </div>
              </li>
              <li className="flex h-10 sm:h-10 justify-between w-full bg-gray-200 rounded-full">
                <div className="rounded-full p-1 bg-yellow-300 ">
                  <svg
                    className="h-9 sm:h-11 md:h-11 md:pl-2 sm:pl-2 sm:text-lg text-2xl text-black"
                    viewBox="0 0 24 24"
                  >
                    <CiInstagram />
                  </svg>
                </div>
                <div className="pt-1 text-lg font-normal">divyang</div>
                <div className="pr-1">
                  <svg
                    className="h-14 md:h-10 text-sm md:text-2xl px-3 py-3 text-green-900"
                    viewBox="0 0 24 24"
                  >
                    <BsPen />
                  </svg>
                </div>
              </li>
              <li className="flex h-10 sm:h-10 justify-between w-full bg-gray-200 rounded-full">
                <div className="rounded-full p-1 bg-yellow-300 ">
                  <svg
                    className="h-9 sm:h-11 md:h-11 md:pl-2 sm:pl-2  sm:text-lg text-2xl text-black"
                    viewBox="0 0 24 24"
                  >
                    <CiYoutube />
                  </svg>
                </div>
                <div className="pt-1 text-lg font-normal">divyang</div>
                <div className="pr-1">
                  <svg
                    className="h-14 md:h-10 text-sm md:text-2xl px-3 py-3
                    text-green-900"
                    viewBox="0 0 24 24"
                  >
                    <BsPen />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-9/12 sm:9/12 p-2 w-8/12 mr-3 pl-5 h-fit shadow-xl bg-white rounded-3xl">
            <div className="p-3">
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <label
                      className="text-base text-black"
                      htmlFor="form1Example13"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      name="username"
                      value={username}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label
                      className="text-base text-black"
                      htmlFor="form1Example13"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      placeholder="Enter the name of your website/url"
                      name="website"
                      value={website || ""}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label
                      className="text-base text-black"
                      htmlFor="form1Example13"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      placeholder="Choose your age"
                      name="age"
                      value={age || ""}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label
                      className="text-base text-black"
                      htmlFor="form1Example13"
                    >
                      Industry/Sector
                    </label>
                    <select
                      className="mt-1 block w-full px-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-[38px]"
                      name="sector"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="Chemical">Chemical</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Auto Mobile">Auto Mobile</option>
                    </select>
                  </div>

                  <div className="relative ">
                    <label
                      className="text-base text-black"
                      htmlFor="form1Example13"
                    >
                      Organization
                    </label>
                    <div
                      className="flex h-[38px] mt-1 w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                    >
                      <div
                        class="flex flex-auto flex-wrap cursor-pointer overflow-y-scroll"
                        onClick={() => setComp(!comp)}
                      >
                        {selectedItems.lengh === 0
                          ? null
                          : selectedItems
                              .filter(
                                (val, id, array) => array.indexOf(val) === id
                              )
                              .map((value) => {
                                return (
                                  <div class="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                                    <div class="text-xs font-normal leading-none max-w-full flex-initial">
                                      {value}
                                    </div>
                                    <div class="flex items-center flex-row-reverse">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="feather feather-x text-xl  cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                                        onClick={() => Remove(value)}
                                      >
                                        <FiX />
                                      </svg>
                                    </div>
                                  </div>
                                );
                              })}
                      </div>
                    </div>
                    <div
                      className={`${
                        comp ? "block" : "hidden"
                      } absolute shadow bg-white z-20 w-full rounded max-h-select overflow-y-auto`}
                    >
                      {Company.length === 0 ? (
                        <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                          <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                            <div className="w-full items-center flex">
                              <div className="mx-2 py-1"> None </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        Company.map((value) => {
                          return (
                            <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                              <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                <div
                                  className="w-full items-center flex"
                                  onClick={() => Add(value)}
                                >
                                  <div className="mx-2 py-1"> {value} </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-base text-black"
                      htmlFor="form1Example13"
                    >
                      Destination/Role
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Destination/Role"
                      name="destination"
                      value={destination || ""}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label
                      className="text-base text-black"
                      htmlFor="form1Example13"
                    >
                      Town/City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter the name of the town/city you currently reside in"
                      name="city"
                      value={city || ""}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label
                      className="text-base text-black"
                      htmlFor="form1Example13"
                    >
                      Country
                    </label>
                    <select
                      className="mt-1 block w-full px-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-[38px]"
                      name="country"
                      // value={country || ""}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="India">India</option>
                      <option value="Australiya">Australiya</option>
                      <option value="United State">United State</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <label
                  className="text-base text-black"
                  htmlFor="form1Example13"
                >
                  Areas of interest & hobbies
                </label>
                <div className="w-full">
                  <div className="min-w-[200px]">
                    <textarea
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-16 resize-none border-blue-gray-200 font-normal "
                      placeholder="Write a brief description in 40-50 words"
                      name="hobbies"
                      value={hobbies || ""}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="w-full mt-6 border-t-2 border-purple-900 border-dashed"></div>

              <div className="my-2 ">
                <label
                  className="text-base text-black"
                  htmlFor="form1Example13"
                >
                  Are you a Trainer? If yes,you may wish to complete this
                  section & create a brief profile you can share with
                  participants.Alternatively,upload an existing profie here
                  using the upload button below
                </label>
                <div className="my-4 bg-white shadow rounded-lg p-3  flex ">
                  <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="yes"
                      onClick={() => setTrainer("block")}
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="inlineRadio1"
                    >
                      Yes
                    </label>
                  </div>

                  <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 "
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="no"
                      onClick={() => setTrainer("hidden")}
                      defaultChecked
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="inlineRadio2"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={`${trainer} bg-white grid grid-cols-2 p-3 shadow rounded-xl`}
              >
                <div>
                  <label
                    className="text-base text-black"
                    htmlFor="form1Example13"
                  >
                    Which language you can teach?
                  </label>
                  <input
                    type="text"
                    placeholder="Enter language"
                    name="language"
                    value={language || ""}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-700 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 
              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full px-16 py-2.5 text-center m-3"
                onClick={() => save()}
              >
                <span className="tracking-widest text-base">Save</span>
              </button>

              {/* {user ? (
                    <NavLink to="/">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-700 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 
              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full px-16 py-2.5 text-center m-3"
                        onClick={() => signout()}
                      >
                        Log out
                      </button>
                    </NavLink>
                  ) : (
                    <NavLink to="/">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-700 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 
              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full px-16 py-2.5 text-center m-3"
                      >
                        Log in
                      </button>
                    </NavLink>
                  )} */}
            </div>
          </div>
        </div>
    </>
  );
};

export default Profilecard;
