import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login")
  }
  const signupHandler = () => {
    navigate("/signup")
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
        <button className="loginButton" onClick={loginHandler}>Login</button>
        <button className="signupButton" onClick={signupHandler}>Signup</button>
      </div>
    </nav>
  );
}
