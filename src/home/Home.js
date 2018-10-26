import React from 'react';
import './Home.css';
import { Typography } from '@material-ui/core';
import logo from '../images/logo.png';

const Home = () => (
  <div className="homeBg">
    <Typography className="homeText" variant='inherit'>
      <b>Iqra - dyslexia tech solution </b>
      Iqra : <br />
      read, <br />
      evaluate, <br />
      manage, <br />
      your students.
      <br />
    </Typography>
    <img src={logo} alt="logo YAssir" className="homeLogo" />
  </div>
);

export default Home;
