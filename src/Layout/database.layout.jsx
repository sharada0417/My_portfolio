import React from "react";
import { Outlet } from "react-router-dom";
import DataBaseNavBar from "@/components/DataBaseNavBar";

const DataBaseLayout = () => {
  return (
    <div>
        <div className="mt-16 ">
      </div> 
      <DataBaseNavBar/>
      <div className=" bg-white ">
        <Outlet />
      </div>
    </div>
  );
};

export default DataBaseLayout;