import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import WelcomePage from '../Welcome-Page/WelcomePage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Account logged in successfully');
      navigate('/welcome');
      console.log('Logged in');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="card">
      <h1>Log in</h1>
      <form>
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
          <button type="button" className="btn-signup" onClick={loginHandler}>
            Log in
          </button>
          <span className="forgotBtn">Forgot password</span>
        </div>
      </form>
    </div>
  );
}
