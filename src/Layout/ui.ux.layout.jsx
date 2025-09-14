import React from "react";
import { Outlet } from "react-router-dom";
import UIUXNavBar from "@/components/UIUXNavBar";

const UIUXLayout = () => {
  return (
    <div>
        <div className="mt-16 ">
      </div> 
      <UIUXNavBar/>
      <div className=" bg-white  ">
        <Outlet />
      </div>
    </div>
  );
};

export default UIUXLayout ;