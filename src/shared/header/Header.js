import React from "react";
import './header.css';
import logoSvg from '../../assests/png/landingLogo.png';
import australiaImg from '../../assests/png/australia.png';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <img className="header-logo-img" src={logoSvg} alt="Zie Engineering" />
        </div>
        <img className="australia-img" src={australiaImg}></img>
        <h3 className='header-heading'>100% Australian Product</h3>
      </div>
    </header>
  );
}

export default Header;