import React from 'react'
import Navbar from "../component/Navbar"
import Search from './Search'
import Chats from './Chats'
const sidebar = ({showSidebar,setShowSidebar}) => {
  return (
    <div className={` ${showSidebar} flex-1 bg-[#2c2c2c] z-[40] h-[100%] sm:h-[100%] overflow-y-auto overflow-x-hidden border-r-[1px] border-[#202020] `}>
      <Navbar setShowSidebar={setShowSidebar}/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default sidebar