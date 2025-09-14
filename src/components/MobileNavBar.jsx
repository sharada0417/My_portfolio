import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileNavBar = () => {
  return (
   <div className="bg-gray-900">
      <div className="max-w-4xl mx-auto flex justify-center">
        <nav className="flex space-x-8 py-3">
          <NavLink
            to="reactnative"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition ${
                isActive
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-white hover:text-blue-600 hover:border-b-4 hover:border-blue-400"
              }`
            }
          >
            React Native
          </NavLink>

          <NavLink
            to="flutter"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition ${
                isActive
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-white hover:text-blue-600 hover:border-b-4 hover:border-blue-400"
              }`
            }
          >
            Flutter
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default MobileNavBar
