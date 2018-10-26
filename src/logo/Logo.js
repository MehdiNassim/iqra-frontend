import React from "react";
import logo from '../images/logo.png';
import './Logo.css';

// toolbar height="72"

const Logo = props => {
  const { classToolbar, appName } = props;
  return (
    <div className={`${classToolbar} logo-container`}>
      <img className="logo-img" src={logo} alt={appName} />
      <h3 className="logo-text">{appName}</h3>
    </div>
  );
};

export default Logo;
