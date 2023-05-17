import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
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
    </nav>
  );
}
