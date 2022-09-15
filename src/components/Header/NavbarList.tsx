import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavbarList = () => {
  const location = useLocation();

  return (
    <div className="md:ml-10">
      <ul className="flex md:items-center md:flex-row flex-col">
        <li className="p-2">
          <NavLink
            className={`${location.pathname === "/" && "text-blue-500"}`}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="p-2">
          <NavLink
            className={`${location.pathname === "/filter" && "text-blue-500"}`}
            to="/filter"
          >
            Filter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarList;
