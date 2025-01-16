import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-brand">FoodShare</div>

      {/* Menu bar icon for mobile */}
     <div className='nav-links'>

     <button className="navbar-toggle" onClick={toggleSidebar}>
        {isOpen ? '×' : '☰'} {/* Change the icon when sidebar is open */}
      </button>

      {/* Sidebar for smaller devices */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={toggleSidebar}>×</button>
        <Link to="/"><a href="#home" onClick={toggleSidebar}>Home</a></Link>
        <a href="#about" onClick={toggleSidebar}>About Us</a>
        <a href="#list-food" onClick={toggleSidebar}>Food Categories</a>
        <Link to="/details"><a href="#cost" onClick={toggleSidebar}>Cost Us</a> </Link>
      </div>

     </div>
      {/* Navbar links for larger screens */}
      <nav className={`navbar-links ${isOpen ? 'hide' : ''}`}>
      <Link to="/"><a href="#home">Home</a></Link>
      <Link to="/"><a href="#about">About Us</a></Link>
      <Link to="/"><a href="#list-food"> Food Categories</a></Link>
      <Link to="/details"><a href="#cost">Cost Us</a></Link>
      </nav>

      {/* Overlay for background blur effect */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </header>
  );
};

export default Navbar;
