import React from "react";
import "./landing.css";

export default function Landing ({scrollToSection}) {
    return (
        <div className="container">
            <div className="image-section">
            </div>
            <div className="text-section">
                <div className="text-box">
                    <h2 className="landing-sub-title">100% Australian Product</h2>
                    <h1 className="landing-title">Precision CNC Machining Services: Quality and Innovation at Every Turn</h1>
                    <p className="landing-description">
                        At Zie Engineering, we excel in delivering high-quality, precise, and innovative CNC machined parts that meet the diverse needs of our clients.
                    </p>
                    <button className="quote-button"  onClick={() => scrollToSection("contact")}>GET A QUOTE</button>
                </div>
            </div>
        </div>
    );
};