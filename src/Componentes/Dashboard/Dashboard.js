import React, { useState } from "react";
import DashboardNavBar from "./DashboardNavBar.js";
import Profile from "./Profile.js";

// import DashboardRouter from "./DashboardRouter.js";

const Dashboard = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-2/12 absolute sm:relative bg-white text-black justify-between flex-auto sm:flex min-height: 716px">
          <DashboardNavBar
            setActivePage={setActivePage}
            activePage={activePage}
          />
        </div>
        <div className=" mt-10 w-10/12 flex-auto">
          {activePage === 1 && <Profile />}
        </div>
      </div>
      {/* <DashboardRouter /> */}
    </>
  );
};

export default Dashboard;
