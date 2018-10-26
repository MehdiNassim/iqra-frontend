import React from 'react';
import { Typography } from '@material-ui/core';
import './Footer.css';
import logo from '../images/logo.png';

const Footer = () => (
  <div className="footerBg">
    <Typography className="footerText" variant="inherit">
      <img src={logo} alt="logo" className="footerLogo" />© COPYRIGHT Iqra - 2018.
    </Typography>
  </div>
);

export default Footer;
