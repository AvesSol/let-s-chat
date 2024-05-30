import React, { useContext } from 'react'
import add from "../img/add.png"
import cam from "../img/cam.png"
import more from "../img/more.png"
import Messages from "../component/Messages"
import Input from "../component/Input"
import { FaRegUser } from "react-icons/fa";
import { ChatContext } from '../context/ChatContext'

const Chat = ({setShowSidebar ,showSidebar}) => {

  const {data} = useContext(ChatContext);
  return (
    <div className={`chat-box relative z-[5] ${ showSidebar == "showSidebar" ? " chatNow" : "" } sm:before:hidden flex-grow w-2/6 overflow-y-auto overflow-x-hidden h-[100%]`}>
         <div className="top flex justify-between items-center px-2 bg-[#2c2c2c] border-b-[1px] border-[#202020] h-14 p-2">
          
          <div className="left font-semibold text-white flex justify-start items-center gap-4"> <span onClick={()=>{setShowSidebar("showSidebar")}} className={`sm:hidden ${showSidebar == "showSidebar" ? "hidden" : ""}`}><FaRegUser/></span> {data.user?.displayName}</div>
          <div className="right flex items-center justify-end gap-2">
            <img className="vid w-[22px]"  src={cam}/>
            <img className="add-People w-[22px]"  src={add}/>
            <img className="more w-[22px]"  src={more}/>
          </div>
         </div>
         <Messages/>
         <Input/>
    </div>
  )
}

export default Chat