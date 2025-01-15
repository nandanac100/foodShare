import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SectionCards.css';

const SectionCards = ({cards,setCards}) => {
  // const [cards, setCards] = useState([]); // State to store fetched data

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8000/api/get_list/', {
  //         params: {
  //           location, // Use the location prop
  //           type: selectedOption, // Use the selectedOption prop
  //         },
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       setCards(response.data); // Access the "data" key from the response object
  //       console.log('Fetched cards:', response.data.data); // Debugging log
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData(); // Call the async function
  // }, [location, selectedOption]); // Re-run the effect when location or selectedOption changes
  console.log('rr',cards.data)

  return (
    <section className="cards">
      {/* Check if cards exist and render accordingly */}
      {
        cards.data.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image_url} alt={card.title} />
            <h3>{card.title}</h3> {/* Render the card title */}
            <p>{card.description}</p> {/* Render the card description */}
            <p>Quantity: {card.quantity}</p>
            <p>Price: {card.price === "0.00" ? "Free" : `₹${card.price}`}</p>
            <p>Location: {card.location}</p>
            <p>Expiry Date: {new Date(card.expiry_date).toLocaleDateString()}</p>
          </div>
        ))
      }
    </section>
  );
};

export default SectionCards;
