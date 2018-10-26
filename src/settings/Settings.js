import React from 'react';
import './Settings.css';
import { Typography } from '@material-ui/core';
// import PropTypes from 'prop-types';
import logo from '../images/logo.png';

const Statistics = () => {
  return (
    <div className="notFoundBg">
      <div>
        <Typography className="notFoundText" variant="inherit">
          <h1>Settings</h1>
          Settings Page
          <br />
          <br />
        </Typography>
      </div>
      <img src={logo} alt="test" className="notFoundLogo" />
    </div>
  );
};

export default Statistics;
