import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import WelcomePage from './Components/Welcome-Page/WelcomePage';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import UpdateForm from './Components/UpdateForm/UpdateForm';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user)
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updateform" element={<UpdateForm/>} />
        <Route path="/welcome" element={<PrivateRoutes user={user} component={WelcomePage} alt={Login} />}/>
      </Routes>
    </Router>
  );
}

export default App;
