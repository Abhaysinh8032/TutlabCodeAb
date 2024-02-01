import React, { useState } from 'react';
import '../css/style.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logofinal.png"
import '../js/darkmode.js';
import ThemeToggler from '../js/darkmode.js';
import { Link } from 'react-router-dom';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
       <header className="header">
      <div className="logo" title="TUTLABS INDIA">
        <img src={logo} alt="TUTLABS Logo" />
      </div>
      <nav className="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/internship">Internship</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
        </ul>
      </nav>
     <ThemeToggler/>
    </header>

      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="logo-mobile" title="TUTLABS INDIA" id="logo-mobile">
         <img src={logo} alt="TUTLABS Logo" />
        </div>
        <div className="hamburger" onClick={openNav}>☰</div>

        {/* Sidebar navigation */}
        <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`} id="mySidebar">
          <div className="close-btn" onClick={closeNav}>&times;</div>
          <li><Link to="/">Home</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/internship">Internship</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
          <a href="signup.html">Sign Up</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
