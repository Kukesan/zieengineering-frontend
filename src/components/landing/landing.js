import React from "react";
import "./landing.css";

const Landing = () => {
    return (
      <div className="container">
        <div className="image-section">
        </div>
        <div className="text-section">
        <div className="text-box">
          <h2 className="landing-sub-title">C N C</h2>
          <h1 className="landing-title">Precision CNC Machining Services: Quality and Innovation at Every Turn</h1>
          <p className="landing-description">
            At Zie Engineering, we excel in delivering high-quality, precise, and innovative CNC machined parts that meet the diverse needs of our clients.
          </p>
          <button className="quote-button">GET A QUOTE</button>
          </div>
        </div>
      </div>
    );
};

export default Landing;