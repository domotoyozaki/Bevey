import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import logo from 'images/mainLogo.png';

const Start = () => {
  return (
    <Grid>
      <Typography variant='h1'>Welcome to Bevey!</Typography>
      <img src={logo} alt='Bevey Main Logo'/>
    </Grid>
  );
}

export default Start;