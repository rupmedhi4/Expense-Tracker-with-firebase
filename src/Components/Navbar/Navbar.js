import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

export default function Navbar({user}) {

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login")
  }
  const signupHandler = () => {
    navigate("/signup")
  }

  const logoutHandler = async ()=>{
    try{
       await signOut(auth)
        navigate("/")
       toast.success("Signout successfully")
    }catch(err){
      toast.error(err.message)
    }
   
  }
  return (
    <nav className="navbar">
      <div className='NavDiv'>
        <span>Expense Tracker</span>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>About Us</span>
          </li>
        </ul>
      </div>

      <div>
        {user? (
           <button className="signupButton" onClick={logoutHandler}>Logout</button>
        ) : (
          <>
            <button className="loginButton" onClick={loginHandler}>Login</button>
            <button className="signupButton" onClick={signupHandler}>Signup</button>
          </>
          
        )}
       

      </div>
    </nav>
  );
}
