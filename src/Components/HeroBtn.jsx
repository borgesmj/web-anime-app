import React from 'react'
import Home from '../Icons/Home'

const HeroBtn = ({setSideBar, sideBar}) => {

    const hanldeHeroBtnClick = () => {
        setSideBar(!sideBar)
    }
  return (
    <div>
        <button onClick={hanldeHeroBtnClick} className='text-white'><Home/></button>
    </div>
  )
}

export default HeroBtn