import React from "react";
import { Outlet } from "react-router-dom";
import FrontendNavBar from "../components/FrontendNavBar";

const FrontendLayout = () => {
  return (
    <div>
        <div className="mt-16  ">
      </div> 
      <FrontendNavBar />
      <div className=" bg-white  ">
        <Outlet />
      </div>
    </div>
  );
};

export default FrontendLayout;
