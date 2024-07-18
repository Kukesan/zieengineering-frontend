import React from "react";
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <img className="header-logo-img" src="https://media.istockphoto.com/id/1345681613/vector/creative-people-logo-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=9XUHICA1ljbxBcLw8ERp0kDDxLNQ8Bp2yR4aUSS6SBs=" alt="Zie Engineering" />
        </div>
        <h3 className='header-heading'>Zie Engineering</h3>
      </div>
    </header>
  );
}

export default Header;