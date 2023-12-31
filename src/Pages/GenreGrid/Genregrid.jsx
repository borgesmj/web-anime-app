import React, { useEffect, useState } from "react";
import AnimeTitle from '../../Components/AnimeTitle/AnimeTitle'
import Loader from "../../Components/Loader/Loader";
import { useLocation, NavLink } from "react-router-dom";

const Genregrid = ({genre, allAnime}) => {
  const [maxLength, setMaxLength] = useState(50);
  const [loading, setLoading] = useState(false);
  const filteredData = allAnime.filter((item) => {
    return item.genres.includes(genre);
  });
  const location = useLocation;
  useEffect(() => {
    setMaxLength(50);
  }, [location.pathname]);

  useEffect(() => {}, []);

  const handleLoadCLick = () => {
    setLoading(true);
    setTimeout(() => {
      setMaxLength(maxLength + 50);
      setLoading(false);
    }, 1500);
  };
  return (
    <div className="absolute top-40 w-full z-[-2]  px-8 md:px-[1rem] md:w-3/5 md:top-20 md:left-[19rem] lg:left-[18rem] lg:w-4/5 py-4  ">
      <h1 className="w-full  text-left md:text-lg">
        <NavLink>
          All Anime
        </NavLink>
        {' '}
        &gt;
        {' '}
        <NavLink>
          Genres
        </NavLink>
        {' '}
        &gt;
        {' '}
        <span>
          {genre}
        </span>
      </h1>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-4">
        {filteredData.slice(0, maxLength).map((item) => (
          <AnimeTitle key={`genre_key_${item._id}_${item.title}`} name={item.title} image={item.image} />
        ))}
      </div>
      {filteredData.length > maxLength ? (
        <button
          className="w-full py-4 bg-primary-100 text-xl mt-4 rounded-[50px] text-white font-bold relative h-16"
          onClick={handleLoadCLick}
        >
          {loading ? <Loader /> : "Load more..."}
        </button>
      ) : null}{" "}
    </div>
  )
}

export default Genregrid
