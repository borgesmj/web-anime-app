import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ genresList, formatsList }) => {
  return (
    <nav className="p-5 h-8 flex flex-row items-center justify-between">
      <input
        type="checkbox"
        name=""
        id="navbar_checkbox"
        className="navbar_checkbox hidden"
      />
      <NavLink to="/web-anime-app/" className="h-4 w-10">
        home
      </NavLink>
      <ul className="nav-list flex-col bg-blue-900 fixed top-20 w-3/4 flex opacity-0 px-3 md:py-5 lg:flex lg:top-0 lg:left-40 lg:opacity-100 lg:flex-row lg:justify-between lg:items-center lg:h-4 lg:static lg:bg-blue-900 text-white">
        <li className="navbar_option ">
          {/* navbar option #1 Home */}
          <NavLink
            to="/web-anime-app/"
            className="text-xl md:text-3xl w-full flex justify-center items-center z-0 mt-8 lg:mt-0"
          >
            Home
          </NavLink>
        </li>
        {/* Navbar option #2 Formats */}
        <li className="dropdown navbar_option">
          <NavLink
            to="/web-anime-app/formats"
            className="formats_group text-xl md:text-3xl w-full flex justify-center items-center z-0 mt-8 lg:mt-0"
          >
            Formats
          </NavLink>
          <ul className="formats_list grid grid-cols-3  lg:bg-blue-900 lg:w-1/3 lg:hidden lg:fixed lg:right-72 lg:top-[-2rem] lg:z-[1] lg:bg-clip-content lg:pl-12 lg:pr-4 lg:pt-28 lg:pb-8">
            {formatsList.map((item) => (
              <li key={`format_name_${item}`} className="">
                <NavLink
                  to={`/web-anime-app/formats/${item.toLowerCase()}`}
                  className="text-xs leading-8 md:text-lg md:leading-10 lg:opacity-50 hover:opacity-100 "
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        {/* Navbat option #3 genres */}
        <li className="lg:relative navbar_option">
          <NavLink
            to="/web-anime-app/genres/"
            className="text-xl md:text-3xl w-full flex justify-center items-center z-0 mt-8 lg:mt-0 group"
          >
            Genres
          </NavLink>
          <ul className="genres-list grid grid-cols-3 lg:hidden lg:bg-blue-900 lg:w-1/3 lg:fixed lg:right-[-1rem] lg:top-[-2rem] lg:z-[1] lg:bg-clip-content lg:pl-12 lg:pr-4 lg:pt-28 lg:pb-8">
            {genresList.map((item) => (
              <li
                key={`genre_name_${item}`}
                className="text-xs leading-8 md:text-lg md:leading-10 lg:opacity-50 hover:opacity-100 "
              >
                {item}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <label
        htmlFor="navbar_checkbox"
        className="burger-menu flex flex-col justify-between w-10 h-10 lg:hidden "
      >
        <span className="border-b-4 border-white border-solid opacity-100"></span>
        <span className="border-b-4 border-white border-solid opacity-100"></span>
        <span className="border-b-4 border-white border-solid opacity-100"></span>
      </label>
    </nav>
  );
};

export default Navbar;
