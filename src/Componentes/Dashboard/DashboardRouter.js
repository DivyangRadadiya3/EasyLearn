import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
import Login from "../Login";
// import Register from "./Register";
import Profile from "./Profile";
// import ContactUs from "./contact/ContactUs";
// import Tutorials from "./Tutorials";
// import AboutUs from "./AboutUs";
// import Dashboard from "./Dashboard/Dashboard.js";
// import HomePage from "./Html/HomePage";
// import Page1 from "./Html/Page1";

export default function DashboardRouter() {
  return (
    <>
      <Routes>
          <Route exact path="Profile" element={<Profile name="Profile" />} />
          <Route path="/Login" element={<Login name="Login"/>} />
          <Route path="*" element={<Profile name="Profile" />} />
      </Routes>
    </>
  );
}
