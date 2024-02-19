import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Tutorials from "./Tutorials";
import AboutUs from "./AboutUs";
import ContactUs from "./contact/ContactUs";
import Dashboard from "./Dashboard/Dashboard.js";
import Profile from "./Dashboard/Profile";
import HomePage from "./Html/HomePage";
import Page1 from "./Html/Page1";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Tutorials" element={<Tutorials />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index path="Profile" element={<Profile />} />
          <Route path="Profile" element={<Profile />} />
          {/* <Route path="account" element={<Account />} /> */}
          <Route path="*" element={<Home />} />
          {/* <Route
            exact
            path="/Dashboard/Profile"
            element={<Profile name="Profile" />}
          /> */}
        </Route>
        {/* <Route path="/Dashboard/*" element={<Profile name="Profile" />} /> */}
        <Route path="/Html/HomePage" element={<HomePage />} />
        <Route path="/Html/Page1" element={<Page1 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
