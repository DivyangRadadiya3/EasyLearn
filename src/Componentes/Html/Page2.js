import React from "react";
// import { UserAuth } from "../Context/AuthContext";

const Page2 = () => {
  //   const { user } = UserAuth();

  return (
    <>
      <div className="container  overflow-none">
        <p className="font-normal text-4xl text-center my-3 text-blue-500">
          Description of HTML Example 
        </p><br/>
        <hr class="py-2 border-t-2 border-green-600"/>
        <div className=" my-2 ">
          <p className="text-3xl text-center my-5 leading-tight">
            Example of HTML
          </p>
          <img
            src="/ex.png"
            alt="HTML Example"
            className="w-[607px] h-80 rounded-3xl border-2 mx-auto"
          />
        </div>
        <div className="w-[64rem] h-auto mx-auto p-2 mt-3 bg-white rounded-3xl">
          <p className="text-center text-3xl font-normal leading-tight text-blue-500">
            Description
          </p><br/>
          <ul role="list" className="marker:text-sky-400  list-disc pl-5 space-y-3 text-slate-700">
            <li className="text-2xl my-1 leading-tight text-justify">
              &lt;!DOCTYPE html&gt; is defines the document type or it instruct
              the browser about the version of HTML.
            </li>
            <li className="text-2xl my-1 leading-tight text-justify">
              This &lt;html&gt; tag informs the browser that it is an HTML
              document.Text between Html tag describes the web document.It is a
              container for all other elements of HTML except &lt;!DOCTYPE&gt;.
            </li>
            <li className="text-2xl my-1 leading-tight text-justify">
              This &lt;head&gt; tag should be the first element inside the
              &lt;html&gt; element, which containsthe metadata(information about
              the document). It must be closed before the body tag opens.
            </li>

            <li className="text-2xl my-1 leading-tight text-justify">
              &lt;title&gt; is used to a add title of that HTML page which
              appears at the top of browser window. It must be placed inside the
              head tag and should close immediately.
              <div
                className="flex w-[62rem] mx-auto bg-red-100 rounded-lg p-4 my-4 text-sm text-red-700"
                role="alert"
              >
                <div> 
                  <span className="text-2xl">! Note : </span>
                  <span className="text-xl ">
                    {" "}
                    This tag is optional but you must declare becuse of whenever
                    user visit your website so that know you are created on what
                    subject.
                  </span>
                </div>
              </div>
            </li>
            <li className=" text-2xl my-1 leading-tight text-justify">
              Text between &lt;body&gt; tag describes the body content of the
              page that is visible to the end user.This tag contains the main
              content of the HTML document.
              <div
                class="flex w-[62rem] mx-auto bg-red-100 rounded-lg p-4 my-4 text-sm text-red-700"
                role="alert"
              >
                <div>
                  <span className="text-2xl">! Note : </span>
                  <span className="text-xl ">
                    {" "}
                    In this tag you can declare the many tags and improve your
                    website.
                  </span>
                </div>
              </div>
            </li>
            <li className=" text-2xl my-1 leading-tight text-justify">
              Text between &lt;h1&gt; tag describes the first level heading of
              the webpage.
            </li>
            <li className=" text-2xl my-1 leading-tight text-justify">
              Text between &lt;p&gt; tag describes the paragraph of the
              webpage.
            </li>
          </ul>
          <div
            className="flex w-[62rem] mx-auto bg-red-100 rounded-lg p-4 my-4 text-sm text-red-700"
            role="alert"
          >
            <div>
              <span className="text-2xl">! Note : </span>
              <span className="text-xl ">
                {" "}
                This &lt;!DOCTYPE&gt;, &lt;html&gt;, &lt;head&gt;, &lt;title&gt;
                and &lt;body&gt; tags are must important to declare for make
                html file.
              </span>
            </div>
          </div>
          <div
            className="flex w-[62rem] mx-auto bg-red-100 rounded-lg p-4 my-4 text-sm text-red-700"
            role="alert"
          >
            <div>
              <span className="text-2xl">! Note : </span>
              <span className="text-xl ">
                {" "}
                The use should know that all tags have closing tag like
                &lt;/html&gt; and whenever if you do not declare closing tag so
                code was not run and it will give error.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
