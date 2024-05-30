import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const divRef = useRef(null);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

    // Function to scroll the div to the bottom
    const scrollToBottom = () => {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    };
  
    // Scroll to bottom whenever the component updates or children change
    useEffect(() => {
      scrollToBottom();
    }, [messages]);

  // console.log(messages)

  return (
    <div ref={divRef} className='bg-[#2c2c2c] h-[calc(100%-116px)] overflow-y-auto p-[10px]'>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  )
}

export default Messages