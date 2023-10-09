import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ genresList, formatsList }) => {
  const [showGenres, setShowGenres] = useState(false);
  const [showFormats, setShowFormats] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false)
  const genresRef = useRef(null);
  const formatsRef = useRef(null);
  
  const handleFormatsClick = (e) => {
    e.preventDefault();
    setShowGenres(false);
    setShowFormats(!showFormats);
  };

  const handleGenresClick = (e) => {
    e.preventDefault();
    setShowFormats(false);
    setShowGenres(!showGenres);
  };

  useEffect(() => {
    // Función para manejar clics fuera de las áreas de géneros y formatos
    const handleOutsideClick = (e) => {
      if (
        genresRef.current &&
        !genresRef.current.contains(e.target) &&
        formatsRef.current &&
        !formatsRef.current.contains(e.target)
      ) {
        setShowGenres(false);
        setShowFormats(false);
      }
    };

    // Agregar el controlador de eventos de clic al documento
    document.addEventListener("click", handleOutsideClick);

    // Limpiar el controlador de eventos cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleShowNavbar = () => {
    setShowNavBar(!showNavBar)
  }

  const location = useLocation()
  useEffect(() => {
      setShowNavBar(false)
  }, [location.pathname])
  return (
    <nav className="p-9 h-8 flex flex-row items-center justify-between bg-accent-100 fixed w-full top-0">
      <input
        type="checkbox"
        name=""
        id="navbar_checkbox"
        className="navbar_checkbox hidden"
        checked={showNavBar}
        readOnly
      />
      <NavLink to="/web-anime-app/" className="h-4 w-10">
        home
      </NavLink>
      <ul className="nav-list bg-accent-100 flex-col lg:bg-transparent z-0  fixed top-[4.5rem] w-3/4 flex opacity-0 px-3 md:py-5 lg:flex lg:top-0 lg:left-40 lg:opacity-100 lg:flex-row lg:justify-between lg:items-center lg:h-4 lg:static lg:bg-transparent text-white">
        <li className="navbar_option ">
          {/* navbar option #1 Home */}
          <NavLink
            to="/web-anime-app/"
            className="text-xl md:text-3xl w-full flex justify-center items-center z-0 md:mt-8 lg:mt-0"
          >
            Home
          </NavLink>
        </li>
        {/* Navbar option #2 Formats */}
        <li className="dropdown navbar_option">
          <div
            ref={formatsRef}
            onClick={handleFormatsClick}
            className="formats_group text-xl md:text-3xl w-full flex justify-center items-center z-0 md:mt-8 lg:mt-0 select-none"
          >
            Formats
          </div>
          <ul
            className={`formats_list grid grid-cols-3 lg:bg-accent-100 lg:w-1/3  lg:fixed lg:right-72 lg:top-[4.5rem] lg:z-[0] ${
              !showFormats ? "lg:hidden" : ""
            } lg:pl-12 lg:pr-4 lg:pt-8 lg:pb-8 lg:rounded-b-xl lg:shadow-lg lg:shadow-black`}
          >
            {formatsList.map((item) => (
              <li key={`format_name_${item}`} className="">
                <NavLink
                  to={`/web-anime-app/formats/${item.toLowerCase()}`}
                  className=" format text-xs leading-8 select-none md:text-lg md:leading-10 lg:opacity-80 lg:hover:font-bold hover:opacity-100"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        {/* Navbat option #3 genres */}
        <li className="lg:relative navbar_option">
          <div
            ref={genresRef}
            onClick={handleGenresClick}
            className="text-xl md:text-3xl w-full flex justify-center items-center z-0 md:mt-8 lg:mt-0 group select-none"
          >
            Genres
          </div>
          <ul
            className={`genres-list grid grid-cols-3 lg:bg-accent-100 lg:w-1/3  lg:fixed lg:right-[0] lg:top-[4.5rem] lg:z-[-1] ${
              !showGenres ? "lg:hidden" : ""
            } lg:pl-12 lg:pr-4 lg:pt-8 lg:pb-8 lg:rounded-b-xl lg:shadow-lg lg:shadow-black`}
          >
            {genresList.map((item) => (
              <li
                key={`genre_name_${item}`}
                className=""
              >
                <NavLink
                  to={`/web-anime-app/genres/${encodeURIComponent(item.toLowerCase())}`}
                  className='genre text-xs leading-8 md:text-lg md:leading-10 lg:opacity-80 lg:hover:font-bold hover:opacity-100 select-none'
                >
                    {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <label
        htmlFor="navbar_checkbox"
        className="burger-menu flex flex-col justify-between w-10 h-10 lg:hidden "
        onClick={handleShowNavbar}
      >
        <span className="border-b-4 border-text.200 border-solid opacity-100"></span>
        <span className="border-b-4 border-text.200 border-solid opacity-100"></span>
        <span className="border-b-4 border-text.200 border-solid opacity-100"></span>
      </label>
    </nav>
  );
};

export default Navbar;
