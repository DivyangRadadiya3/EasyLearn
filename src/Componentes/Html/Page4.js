import React from "react";

const Page4 = () => {
  return (
    <>
      {/* <hr className="py-2 border-t-1 border-black" /> */}
      <p class="font-normal text-center my-4 text-3xl">HTML Text Editors</p>
      <div
        className="flex w-[62rem] mx-auto bg-green-300 rounded-lg p-4 my-4 text-sm"
        role="alert"
      >
        <div>
          <span className="text-2xl">! Note : </span>
          <span className="text-xl ">
            {" "}
            We can created and modified HTML code in many simple text editor
            like Notepad (PC) or Visual Studio Code or TextEdit (Mac).
          </span>
        </div>
      </div>
      <hr className="py-2 border-t-1 border-gray-500" />
      <div className="container  overflow-none">

      </div>
    </>
  );
};

export default Page4;
