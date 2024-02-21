import React, { useState } from "react";
import DashboardNavBar from "./DashboardNavBar.js";
import Profile from "./Profile.js";
// import DashboardRouter from "./DashboardRouter.js";

const Dashboard = () => {
  const [activePage, setActivePage] = useState(1);
  console.log(activePage);
  return (
    <>
      <div className="flex w-full h-full ">
        <div className=" w-64 absolute sm:relative bg-white text-black flex-col justify-between flex sm:flex min-height: 716px">
          <DashboardNavBar
            setActivePage={setActivePage}
            activePage={activePage}
          />
        </div>
        <div className=" mt-10 w-2/3 h-full border-black border-2">{activePage === 1 && <Profile />}</div>
      </div>
      {/* <DashboardRouter /> */}
    </>
  );
};

export default Dashboard;
