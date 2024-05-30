import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Chat from "../component/Chat";

const Home = () => {

  const [showSidebar, setShowSidebar] = useState("showSidebar");
  
  return (
    <div className="Wrapper  bg-[#64ff64] h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="container relative border mx-auto w-[90%] h-[90vh] flex rounded-md overflow-hidden shadow-lg">
        <Sidebar  showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <Chat showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default Home;
