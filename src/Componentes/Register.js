import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const initialState = {
  username: "",
  email: "",
  contact: "",
  password: "",
};

function Register() {
  const navigate = useNavigate();
  const emailpatton = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const contpatton = /^[0-9\b]+$/;
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const spcl = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const [state, setState] = useState(initialState);
  const { username, email, contact, password } = state;
  const [data, setData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  // useEffect(() => {
  //   if (!user.uid) {
  //     toast.warn("Your account not created so please register !!!");
  //     setState({ ...data });
  //   } else {
  //     setState({ ...initialState, ...data });
  //   }
  // }, [user.uid, data]);

  // const submit = async () => {
  //   if (!username || !contact || !email || !password) {
  //     toast.warn("Fill up empty field!");
  //   } else {
  //     if (!email.match(emailpatton)) {
  //       toast.warn("Invalid email address!");
  //     } else {
  //       if (!password.match(spcl)) {
  //         toast.warn("Must Include Symbol in Password!");
  //       } else {
  //         if (!password.match(numbers)) {
  //           toast.warn("Must Include digit in Password!");
  //         } else {
  //           if (!password.match(upperCaseLetters)) {
  //             toast.warn("Must Include upperCase Letters in Password!");
  //           } else {
  //             if (!password.match(lowerCaseLetters)) {
  //               toast.warn("Must Include lowerCase Letters in Password!");
  //             } else {
  //               createUserWithEmailAndPassword(auth, email, password)
  //                 .then((userData) => {
  //                   fireDb
  //                     .child("users/" + userData.user.uid)
  //                     .set(state, (err) => {
  //                       if (err) {
  //                         toast.error(err.message);
  //                       } else {
  //                         toast.success("Registration Successfully...");
  //                         setTimeout(() => {
  //                           navigate("/Home");
  //                         }, [3000]);
  //                       }
  //                     });
  //                   console.log(userData);
  //                 })
  //                 .catch((error) => {
  //                   console.log(error);
  //                 });
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // };

  return (
    <>
      <section className="h-full relative pt-9 ">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 ">
          <div className="shadow-xl bg-indigo-50 rounded-2xl mb-10 md:mb-10 lg:mb-10 lg:xl-10 p-4 m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 ">
            <div className="font-normal text-center text-3xl text-black my-3 ">
              Registration
            </div>
            <div className="p-2 py-2">
              <div>
                <label className="text-lg text-black">Full name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  value={username || ""}
                  onChange={(e) => handleChange(e)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div className="mt-5">
                <label className="text-lg text-black">Phone number</label>
                <input
                  type="number"
                  placeholder="Contact Number"
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
                <label className="text-lg text-black">Email address</label>
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
                <label className="text-lg text-black">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password || ""}
                  onChange={(e) => handleChange(e)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600 peer
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Enter a strong password.
                </p>
              </div>

              <button
                type="button"
                className="flex items-center justify-center h-11 bg-yellow-400 hover:bg-yellow-600 font-bold py-2 px-4 rounded-full
                w-full shadow-2xl cursor-pointer 
                overflow-hidden"
                // onClick={() => submit()}
              >
                <span className="block w-max text-white font-normal tracking-wide text-sm md:text-xl sm:text-base ">
                  Register
                </span>
              </button>

              <p class="mt-6 text-center">
                Already have an account?{" "}
                <NavLink to="/Login">
                  <u className="text-blue-500 hover:text-blue-700 font-semibold">
                    Login here
                  </u>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
