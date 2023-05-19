import React from 'react';
import './WelcomePage.css';
import { Navigate, useNavigate } from 'react-router-dom';
import UpdateForm from '../UpdateForm/UpdateForm';

export default function WelcomePage() {
  
  const navigate = useNavigate();
  const updateHandler =()=>{
    navigate("/updateform")
  }
  return (
    <div className="welcome-page">
      <div className="title">
        Welcome to Expense Tracker
      </div>
      <div className="profile-incomplete">
        Your profile is Incomplete.
        <span className="complete-link" onClick={updateHandler}>Complete now</span>
      </div>
    </div>
  );
}
