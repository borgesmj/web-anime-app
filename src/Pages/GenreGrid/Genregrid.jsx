import React from 'react'
import AnimeTitle from '../../Components/AnimeTitle/AnimeTitle'

const Genregrid = ({genre, allAnime}) => {
  
  const filteredData = allAnime.filter((item) => {
    return item.genres.includes(genre);
  });
  return (
    <div className="absolute top-40 w-full z-[-2]  px-8 md:px-[1rem] md:w-3/5 md:top-20 md:left-[19rem] lg:left-[18rem] lg:w-4/5 py-4  ">
      <h1 className='w-full  text-center font-bold md:text-xl'>{genre}</h1>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-4">
        {filteredData.map((item) => (
          <AnimeTitle name={item.title} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default Genregrid
