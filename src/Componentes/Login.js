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
      <section className="h-full relative pt-10 ">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 ">
          <div className="shadow-xl bg-indigo-50 rounded-2xl p-4 m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 ">
            <div className="font-normal text-center text-3xl text-black my-3 ">
              Log In
            </div>
            <div className="p-2 py-2">
              <div>
                <label className="text-lg text-black" htmlFor="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  name="email"
                  value={email || ""}
                  onChange={(e) => handleChange(e)}
                  className="mt-1 block w-full px-2 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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

              <div className="">
                <label className="text-lg text-black" htmlFor="form1Example13">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password || ""}
                  onChange={(e) => handleChange(e)}
                  className="mt-1 block w-full px-2 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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
                className="flex items-center justify-center h-11  
                w-full bg-gradient-to-br from-yellow-400 to-yellow-600  rounded-full shadow-2xl cursor-pointer 
                overflow-hidden"
                // onClick={() => submit()}
              >
                <span
                  className="block w-max text-white hover: font-normal z-10 pointer-events-none 
                hover:z-20 tracking-wide text-sm md:text-xl sm:text-base "
                >
                  Sign In
                </span>
              </button>

              <p className="mt-6 text-center">
                Don't have an account?{" "}
                <NavLink to="/Register">
                  <u className="text-blue-500 hover:text-blue-700 font-semibold">
                    Register here
                  </u>
                </NavLink>
              </p>

              {/* <p class="mb-0 mt-2 pt-2 text-base font-medium text-center">
                Don't have an account?{" "}
                <NavLink to="/Register">
                  <u className="text-blue-500 hover:text-blue-700 font-semibold">
                    Register here
                  </u>
                </NavLink>
              </p> */}

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
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
      </section>
    </>
  );
}

export default Login;
