import { signOut } from 'firebase/auth';
import React, { Children, useContext } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = ({setShowSidebar}) => {
  const {currentUser} = useContext(AuthContext);

  const hideNow = () =>{
    setShowSidebar("sidebar");
  }

  return (
    <div className='flex justify-between items-center w-[100%] p-2 bg-[#2c2c2c] h-14'>
      <div className='text-white font-semibold text-lg flex justify-start items-center gap-4'><span onClick={hideNow} className='sm:hidden'><IoMdArrowBack/></span> Let's Chat</div>
      <div className="container w-fit  justify-end items-center gap-4 hidden md:flex">
        <img alt="" className="pic w-[40px] h-[40px]   rounded-[100%] object-cover" src={currentUser.photoURL} />
        <span className='text-gray-200 text-sm font-semibold hidden lg:block'>{currentUser.displayName}</span>
        <button onClick={()=>{signOut(auth)}} className="logout p-1 text-xs bg-[#ffffff] rounded-md hover:bg-slate-700 hover:text-white font-semibold duration-100 hidden lg:block">Logout</button>
      </div>
    </div>
  ) 
}

export default Navbar