import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import FormatGrid from './Components/FormatGrid/FormatGrid'
import GenreGrid from './Components/GenreGrid/Genregrid'


function App() {

  const [data, setData] = useState([]) // Toda la data de titulos divididos en paginas
  const [allAnime, setAllAnime] = useState([]) // Todos los titulos en un solo arreglo
  const [animeOnTV, setAnimeOnTV] = useState([]) // Los titulos que actualmente estan siendo trasmitidos
  const [personalFavorites, setPersonalFavorites] = useState([]) // Mis favoritos personales
  const [genresList, setGenresList] = useState([]) // Lista de generos
  const [formatsList, setFormatsList] = useState([])


  const fetchData = () => {
    axios
      .get('https://borgesmj.github.io/cloud-storage/animedb.json')
      .then((response) => {
        setData(response.data.AnimeData);
        const titulos = [];
        response.data.AnimeData.map((item) =>
          item.Data.map((titulo) => titulos.push(titulo))
        );
        setAllAnime(titulos)
        setAnimeOnTV(
          titulos.filter((item) => item.status === 'Currently Airing')
        );
        setPersonalFavorites(
          titulos.filter((item) => {
            return (
              item.title === 'Shingeki no Kyojin' ||
              item.title === 'Fullmetal Alchemist: Brotherhood' ||
              item.title === 'Vinland Saga' ||
              item.title === 'Jujutsu Kaisen' ||
              item.title === 'Kimetsu no Yaiba'
              )
          })
        )
        let uniqueGenre = []

        titulos.forEach((item) => {
          item.genres.forEach((genre) => {
            if (!uniqueGenre.includes(genre)) {
              uniqueGenre.push(genre)
            }
          })
        })
        setGenresList(uniqueGenre)


        let formats = []
        titulos.forEach((item) => {
          if(!formats.includes(item.type)){
            formats.push(item.type)
          }
        })
        
        setFormatsList(formats)

      })
      .catch((error) => {
        console.log(error);
        setTimeout(fetchData, 1000); 
      });
  };


  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div className='max-w-full py-5 overflow-hidden max-h-screen'>
      <Navbar
        genresList = {genresList}
        formatsList = {formatsList}
      />
      <Sidebar
        animeOnTV = {animeOnTV}
      />
      {/* Main */}
       <Routes>
            {formatsList.map((item) => (
              <Route
                path={`/web-anime-app/formats/${item.toLowerCase()}`}
                key={`format_id_${item}`}
                element={<FormatGrid
                  format = {item}
                />}
              ></Route>
            ))}
            {genresList.map((item) => (
              <Route
                path={`/web-anime-app/genres/${item.toLowerCase().replace(/ /g, '-')}`}
                key={`genre_id_${item}`}
                element={<GenreGrid
                  genre = {item}
                />}
              ></Route>
            ))}
       </Routes>
    </div>
  )
}

export default App
