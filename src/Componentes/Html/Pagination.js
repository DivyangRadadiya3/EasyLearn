import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
// import { AuthContextProvider } from './Context/AuthContext';

function Pagination() {
  return (
    // <div className="flex justify-content-between">
      <div className="flex justify-content-between  top-28 sticky p-5">
        <button className="flex items-center justify-center p-3 h-14 text-xl font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg className="w-6 h-14 me-2 rtl:rotate-180 " viewBox="0 0 14 18">
            <GrPrevious />
          </svg>
          Previous
        </button>
        <button className="flex items-center justify-center px-4 h-14 text-xl font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
          <svg className="w-6 h-14 ms-2 rtl:rotate-180" viewBox="0 0 14 18">
            <GrNext />
          </svg>
        </button>
      </div>
    // </div>
  );
}

export default Pagination;
