import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Back from "../../Components/Icons/Back";

const AnimePage = ({ allAnime }) => {
  const { name } = useParams();
  const filteredAnime = allAnime.filter((item) => {
    return item.title.toLowerCase() === name;
  });

  const animeSynopsis = filteredAnime[0]?.synopsis.split('[')

  const navigate = useNavigate();
  return (
    <div className="absolute top-40 w-full z-[-2]  px-8 md:px-[1rem] md:w-3/5 md:top-20 md:left-[19rem] lg:left-[18rem] lg:w-4/5 py-4  ">
      <NavLink onClick={() => navigate(-1)}>
        <Back />
      </NavLink>

      <div className="flex flex-col justify-center">
        <p className="font-bold text-center my-6 md:text-2xl lg:text-4xl">
          {filteredAnime[0]?.title}
        </p>
        <img
          src={filteredAnime[0]?.image}
          className="w-full md:w-1/2 lg:w-1/4"
          alt=""
        />
        <p className="mt-4 font-bold md:absolute md:top-80 md:right-40 lg:top-64">
          Genres:
        </p>
        <div className=" w-full grid grid-flow-col grid-rows-2 p-4 md:w-1/4 md:absolute md:top-[23rem] md:right-8 lg:w-1/2 lg:grid-rows-1 lg:top-[18rem] ">
          {filteredAnime[0]?.genres.map((item) => (
            <span
              key={`genre-key-${item}`}
              className=" text-md border-black border-[1px] rounded-lg text-center lg:mx-4"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-4 font-bold">Sypnosis:</p>
        <span>{animeSynopsis[0]}</span>
      </div>
      <p className="mt-4 font-bold">Status:</p>
      <span className="">{filteredAnime[0]?.status}</span>
    </div>
  );
};

export default AnimePage;
