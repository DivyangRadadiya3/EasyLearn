import React from "react";
import Pagination from "./Pagination";

// import { UserAuth } from "../Context/AuthContext";

const Page3 = () => {
  //   const { user } = UserAuth();

  return (
    <>
      <Pagination />
      <div className="overflow-hidden">
        <p className="font-normal text-center text-4xl my-3 sm:leading-tight mb-3 text-red-500">
          Features of HTML
        </p>
        <div className="w-auto h-auto mt-3 rounded-3xl p-3">
          <ul
            role="list"
            className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-700"
          >
            <li className="text-xl my-1 leading-tight">
              It is a very{" "}
              <b className="font-semibold">
                <u> easy to understand, modified and simple language.</u>
              </b>{" "}
              it can be easily understood and modified.
            </li>
            <li className="text-xl my-1 leading-tight text-justify">
              It is{" "}
              <b className="font-semibold">
                <u> markup language</u>
              </b>{" "}
              so it provides a flexible way to design web pages along with the
              text.
            </li>
            <li className="text-xl my-1 leading-tight text-justify">
              It is{" "}
              <b className="font-semibold">
                <u> platform-independent</u>
              </b>{" "}
              because it can be displayed on any platform like windows, linux,
              and Macintosh, etc.
            </li>
            <li className="text-xl my-1 leading-tight text-justify">
              It facilitates the programmer to add{" "}
              <b className="font-semibold">
                <u>images, videos, and audio</u>
              </b>{" "}
              to a web page which makes it more attractive and interactive.
            </li>
            <li className="text-xl my-1 leading-tight text-justify">
              HTML is a{" "}
              <b className="font-semibold">
                <u>case-insensitive</u>
              </b>{" "}
              language, which means we can use tags either in lower-case or
              upper-case.
            </li>
            <li className="text-xl my-1 leading-tight text-justify">
              It facilitates programmeres to add a{" "}
              <b className="font-semibold">
                <u>link</u>
              </b>{" "}
              on the web(by html anchor tag),so it enhances the interest of
              browsring of the user.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page3;
