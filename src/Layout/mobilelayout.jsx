import MobileNavBar from "../components/MobileNavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const MobileLayout = () => {
  return (
    <div>
      <div className="mt-16 ">
      </div> 
      <MobileNavBar />
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default MobileLayout;
