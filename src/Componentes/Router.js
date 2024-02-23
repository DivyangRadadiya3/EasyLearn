import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Tutorials from "./Tutorials";
import AboutUs from "./AboutUs";
import ContactUs from "./contact/ContactUs";
import Dashboard from "./Dashboard/Dashboard.js";
import HomePage from "./Html/HomePage";
import Page1 from "./Html/Page1";
import Page2 from "./Html/Page2";
import Page3 from "./Html/Page3";
import Page4 from "./Html/Page4";

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
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Html/HomePage" element={<HomePage />} />
        <Route path="/Html/Page1" element={<Page1 />} />
        <Route path="/Html/Page2" element={<Page2 />} />
        <Route path="/Html/Page3" element={<Page3 />} />
        <Route path="/Html/Page4" element={<Page4 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
