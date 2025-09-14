import React from "react";
import { Outlet } from "react-router-dom";
import BackendNavBar from "@/components/BackendNavBar";

const BackEndLayout = () => {
  return (
    <div>
        <div className="mt-16 ">
      </div> 
      <BackendNavBar/>
      <div className=" bg-white ">
        <Outlet />
      </div>
    </div>
  );
};

export default BackEndLayout;