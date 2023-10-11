import React from "react";
import AnimeTitle from "../../Components/AnimeTitle/AnimeTitle";

const Directory = ({ allAnime }) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const filtrados = allAnime.filter((item) => {
    return item.title.startsWith("a") || item.title.startsWith("A");
  });

  console.log(filtrados);

  return (
    <div className="absolute top-40 w-full z-[-2]  px-8 md:px-[1rem] md:w-3/5 md:top-20 md:left-[19rem] lg:left-[18rem] lg:w-4/5 py-4">
      All Anime
      {letters.map((letter) => (
        <div
          key={`section_${letter}`}
          className="w-full h-fit mt-10 flex flex-col"
          id={`section_${letter}`}
        >
          <span className="font-bold">{letter.toUpperCase()}</span>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-4">
            {allAnime
              .filter((item) => {
                return (
                  item.title.startsWith(letter) ||
                  item.title.startsWith(letter.toUpperCase())
                );
              })
              .map((anime) => (
                <AnimeTitle
                  key={anime._id}
                  name={anime.title}
                  image={anime.image}
                />
              ))}
          </div>
        </div>
      ))}
      <div className="flex flex-col text-[0.8rem] justify-center items-center font-bold w-fit fixed md:top-[14%] bottom-0 right-0">
        {letters.map((item) => (
          <a key={`list_${item}`} href={`#section_${item}`}>
            {item.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Directory;
