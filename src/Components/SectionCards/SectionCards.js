import React from 'react';
import './SectionCards.css';

const SectionCards = () => {
  const cards = [
    { title: 'Restaurants & Surprise Food', image: 'img1.jpg', link: '#home' },
    { title: 'About Us', image: 'img2.jpg', link: '#about' },
    { title: 'List Food', image: 'img3.jpg', link: '#list-food' },
    { title: 'Find Available Food', image: 'img4.jpg', link: '#cost' },
  ];

  return (
    <section className="cards">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default SectionCards;
