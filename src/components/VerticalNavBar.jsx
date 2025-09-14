import React from "react";
import { NavLink } from "react-router-dom";

const VerticalNavBar = () => {
  return (
    <div className="flex flex-col w-48 mt-40 px-10 ">
      <NavLink
        to="frontend"
        className={({ isActive }) =>
          `w-full px-4 py-2 mb-3 font-semibold rounded transition ${
            isActive
              ? "text-blue-500  border-l-4 border-blue-600"
              : "text-gray-400 hover:text-blue-600 "
          }`
        }
      >
        Frontend
      </NavLink>

      <NavLink
        to="backend"
        className={({ isActive }) =>
          `w-full px-4 py-2 mb-3 font-semibold rounded transition ${
            isActive
              ? "text-blue-500  border-l-4 border-blue-600"
              : "text-gray-400 hover:text-blue-600 "
          }`
        }
      >
        Backend
      </NavLink>

      <NavLink
        to="mobile"
        className={({ isActive }) =>
          `w-full px-4 py-2 mb-3 font-semibold rounded transition ${
            isActive
              ? "text-blue-500  border-l-4 border-blue-600"
              : "text-gray-400 hover:text-blue-600 0"
          }`
        }
      >
        Mobile
      </NavLink>

      <NavLink
        to="database"
        className={({ isActive }) =>
          `w-full px-4 py-2 mb-3 font-semibold rounded transition ${
            isActive
              ? "text-blue-500  border-l-4 border-blue-600"
              : "text-gray-400 hover:text-blue-600 "
          }`
        }
      >
        DataBase
      </NavLink>

      <NavLink
        to="uiux"
        className={({ isActive }) =>
          `w-full px-4 py-2 mb-5 font-semibold rounded transition ${
            isActive
              ? "text-blue-500  border-l-4 border-blue-600"
              : "text-gray-400 hover:text-blue-600"
          }`
        }
      >
        UIUX
      </NavLink>
    </div>
  );
};

export default VerticalNavBar;
