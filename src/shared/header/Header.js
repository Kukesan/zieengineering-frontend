import React, { useState } from 'react';
import './header.css';
import logo from '../../assests/png/landingLogo.png'; // Update with the actual path to your logo image

const Header = ({scrollToSection}) => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </a>
                <div className="navbar-toggle" onClick={toggleMobileMenu}>
                    <span className="navbar-toggle-icon">&#9776;</span>
                </div>
                <div className={isMobile ? "navbar-menu mobile" : "navbar-menu"}>
                    <div className="navbar-item">
                        <a  onClick={() => scrollToSection("home")} className="navbar-link">Home</a>
                    </div>
                    <div className="navbar-item">
                        <a  onClick={() => scrollToSection("aboutUs")} className="navbar-link">About Us</a>
                    </div>
                    <div className="navbar-item">
                        <a  onClick={() => scrollToSection("services")} className="navbar-link">Our Industries</a>
                    </div>
                    <div className="navbar-item">
                        <a  onClick={() => scrollToSection("gallery")} className="navbar-link">Gallery</a>
                    </div>
                    <div className="navbar-item">
                        <a  onClick={() => scrollToSection("reviews")} className="navbar-link">Reviews</a>
                    </div>
                    <div className="navbar-item">
                        <a  onClick={() => scrollToSection("contact")} className="navbar-link">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
