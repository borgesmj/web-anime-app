import { useEffect, useState } from 'react'
import axios from 'axios'

import Sidebar from './Components/Sidebar'
import HeroBtn from './Components/HeroBtn'

function App() {

  const [sideBar, setSideBar] = useState(false)
  const [grid, setGrid] = useState([])

  useEffect(()=>{
    axios
    .get('https://borgesmj.github.io/cloud-storage/animedb.json')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(function(){
      console.log('fetch finalizado')
    })
  },[])

  return (
    <div className='max-w-full py-5'>
    </div>
  )
}

export default App
