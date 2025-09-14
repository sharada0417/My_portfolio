import React from "react";
import { Outlet } from "react-router-dom";
import DesignNavBar from "@/components/DesignNavBar";

const Design = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 backdrop-blur-lg">
      {/* NavBar aligned horizontally at top */}
      <div>
        <DesignNavBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-5/6 mx-auto bg-slate-900 mt-4 rounded-lg shadow-lg p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Design;
