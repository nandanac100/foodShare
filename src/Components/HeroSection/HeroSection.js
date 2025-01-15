import React, { useState } from 'react';
import './HeroSection.css';
import axios from 'axios';

const HeroSection = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [location, setLocation] = useState('');

  // Handle input changes for the location field
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Handle changes in the dropdown menu
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to be sent
    const data = {
      location,
      type: selectedOption,
    };

    console.log('Data to be sent:', data);  // Log the data to ensure it's correct

    try {
      // Send data to the backend using axios
      const response = await axios.post('http://localhost:8000/location/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response from backend:', response.data);  // Log the backend response

      // Optional: Reset form fields after submission
      setLocation('');
      setSelectedOption('');
    } catch (error) {
      console.error('Error sending data:', error);
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
