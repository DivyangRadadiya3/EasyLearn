import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, NavLink } from "react-router-dom";
// import { GoogleAuthProvider } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import { UserAuth } from "../Context/AuthContext";
// import { ref } from "firebase/compat";
// import { BsPhone } from "react-icons/bs";
// import fireDb from "../Firebase";
// import {fireDb, auth} from '../Firebase';
// import { getAuth } from "firebase/auth";
// import Phone from './Phone';

const initialState = {
  email: "",
  password: "",
};

function Login() {
  // const { user } = UserAuth();
  // const id = localStorage.getItem("uid");
  const [state, setState] = useState(initialState);
  const { email, password } = state;
  const navigate = useNavigate();
  const [data, setData] = useState({});

  // useEffect(() => {
  //   firebase.ref("users").on("value", (info) => {
  //     if (info.val() !== null) {
  //       setData({ ...info.val()[id] });
  //     } else {
  //       setData({});
  //     }
  //   });
  // }, [id]);

  // useEffect(() => {
  //   if (id) {
  //     setState({ ...initialState, ...data });
  //   } else {
  //     setState({ ...data });
  //   }
  // }, [id, data]);

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  // function submit() {
  //   if (!email || !password) {
  //     toast.warn("fill up empty field !");
  //   } else {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then(() => {
  //         toast.success("Log In Successfully...");
  //         setTimeout(() => {
  //           navigate("/Home");
  //         }, [3000]);
  //       })
  //       .catch((error) => {
  //         if (error.code === "auth/user-not-found") {
  //           toast.error("Don't have an account !");
  //         } else if (error.code === "wrong-password") {
  //           toast.error("Invalid Password !");
  //         } else {
  //           toast.error(error.message);
  //         }
  //       });
  //     toast.success("Log In Successfully...");
  //   }
  // }

  // async function registerWithGoogle() {
  //   const provider = new GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(() => {
  //       toast.success("Log In Successfully...");
  //       setTimeout(() => {
  //         navigate("/Home");
  //       }, [3000]);
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/user-not-found") {
  //         toast.error("Don't have an account !");
  //       } else {
  //         toast.error(error.message);
  //       }
  //     });
  //   toast.success("Log In Successfully...");
  // }

  return (
    <>
      <div className="h-screen relative pt-16">
        <div className="relative mx-auto shadow-xl bg-indigo-50 rounded-2xl px-4 sm:px-6 py-8 max-w-md text-gray-500 ">
          <div className=" ">
            <div className="font-normal self-center text-3xl uppercas text-black my-3">
              LogIn Your Account
            </div>
            <div className="p-2 mt-10">
              <div className="mb-2 md:mb-4">
                <label className="text-gray-700 text-lg" >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  name="email"
                  value={email || ""}
                  onChange={(e) => handleChange(e)}
                  className="mt-1 block w-full h-full text-sm sm:text-base px-4 py-3 rounded-lg border shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600 peer
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  autoComplete="off"
                />
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Enter a valid email address.
                </p>
              </div>

              <div className="mb-2 md:mb-4">
                <label className="text-gray-700 text-lg">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password || ""}
                  onChange={(e) => handleChange(e)}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600 peer
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  autoComplete="off"
                />
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Enter a strong password.
                </p>
              </div>

              <button
                type="submit"
                // className="flex items-center justify-center h-11  
                // w-full bg-gradient-to-br from-yellow-400 to-yellow-600  rounded-xl shadow-2xl cursor-pointer 
                // overflow-hidden"
                // onClick={() => submit()}
                className="w-full flex items-center justify-center px-4 py-2 text-sm md:text-xl sm:text-base font-medium leading-6 text-gray-600 
                whitespace-no-wrap bg-yellow-300 border border-black rounded-xl shadow-sm hover:bg-green-300 hover:text-black"
              >
                  Log In
              </button>

              <p className="mt-6 text-center">
                Don't have an account?{" "}
                <NavLink to="/Register">
                  <u className="text-blue-500 hover:text-blue-700 font-semibold">
                    Register here
                  </u>
                </NavLink>
              </p>

              <div class="relative my-10 h-px bg-gray-500">
                <div class="absolute left-0 top-0 flex justify-center w-full -mt-3">
                  <p class="bg-indigo-50 px-4 text-md text-black ">
                    Or Login With
                  </p>
                </div>
              </div>

              <button
                className="group h-12 w-full px-6 border-2 border-gray-300 rounded-full transition duration-300 
              hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                // onClick={() => registerWithGoogle()}
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <FcGoogle className="absolute left-0 h-6 w-6" />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Google
                  </span>
                </div>
              </button>

              {/* <button
                className="group h-12 w-full px-6 mt-1 border-2 border-gray-300 rounded-full transition duration-300 
              hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                onClick={<Phone/>}
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <BsPhone className="absolute left-0 h-6 w-6" />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Phone
                  </span>
                </div>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
