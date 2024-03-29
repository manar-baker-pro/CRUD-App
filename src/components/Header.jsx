import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-dark-blue to-dark-blue p-4  shadow ">
      <div className="container mx-auto flex justify-between items-center w-full ">
        <h1 className="text-white text-2xl font-bold">CRUD APP</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              exact="true"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              Home
            </NavLink>
          </li>

          <li className="text-white hover:text-yellow-400 transition duration-300 cursor-pointer">
            Login
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
