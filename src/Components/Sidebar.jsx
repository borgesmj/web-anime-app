import React from 'react'

const Sidebar = ({sideBar}) => {
  return (
    <div className='bg-green-200 w-1/4 rounded-lg h-full'>
      <input type="checkbox" name="" id="" checked={sideBar} className='hidden' />
      <div className='sidebar-list'>

      </div>
    </div>
  )
}

export default Sidebar
