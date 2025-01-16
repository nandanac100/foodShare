import React, { useState } from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Link } from 'react-router-dom';
const HeroSection = ({cards,setCards}) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [location, setLocation] = useState('');
  // const [results, setResults] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/cards');

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get_list/', {
        params: {
          location: location,
          type: selectedOption,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setCards(response.data);
      console.log(response?.data?.data)
       // Save fetched data to state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="hero">
      <div className="gradient-layer">
        <div className="home-contents">
          <h1>FoodShare</h1>
          <p>Turning Surplus into Sustenance</p>
          <form className="location-search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search location..."
              value={location}
              onChange={handleLocationChange}
            />
            <select
              className="dropdown-menu"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Type
              </option>
              <option value="pay">Pay</option>
              <option value="free">Free</option>
            </select>
            
            <button type="submit" className="btn get-started">
              Submit
            </button>
          </form>

          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
