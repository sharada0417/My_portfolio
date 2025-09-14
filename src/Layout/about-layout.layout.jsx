import React from "react";
import AboutUsNavBar from "../components/AboutUsNavBar";
import { Outlet } from "react-router-dom";

const AboutUsLayout = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="mt-4 h-[45px] bg-gray-200 flex items-center justify-center">
      </div>

      {/* About Us Nav Bar */}
      <AboutUsNavBar />

      {/* Nested Route Content */}
      <Outlet />
    </div>
  );
};

export default AboutUsLayout;
