import React from 'react';
import './Teacher.css';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';
import TextField from '@material-ui/core/TextField';

const Teacher = props => {
  const { appName } = props;
  return (
    <div className="teacherBg">
      <div>
        <TextField type="search" />

        <Typography className="teacherText" variant="inherit">
          <h1>Error 404</h1>
          Page not found.
          <br />
          <br />
        </Typography>
      </div>
      <img src={logo} alt={appName} className="teacherLogo" />
    </div>
  );
};

Teacher.propTypes = {
  appName: PropTypes.string.isRequired,
};


export default Teacher;
