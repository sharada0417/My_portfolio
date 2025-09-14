import React from "react";
import { NavLink } from "react-router-dom";

const DesignNavBar = () => {
  return (
    <div className="bg-slate-900 mt-16">
      <div className="max-w-4xl mx-auto flex justify-center">
        <nav className="flex space-x-8 py-3">
          <NavLink
            to="graphic"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition ${
                isActive
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-white hover:text-blue-600 hover:border-b-4 hover:border-blue-400"
              }`
            }
          >
            Graphic Design
          </NavLink>

          <NavLink
            to="video"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition ${
                isActive
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-white hover:text-blue-600 hover:border-b-4 hover:border-blue-400"
              }`
            }
          >
            Video Editing
          </NavLink>
          <NavLink
            to="desinuiux"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition ${
                isActive
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-white hover:text-blue-600 hover:border-b-4 hover:border-blue-400"
              }`
            }
          >
            UI UX
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default DesignNavBar;
