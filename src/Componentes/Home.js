import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-auto mx-auto my-20 rounded-xl overflow-hidden ">
        <div className="md:flex">
          <div className="mx-auto p-8">
            <p className="uppercase tracking-wide text-5xl text-center  text-indigo-500 font-normal">
              online education is like a rising tide, it's going to lift all
              boats.
            </p>
            <br />
            <p className="mt-2 text-2xl text-slate-600">
              We help companies develop the strongest tech teams around. We help
              users sharpen their tech skills and pursue job opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="w-auto mx-auto my-20 rounded-xl  overflow-hidden ">
        <NavLink to="/Login">
          <button
            type="button"
            className="px-14 py-3.5 text-2xl font-normal text-white bg-slate-700 hover:bg-slate-800 rounded-full text-center dark:bg-slate-600 dark:hover:bg-slate-700"
          >
            LogIn
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
