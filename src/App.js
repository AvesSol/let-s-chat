import { useContext } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Navigate, Route,Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
// gEBJaWlIufPaII8V
// avessolanki043
function App() {

  const {currentUser} = useContext(AuthContext);


  // console.log(currentUser , " there name ", currentUser.name)
  const ProtectedRoute =( { children} )=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }
  return (
    
    <Routes>
      <Route path="/">

      <Route index element={
        <ProtectedRoute><Home/></ProtectedRoute>
      } />
      <Route path="login"  element={<Login/>} />
      <Route path="register" element={<Register/>} />
      </Route>

    </Routes>

  );
}
export default App;
