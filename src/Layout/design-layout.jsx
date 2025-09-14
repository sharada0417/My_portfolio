import DesignNavBar from "@/components/DesignNavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const DesignLayout = () => {
  return (
    <div>
      <div className="mt-16 ">
      </div> 
      <DesignNavBar/>
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default DesignLayout;
