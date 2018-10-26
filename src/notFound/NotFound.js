import React from 'react';
import './NotFound.css';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';

const NotFound = props => {
  const { appName } = props;
  return (
    <div className="notFoundBg">
      <div>
        <Typography className="notFoundText" variant="inherit">
          <h1>Error 404</h1>
          Page not found.
          <br />
          <br />
        </Typography>
      </div>
      <img src={logo} alt={appName} className="notFoundLogo" />
    </div>
  );
};

NotFound.propTypes = {
  appName: PropTypes.string.isRequired,
};


export default NotFound;
