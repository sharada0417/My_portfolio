import React from "react";
import { Outlet } from "react-router-dom";
import VerticalNavBar from "../VerticalNavBar";

const Tutorials = () => {
  return (
    <div className="flex min-h-screen bg-slate-900 backdrop-blur-lg">
      {/* Vertical NavBar */}
      <div className="w-1/6 mt-10"> {/* decreased from w-1/4 to w-1/5 */}
        <VerticalNavBar />
      </div>

      {/* Main Content */}
      <div className="w-5/6 bg-black"> {/* adjusted width */}
        <Outlet />
      </div>
    </div>
  );
};

export default Tutorials;
