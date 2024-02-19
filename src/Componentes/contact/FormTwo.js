import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { auth } from "D:/divyang radadiya/desktop/reactcode/EasyLearn/src/Firebase.js";
// import fireDb from "D:/divyang radadiya/desktop/reactcode/EasyLearn/src/Firebase.js";
import { SlLocationPin } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
// import {
//   FaFacebookF,
//   FaBehance,
//   FaDribbble,
//   FaVimeoV,
//   FaInstagram,
//   FaLinkedin,
//   FaPinterestP,
//   FaTwitter,
// } from "react-icons/fa";

const initialState = {
  username: "",
  email: "",
  contact: "",
  msg: "",
};

const FormTwo = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { username, email, contact, msg } = state;
  const emailpatton = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const contpatton = /^[0-9\b]+$/;
  // const lowerCaseLetters = /[a-z]/g;
  // const upperCaseLetters = /[A-Z]/g;
  // const numbers = /[0-9]/g;
  // const spcl = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  async function submit() {
    if (!username || !contact || !email || !msg) {
      toast.warn("Fill up empty field!");
    } else {
      if (!email.match(emailpatton)) {
        toast.warn("Invalid email address!");
      } else {
        if (!contact.match(contpatton)) {
          toast.warn("Enter Only digits!");
        } else {
          if (contact.length !== 10 || contact.length > 10) {
            toast.warn("Mobile number must be 10 digits!!!");
          } else {
            toast.success("Your Message send Successfully...");
            // await createUserWithEmailAndPassword(auth, email, password)
            //   .then((userData) => {
            //     fireDb.child(`User/${userData.user.uid}`).set(state, (err) => {
            //       if (err) {
            //         toast.error(err.message);
            //       } else {
            //         setTimeout(() => {
            //           navigate("/Login");
            //         }, [3000]);
            //       }
            //     });
            //   })
            //   if (!userData.uid) {
            //     fireDb.child("Registration").push(state, (err) => {
            //       if (err) {
            //         toast.error(err.message);
            //       } else {
            //         toast.success("Account Created Successfully...");
            //         setTimeout(() => {
            //           navigate("/Login");
            //         }, [3000]);
            //       }
            //     });
            //   } else {
            //     fireDb
            //       .child(`Registration/${id}`)
            //       .set(state, (err) => {
            //         if (err) {
            //           alert(err);
            //         } else {
            //           alert("Details Updated Successfully !!!");
            //           navigate("/TableData");
            //           fname = "";
            //           email = "";
            //           contact = "";
            //           password = "";
            //         }
            //       });
            //   }
            //   fireDb
            //     .child(`User/${userData.user.uid}`)
            //     .set(state, (err) => {
            //       if (err) {
            //         toast.error(err.message);
            //       } else {
            //         toast.success("Account Created Successfully...");
            //         setTimeout(() => {
            //           navigate("/Login");
            //         }, [3000]);
            //       }
            //     });
            // })
            // .catch((error) => {
            //   toast.error(error.message);
            // });
          }
        }
      }
    }
  }

  return (
    <section className="bg-white py-16 px-8 overflow-hidden ">
      <div className="container">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12 border-r-2 border-yellow-400">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              {/* <span className="block mb-4 text-xl font-semibold text-primary">
                Contact Us
              </span> */}
              <h2 className="mb-6 text-indigo-700 text-[32px] font-normal uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg viewBox="0 0 24 24" className="fill-current w-10 h-10">
                    <SlLocationPin />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-semibold text-dark">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color">
                    Sarthana Jakatnaka, Surat.
                  </p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg viewBox="0 0 24 24" className="fill-current w-10 h-10">
                    <TfiHeadphoneAlt />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-semibold text-dark">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color">
                    (+62)81 414 257 9980
                  </p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    viewBox="0 0 24 24"
                    className="fill-current ml-2 w-10 h-10"
                  >
                    <MdOutlineMailOutline />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-semibold text-dark">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color">
                    easylearn@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  lg:w-11/12 xl:w-5/12">
            <div className="relative container m-auto text-gray-500 pr-12">
              <div className="shadow-xl max-w-[570px] bg-gray-300 rounded-2xl mb-10 md:mb-10 lg:mb-10 lg:xl-10 p-4 m-auto width: 100%">
                <div className="py-3">
                  <div className="">
                    <label
                      className="text-lg text-black"
                      htmlFor="form1Example13"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Divyang Radadiya"
                      name="username"
                      value={username || ""}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      className="text-lg text-black"
                      htmlFor="form1Example13"
                    >
                      Phone number
                    </label>
                    <input
                      type="number"
                      placeholder="1234567890"
                      name="contact"
                      value={contact || ""}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600 peer
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Enter only digit.
                    </p>
                  </div>

                  <div className="">
                    <label
                      className="text-lg text-black"
                      htmlFor="form1Example13"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      name="email"
                      value={email || ""}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600 peer
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Enter a valid email address.
                    </p>
                  </div>

                  <div className="">
                    <label for="message" class="text-lg text-black">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="2"
                      name="msg"
                      value={msg || ""}
                      onChange={(e) => handleChange(e)}
                      className="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="flex items-center justify-center h-11  
                w-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl cursor-pointer 
                overflow-hidden mt-5"
                    onClick={() => submit()}
                  >
                    <span className="block w-max text-white font-normal tracking-wide text-sm md:text-xl sm:text-base ">
                      Submit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4">
        <div className="py-2 border-t-2 border-gray-700"></div>
        <div className="text-center text-[32px] text-green-800 font-normal">Our Social Media Links</div>
        <div class="flex flex-wrap justify-evenly gap-2 my-10">
          <button class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              class="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          <button class="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              class="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>

          {/* <button class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              class="w-5 h-5 fill-current"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
          </button> */}

          {/* np */}

          <button class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              class="w-5 h-5 fill-current"
              role="img"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
              </g>
            </svg>
          </button>

          <button class="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              class="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </button>

          <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </button>

          <button class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FormTwo;
