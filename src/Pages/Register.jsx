// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import fileImg from "../img/addAvatar.png"
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import {auth,storage} from "../firebase";
// import { ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
// import { setDoc,doc } from "firebase/firestore";
// import {db} from "../firebase"
// const Register = () => {

//   const navigate = useNavigate(); 
//   const [err, setErr] = useState(false);
//   const handleSubmit= async(e)=>{

//     e.preventDefault();
//     const name = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//   //  try{
//   //   const res = await createUserWithEmailAndPassword(auth, email,password);
      
//   //   // const storageRef = ref(storage,name);
//   //   const storageRef = ref(storage, `profilePictures/${res.user.uid}/${file.name}`);

    
//   //   const uploadTask = uploadBytesResumable(storageRef,file);
    
//   //   uploadTask.on(
//   //     (error)=>{
//   //       setErr(true);
//   //     },
//   //     () =>{
//   //       getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) =>{
//   //         await updateProfile(res.user,{
//   //           name,
//   //           photoUrl:downloadURL
//   //         })
//   //         await setDoc(doc(db,"users",res.user.uid),{
//   //           uid: res.user.uid,
//   //           name,
//   //           email,
//   //           photoURL:downloadURL
//   //         })
//   //         console.log("check 1");
//   //         await setDoc(doc(db,"userChat",res.user.uid),{});
//   //         navigate("/");

//   //       })

//   //     }
//   //   )
//   //  }catch(e){
//   //   console.log("Somehthing went wrong ", e);
//   //  }

//   try {
//     //Create user
//     const res = await createUserWithEmailAndPassword(auth, email, password);

//     //Create a unique image name
//     const date = new Date().getTime();
//     const storageRef = ref(storage, `${name + date}`);

//     await uploadBytesResumable(storageRef, file).then(() => {
//       getDownloadURL(storageRef).then(async (downloadURL) => {
//         try {
//           //Update profile
//           await updateProfile(res.user, {
//             name,
//             photoURL: downloadURL,
//           });
//           //create user on firestore
//           await setDoc(doc(db, "users", res.user.uid), {
//             uid: res.user.uid,
//             name,
//             email,
//             photoURL: downloadURL,
//           });

//           //create empty user chats on firestore
//           console.log("check point");
//           await setDoc(doc(db, "userChats", res.user.uid), {});
//           navigate("/");
//         } catch (err) {
//           console.log(err);
//           setErr(true);
//         }
//       });
//     });
//   } catch (err) {
//     setErr(true);}
//   }
//   return (
//     <div className="registerNow break-words h-[100vh] w-[100vw] flex justify-center items-center bg-green-500">
//       <div className="formWrapper shadow-xl  space-y-2 text-center  px-[20px] sm:px-[60px] py-[10px] bg-white rounded-lg">
//         <h1 className="text-[1.4rem] font-semibold text-green-700">
//           Let's Chat
//         </h1>
//         <h2 className="text-xs  text-green-700">Register</h2>

//         <form 
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-2 items-center justify-center"
//         >
//           <input
//             type="text"
//             className="register p-[16px] border-b-[1px] border-green-300  "
//             placeholder="display name"
//           />
//           <input
//             type="text"
//             className="register p-[16px] border-b-[1px] border-green-300  "
//             placeholder="email"
//           />
//           <input
//             type="password"
//             className="register p-[16px] border-b-[1px] border-green-300  "
//             placeholder="password"
//           />
//           <input type="file" id="file" className="hidden" />
//           <label htmlFor="file" className="text-sm my-4 text-green-700 flex gap-2 justify-start items-center">
//           <img src={fileImg} width={30} height={30} alt="" />  logo Add your avatar
//           </label>
//         <button className="bg-green-400 border-none text-white text-center p-2 my-4 w-[100%] font-semibold hover:bg-green-500 duration-100 ease-linear">
//           Sign up
//         </button>
//         </form>
      
//          {err && <span>Something went wrong</span> }

//         <p className="text-xs cursor-pointer">
//           you do have an account?{" "}
//           <Link to="/login">  <span className=" underline cursor-pointer text-blue-500 text-xs">login</span></Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from "react";
// import fileImg from "../img/addAvatar.png";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {
//   const [err, setErr] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//     console.log("displayName is here ", displayName);

//     try {
//       //Create user
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       //Create a unique image displayName
//       const date = new Date().getTime();
//       const storageRef = ref(storage, `${displayName + date}`);

//       await uploadBytesResumable(storageRef, file).then(() => {
//         getDownloadURL(storageRef).then(async (downloadURL) => {
//           try {
//             //Update profile
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });
//             //create user on firestore
//             await setDoc(doc(db, "users", res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });

//             //create empty user chats on firestore
//             console.log("Inside now ")
//             await setDoc(doc(db, "userChats", res.user.uid), {});
//           } catch (err) {
//             console.log(err);
//             setErr(true);
//             setLoading(false);
//           }
//         });
//       });
//     } catch (err) {
//       setErr(true);
//       setLoading(false);
//       return;
//     }
//     setLoading(false);
//     navigate("/login");
//   };


import React, { useState } from "react";
import fileImg from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="registerNow break-words h-[100vh] w-[100vw] flex justify-center items-center bg-green-500">
      <div className="formWrapper shadow-xl  space-y-2 text-center  px-[20px] sm:px-[60px] py-[10px] bg-white rounded-lg">
        <h1 className="text-[1.4rem] font-semibold text-green-700">
          Let's Chat
        </h1>
        <h2 className="text-xs  text-green-700">Register</h2>

        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 items-center justify-center"
        >
          <input
            type="text"
            className="register p-[16px] border-b-[1px] border-green-300  "
            placeholder="display name"
          />
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
          <input type="file" id="file" className="hidden" />
          <label htmlFor="file" className="text-sm my-4 text-green-700 flex gap-2 justify-start items-center">
          <img src={fileImg} width={30} height={30} alt="" />  logo Add your avatar
          </label>
        <button className="bg-green-400 border-none text-white text-center p-2 my-4 w-[100%] font-semibold hover:bg-green-500 duration-100 ease-linear">
          Sign up
        </button>
        </form>
      
        {err && <span className='text-red-600 my-2'>Something went wrong..</span> }
         {loading && <span>plzz wait...</span>}

        <p className="text-xs cursor-pointer">
          you do have an account?{" "}
          <Link to="/login">  <span className=" underline cursor-pointer text-blue-500 text-xs">login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;