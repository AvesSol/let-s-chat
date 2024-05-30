// import { doc, onSnapshot } from "firebase/firestore";
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
// import { db } from "../firebase";

// const Chats = () => {
//   const [chatss, setChatss] = useState([]);

//   const { currentUser } = useContext(AuthContext);
//   const { dispatch } = useContext(ChatContext);

//   useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
//         setChatss(doc.data());
//       });

//       return () => {
//         unsub();
//       };
//     };

//     currentUser.uid && getChats();
//   }, [currentUser.uid]);

//   const handleSelect = (u) => {
//     dispatch({ type: "CHANGE_USER", payload: u });
//   };

// const Chats = () => {
//   return (
//     <div className='p-2'>
//       {Object.entries(chatss)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
//         <div
//         key={chat[0]}
//         onClick={() => handleSelect(chat[1].userInfo)}
//         className="search-Item flex justify-start items-center gap-4 my-1">
//         <img className='w-[50px] h-[50px] object-cover rounded-[100%]' src={chat[1].userInfo.photoURL} alt="" />
//         <div className="msg flex flex-col justify-start items-center">
//         <span className='text-white font-semibold text-[1rem]'>{chat[1].userInfo.displayName}</span>
//         <span className='text-gray-500 text-xs'>{chat[1].lastMessage?.text}</span>
//         </div>
//       </div>
//       ))}
//     </div>
//   )
// }

// export default Chats;


import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats p-2">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
        key={chat[0]}
        onClick={() => handleSelect(chat[1].userInfo)}
        className="search-Item flex justify-start items-center text-start gap-4 my-4  cursor-pointer">
        <img className='w-[40px] h-[40px] object-cover rounded-[100%]' src={chat[1].userInfo.photoURL} alt="" />
        <div className="msg flex flex-col justify-start items-start">
        <p className='text-white font-semibold text-sm text-start'>{chat[1].userInfo.displayName}</p>
        <p className='text-gray-400 text-xs'>{chat[1].lastMessage?.text}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;