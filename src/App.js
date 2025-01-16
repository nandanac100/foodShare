import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SectionCards from './Components/SectionCards/SectionCards';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Details from './Components/Details/Details';
import Product from './Components/Product/Product';
function App() {
  const [cards, setCards] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <HeroSection cards={cards} setCards={setCards}/>}/>
          <Route path='/cards' element={<SectionCards cards={cards} setCards={setCards}/>}/>
          <Route path='/card:id' element={<Product cards={cards} setCards={setCards}/>}/>
          <Route path='/details' element={<Details/>}/>
        </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
