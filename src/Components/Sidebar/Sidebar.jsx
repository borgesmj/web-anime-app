import "./Sidebar.css";
import Play from "../Icons/Play";
import Arrow from "../Icons/Arrow";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ animeOnTV }) => {
  console.log(animeOnTV);
  return (
    <div className="sidebar w-full absolute top-20 z-[-1] md:w-2/5 bg-bg-200 lg:w-1/5 text-center px-4">
      <input type="checkbox" name="" id="sidebar_arrow" className="hidden" />
      <h3 className="text-xl flex flex-row justify-between items-center py-4">
        Animes on transmission{" "}
        <label className="sidebar_arrow md:hidden" htmlFor="sidebar_arrow">
          <Arrow />
        </label>
      </h3>
      <ul className="w-full hidden md:block overflow-scroll z-[-1]">
        {animeOnTV.map((item) => (
          <li key={`key_${item._id}`} className="trasmission-item w-full">
            <NavLink
              to={`/web-anime-app/anime/${encodeURIComponent(
                item.title.toLowerCase()
              )}`}
              className="w-full flex flex-row justify-between items-center mt-4 mb-4"
            >
              <Play />
              <span className="text-left w-3/5">
                {item.title.length > 14
                  ? `${item.title.slice(0, 13)}...`
                  : item.title}
              </span>
              <div className="bg-bg-300 px-2 rounded-lg">watch</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
