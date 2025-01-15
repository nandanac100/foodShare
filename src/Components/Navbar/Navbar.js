import React, { useState } from 'react';
import './Navbar.css';

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
        <a href="#home" onClick={toggleSidebar}>Home</a>
        <a href="#about" onClick={toggleSidebar}>About Us</a>
        <a href="#list-food" onClick={toggleSidebar}>List Food</a>
        <a href="#cost" onClick={toggleSidebar}>Cost Us</a>
      </div>

     </div>
      {/* Navbar links for larger screens */}
      <nav className={`navbar-links ${isOpen ? 'hide' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#list-food">List Food</a>
        <a href="#cost">Cost Us</a>
      </nav>

      {/* Overlay for background blur effect */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </header>
  );
};

export default Navbar;
