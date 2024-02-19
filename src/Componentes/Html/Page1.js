import React from "react";
// import { UserAuth } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";

const Page1 = () => {
  //   const { user } = UserAuth();

  return (
    <>
      {/* <div className="container relative flex flex-wrap items-center overflow-hidden"> */}
      <div className="w-[64rem] h-auto mx-auto p-2 mt-3 bg-white rounded-3xl">
        <p className="text-center text-4xl mb-12 leading-tight">
          Introduction of HTML
        </p>
        <ul
          role="list"
          className="px-10 mt-3 marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-700"
        >
          <li className="my-5 text-xl text-justify">
            HTML is acronym which stands for{" "}
            <b className="font-semibold">
              <u> Hyper Text Markup Language</u>
            </b>{" "}
            which is used for creating web pages and web application.
          </li>
          <li className="my-5 text-xl text-justify">
            <b className="font-medium">
              <u>Tim Berners-Lee</u>
            </b>{" "}
            is known as the father of HTML. The first available description of
            HTML was a document called "HTML Tags" proposed by Tim in late 1991.
            The latest version of HTML is HTML5.
          </li>
          <li className="my-5 text-xl text-justify">
            <b className="font-medium text-2xl">
              <u>Hyper Text :</u>
            </b>{" "}
            HyperText simply means "Text within Text." A text has a link within
            it, is a hypertext. Whenever you click on a link which brings you to
            a new webpage, you have clicked on a hypertext. HyperText is a way
            to link two or more web pages(HTML documents) with each other.
          </li>
          <li className="my-5 text-xl text-justify">
            <b className="font-medium text-2xl">
              <u>Markup Language :</u>
            </b>{" "}
            A markup language is a computer language that is used to apply
            layout and formatting conventions to a text document. Markup
            language markes text more interactive and dynamic. It can turn text
            into images, tables, links, etc.
          </li>
          <li className="my-5 text-xl text-justify">
            <b className="font-medium text-2xl">
              <u>Web Page :</u>
            </b>{" "}
            A web page is a document which is commonly written in HTML and
            translated by a web browser. A web page can be identified by
            entering an URL. A Web page can be of the static or dynamic type.{" "}
            <b className="font-medium">
              With the help of HTML only, we can create static web pages.
            </b>
            <br />
            <br />
            Hence, HTML is a markup language which is used for creating
            attractive web pageswith the help of styling, and which looks in a
            nice format on a web browser. An HTML document is made of many HTML{" "}
            <b className="font-medium text-2xl">
              <u>tags</u>
            </b>{" "}
            and each HTML tag contains diffrent content.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page1;
