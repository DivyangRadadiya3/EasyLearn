import React, { useState, createContext, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import Axios from "axios";
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

  const submit = async () => {
    if (!username || !contact || !email || !password) {
      toast.warn("Fill up empty field!");
    } else {
      if (!email.match(emailpatton)) {
        toast.warn("Invalid email address!");
      } else {
        if (!password.match(spcl)) {
          toast.warn("Must Include Symbol in Password!");
        } else {
          if (!password.match(numbers)) {
            toast.warn("Must Include digit in Password!");
          } else {
            if (!password.match(upperCaseLetters)) {
              toast.warn("Must Include upperCase Letters in Password!");
            } else {
              if (!password.match(lowerCaseLetters)) {
                toast.warn("Must Include lowerCase Letters in Password!");
              } else {
                // createUserWithEmailAndPassword(auth, email, password)
                //   .then((userData) => {
                // fireDb
                //   .child("users/" + userData.user.uid)
                //   .set(state, (err) => {
                //     if (err) {
                //       toast.error(err.message);
                //     } else {
                //       toast.success("Registration Successfully...");
                //       setTimeout(() => {
                //         navigate("/Home");
                //       }, [3000]);
                //     }
                //   });

                // })
                // try {
                //   const request = Axios.post(
                //     "mongodb://localhost:27017/User",state
                //   );
                //   fetch('mongodb://localhost:27017/User').then((res) => {
                //     if (res.status === 200) {
                //       return res.json();
                //     } else {
                //       console.log("not work");
                //     }
                //   });
                // } catch {
                //   console.log("not work");
                // }

                // .catch((error) => {
                //   console.log(error);
                // });

                // const postURL = "mongodb://localhost:27017/";
                const postURL = "http://localhost:3000/Register";
                console.log("start call api");
                const res = await fetch(postURL, {
                  method: "POST",
                  body: state,
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                });
                // .then((response) => {
                //   response.text()
                //   console.log(response);
                // })
                // .then((data) => {
                //   console.log(data);
                // });
                // console.log(state);
                const data = await res.text();
                console.log(data);

                // fetch(postURL)
                //   .then((response) => {
                //     if (response.status === 200) {
                //       console.log("SUCCESSS");
                //       return response.json();
                //     } else if (response.status === 408) {
                //       console.log("SOMETHING WENT WRONG");
                //     }
                //   })
                //   .then((data) => {
                //     this.setState({
                //       isLoading: false,
                //       downlines: data.response,
                //     });
                //     console.log("DATA STORED");
                //   })
                //   .catch((error) => {
                //     console.log({ error }); //Our previously set up route in the backend
                //   });
                console.log("end call api"); //Our previously set up route in the backend
                // fetch(postURL, {
                //   method: "POST",
                //   headers: {
                //     Accept: "application/json",
                //     "Content-Type": "application/json",
                //   },
                //   body:
                //     // We should keep the fields consistent for managing this data later
                //     state,
                // }).then(() => {
                //   // Once posted, the user will be notified
                //   alert("You have been added to the system!");
                // });
              }
            }
          }
        }
      }
    }
  };

  return (
    <>
      <div className="h-full relative pt-9">
        {/* <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 "> */}
        <div
          className="shadow-xl bg-indigo-50 rounded-2xl mb-10 lg:xl-10 p-4 m-auto px-4 sm:px-6 
            py-8 max-w-lg relative text-gray-500"
        >
          <div className="font-normal self-center text-3xl text-black my-3">
            Create Your Account
          </div>
          <div className="p-2 mt-10">
            <div className="mb-2 md:mb-4">
              <label className="text-lg text-black">Full name</label>
              <input
                type="text"
                placeholder="Name"
                name="username"
                value={username || ""}
                onChange={(e) => handleChange(e)}
                className="mt-1 block w-full h-full text-sm sm:text-base px-4 py-3 rounded-lg border shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div className="mb-2 md:mb-4">
              <label className="text-lg text-black">Phone number</label>
              <input
                type="number"
                placeholder="Contact Number"
                name="contact"
                value={contact || ""}
                onChange={(e) => handleChange(e)}
                className="mt-1 block w-full h-full text-sm sm:text-base px-4 py-3 rounded-lg border shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600 peer
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Enter only digit.
              </p>
            </div>

            <div className="mb-2 md:mb-4">
              <label className="text-lg text-black">Email address</label>
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
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Enter a valid email address.
              </p>
            </div>

            <div className="mb-2 md:mb-4">
              <label className="text-lg text-black">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password || ""}
                onChange={(e) => handleChange(e)}
                className="mt-1 block w-full h-full text-sm sm:text-base px-4 py-3 rounded-lg border shadow-sm placeholder-slate-400
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
              className="flex items-center justify-center h-11 font-normal tracking-wide text-2xl md:text-2xl sm:text-xl 
              text-gray-600 bg-yellow-400 hover:bg-yellow-500 hover:text-white py-2 px-4 rounded-full w-full shadow-2xl cursor-pointer 
                overflow-hidden"
              onClick={() => submit()}
            >
              {/* <span className="block w-max text-white font-normal tracking-wide text-sm md:text-xl sm:text-base "> */}
              Register
              {/* </span> */}
            </button>

            <p className="mt-6 text-center text-slate-800">
              Already have an account?{" "}
              <NavLink to="/Login">
                <u className="text-blue-500 hover:text-blue-700 font-semibold">
                  Login here
                </u>
              </NavLink>
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Register;
