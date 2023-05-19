import React, { useState } from 'react';
import './Signup.css';
import { auth,db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();


  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth)
      toast.success('Account created successfully');
      navigate("/login")

    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const loginHandler = ()=>{
     navigate("/login")
  }

  return (
    <div className="card">
      <h1>Sign Up</h1>
      <form onSubmit={signupHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className='btn-signup' >Sign Up</button>
      </form>

      <div onClick={loginHandler}>
        <button className="btn">
          <span>Have an account? Login</span>
        </button>
      </div>
    </div>
  );
}
