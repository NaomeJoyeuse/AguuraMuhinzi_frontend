import React from 'react';
import './choose.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="why-text">
        <h2>Why <span>Choose Us?</span></h2>
      </div>
      <div className="reasons">
        <div className="reason">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m-5-7l5 3 5-3" />
          </svg>
          <h3>Data-Driven Decisions</h3>
          <p>Leverage real-time data and analytics to maximize productivity helping you plan for success in every season.</p>
        </div>
        <div className="reason">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m-5-7l5 3 5-3" />
          </svg>
          <h3>Trusted Pricing Standards</h3>
          <p>Our prices are transparently set by NAEB, ensuring that you receive fair and competitive rates.</p>
        </div>
        <div className="reason">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m-5-7l5 3 5-3" />
          </svg>
          <h3>Empowering Farmers and Cooperatives</h3>
          <p>We are dedicated to supporting local farmers and cooperatives by providing access to markets and resources.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
