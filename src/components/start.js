import './start.css';
import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import logo from 'images/mainLogo.png';

const Start = () => {
  return (
    <Grid container alignItems='center' justify='center' direction='column' style={{height: '100vh'}}>
      <Grid container direction='column' alignItems='center' spacing={9}>

        <Grid item>
          <Typography className='comfortaa white-text' variant='h2' align='center'>Welcome to Bevey!</Typography>
        </Grid>

        <Grid item justify='center' alignItems='center'>
          <img style={{ width: '250px', height: 'auto', margins: '0 auto 0 auto' }} src={logo} alt='Bevey Main Logo'/>
        </Grid>

        <Grid item>
          <Button className='comfortaa white-text' size='large'>Get Started</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Start;