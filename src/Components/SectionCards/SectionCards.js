import React from 'react';
import './SectionCards.css';

const SectionCards = ({ cards }) => {
  return (
    <section className="cards">
      <div className="head">
        <h1>Food Categories</h1>
      </div>
      {cards?.data?.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image_url} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <p>Quantity: {card.quantity}</p>
          <p>Price: {card.price === '0.00' ? 'Free' : `₹${card.price}`}</p>
          <p>Location: {card.location}</p>
          <p>Expiry Date: {new Date(card.expiry_date).toLocaleDateString()}</p>
        </div>
      ))}
    </section>
  );
};

export default SectionCards;
