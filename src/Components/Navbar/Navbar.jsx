import React from "react";
import "./Navbar.css";

const Navbar = ({ genresList, formatsList }) => {
  return (
    <nav className="p-5 h-8 flex flex-row items-center justify-between">
      <input type="checkbox" name="" id="navbar_checkbox" className="navbar_checkbox hidden" />
      <a href="" className="h-4 w-10">
        home
      </a>
      <ul className="nav-list flex-col bg-blue-900 fixed top-20 w-3/4 flex opacity-0 px-3 md:py-5 lg:flex lg:top-0 lg:left-40 lg:opacity-100 lg:flex-row lg:justify-between lg:items-center lg:h-4 lg:static lg:bg-blue-900 text-white">
        <li className="navbar_option ">
          <a href="" className="text-xl md:text-3xl">Home</a>
        </li>
        {formatsList.map((item) => (
          <li key={`format_name_${item}`} className="navbar_option">
            <a href="" className="text-xl md:text-3xl">
              {item}
            </a>
          </li>
        ))}
        <li className="lg:relative navbar_option">
          <a className="text-xl md:text-3xl group" href="">
            Genres
          </a>
          <ul className="genres-list grid grid-cols-3 lg:hidden lg:bg-blue-900 lg:w-1/3 lg:fixed lg:right-[-1rem] lg:top-[-2rem] lg:z-[1] lg:bg-clip-content lg:pl-12 lg:pr-4 lg:pt-28 lg:pb-8;">
            {genresList.map((item) => (
              <li
                key={`genre_name_${item}`}
                className="text-xs leading-8 md:text-lg md:leading-10 opacity-50 hover:opacity-100 "
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
