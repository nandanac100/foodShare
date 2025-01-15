import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SectionCards from './Components/SectionCards/SectionCards';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';

function App() {
  const [cards, setCards] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <HeroSection cards={cards} setCards={setCards}/>
      <SectionCards cards={cards} setCards={setCards}/>
    </div>
  );
}

export default App;
