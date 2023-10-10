import React from "react";
import { NavLink } from "react-router-dom";
import "./AnimeTitle.css";

const AnimeTitle = ({ name, image }) => {
  return (
    <NavLink 
    to={`/web-anime-app/anime/${encodeURIComponent(name.toLowerCase())}`}
    className="anime_link relative inline-block max-w-60 max-h-60 overflow-hidden mt-10">
      <img src={image} alt="" className="w-60 h-60 md:w-48 md:h-48" />
      <span className="absolute bg-[#2241f580] top-[90%] text-white font-bold text-[0.8rem] text-center w-[15rem] md:text-[0.7rem] md:w-[12rem]">
        {name}
      </span>
    </NavLink>
  );
};

export default AnimeTitle;
