import React, { useEffect } from 'react';
import './SectionCards.css';

const SectionCards = ({ cards }) => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Display a confirmation dialog
    };
    
    // Attach event listener
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <section className="cards">
      <div className="head">
        <h1>Food Categories</h1>
      </div>
      {cards?.data?.map((card) => (
        <div key={card.id} className="card">
          <img src={"https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D"} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <p>Quantity: {card.quantity}</p>
          <p>Price: {card.price === '0.00' ? 'Free' : `₹${card.price}`}</p>
          <p>Location: {card.location}</p>
          <p>Expiry Date: {new Date(card.expiry_date).toLocaleDateString()}</p>
          <p style={{fontWeight:"bold"}}>ph no:xxxx-xxxx-xx</p>
        </div>
      ))}
    </section>
  );
};

export default SectionCards;
