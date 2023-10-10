import React from "react";
import AnimeTitle from "../../Components/AnimeTitle/AnimeTitle";

const Homepage = ({ data }) => {
  const homePageData = data.filter((item) => {
    return item.Page === 1;
  });

  return (
    <div className="absolute top-40 w-full z-[-2]  px-8 md:px-[1rem] md:w-3/5 md:top-20 md:left-[19rem] lg:left-[18rem] lg:w-4/5 py-4  flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-4">
      {homePageData[0]?.Data?.map((item) => (
        <AnimeTitle key={item._id} name={item.title} image={item.image} />
      ))}
    </div>
  );
};

export default Homepage;
