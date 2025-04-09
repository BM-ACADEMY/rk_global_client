import React from 'react';
import { motion } from 'framer-motion';
import "../css/StateCard.css"

export const StatsCards = () => {
  const cards = [
    { number: 20, title: 'Reward' },
    { number: 200, title: 'Dedicated Developers' },
    { number: `160+`, title: 'Project Completed' },
    { number: `100+` , title: 'Happy Clients' }
  ];



  // Animation variants for Framer Motion
  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="container my-5" id="stateCard">
    <div className="row">
      {cards.map((card, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-3 mb-4">
          <motion.div
            className="card h-100 text-center"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            style={{
              borderRadius: '15px',
              border: 'none',
              background: '#ffffff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              padding: '20px',
              transition: 'transform 0.3s ease'
            }}
          >
            <div className="card-body d-flex flex-column justify-content-center">
              <h2 className="display-5 font-weight-bold mb-3" style={{ color: '#9acd32' }}>
                {card.number}
              </h2>
              <p className="card-text fs-5 m-0" style={{ color: '#495057', fontWeight: 'bold' }}>
                {card.title}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
  );
};