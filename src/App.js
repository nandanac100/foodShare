import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SectionCards from './Components/SectionCards/SectionCards';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <SectionCards />
    </div>
  );
}

export default App;
