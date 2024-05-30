import gojo from "../img/gojo.jpeg";
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div className={`message flex gap-2 mb-6 ${message.senderId == currentUser.uid ? "flex-row-reverse items-start" :""} `}>
     
      <div className="msgInfo">
        <img
          className="w-[40px] h-[40px] rounded-[100%] my-1"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span className="text-xs text-gray-400 ml-2">{new Date().toLocaleTimeString()}</span>
      </div>
      {/* <div className="msgContent max-w-[80%] flex flex-col p-[10px]">
             <img className='w-[50%] my-2' src={gojo} alt="" />
             <p className='bg-white rounded-[0px_10px_10px_10px] px-[20px] py-[10px]'>Hello</p>
        </div> */}
      <div className={`msgContent max-w-[80%] flex flex-col p-[10px] ${message.senderId == currentUser.uid ?  "items-end" : "items-start"}`}>
       {message.text && <p className={`bg-white ${ message.senderId == currentUser.uid ? " rounded-[10px_0px_10px_10px]" : "rounded-[0px_10px_10px_10px]"} px-[10px] mt-4 py-[10px]`}>
        {message.text}
        </p>}
        {message.img && <img className="w-[50%] my-2" src={message.img} alt="" />}
        {/* <img className="w-[50%] my-2" src={gojo} alt="" /> */}
      </div>
    </div>
  );
};

export default Message;
