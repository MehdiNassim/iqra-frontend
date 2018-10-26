import React from 'react';
import './Statistics.css';
import { Typography } from '@material-ui/core';
// import PropTypes from 'prop-types';
import logo from '../images/logo.png';

const Statistics = () => {
  return (
    <div className="notFoundBg">
      <div>
        <Typography className="notFoundText" variant="inherit">
          <h1>Statistics</h1>
          Statistics Page
          <br />
          <br />
        </Typography>
      </div>
      <img src={logo} alt="test" className="notFoundLogo" />
    </div>
  );
};

export default Statistics;
