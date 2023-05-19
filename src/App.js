import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/Welcome-Page/WelcomePage";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./Components/Home/Home";

function App() {

  const [user, setUser] = useState(null)
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
      } else {
        setUser(null)
      }
    });
  })

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/welcome" element={<WelcomePage/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
