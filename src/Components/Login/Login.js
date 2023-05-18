import React from 'react'
import { useState } from 'react';
import'./Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <div className="card">
      <h1>Log in</h1>
      <form >
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
        <button type="submit" className='btn-signup' >Log in</button>
        <span className='forgotBtn'>Forgot password</span>
      </form>

      <div>
        <button className="btn">
          <span>Have an account? Login</span>
        </button>
      </div>
    </div>
  )
}
