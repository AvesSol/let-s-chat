import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const Login = () => {

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/");
      
    } catch (error) {
      setErr(true);
      console.log("Something went wrong", err);
    }
    setLoading(false);
  };

  return (
    <div className="registerNow break-words h-[100vh] w-[100vw] flex justify-center items-center bg-green-500">
      <div className="formWrapper shadow-xl  text-center xs:p-2  px-[20px] sm:px-[60px] py-[10px] bg-white rounded-lg">
        <h1 className="text-[1.4rem] font-semibold text-green-700">
          Let's Chat
        </h1>
        <h2 className="text-xs  text-green-700">Login</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 my-2 items-center justify-center"
        >
          <input
            type="text"
            className="register p-[16px] border-b-[1px] border-green-300  "
            placeholder="email"
          />
          <input
            type="password"
            className="register p-[16px] border-b-[1px] border-green-300  "
            placeholder="password"
          />
         
       <button className="bg-green-400 cursor-pointer border-none text-white text-center p-2 my-4 w-[100%] font-semibold hover:bg-green-500 duration-100 ease-linear">
         Login
        </button> 
        </form>

        {err && <span className='text-red-600 my-2'>Something went wrong..</span> }



         <p className="text-xs">
          you don't have an account?{" "}
          <Link to="/register">  <span className=" underline text-blue-500 text-xs">sign up</span></Link>
        </p>
      </div>
    </div>
  );
};


export default Login