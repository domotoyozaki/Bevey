import 'App.css';
import { Grid, Typography, Button, makeStyles} from '@material-ui/core';
import React from 'react';
import logo from 'images/mainLogo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  greeting: {
    fontFamily: 'Comfortaa',
    color: 'white'
  },
});

const Start = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems='center' justify='center' direction='column' style={{height: '100vh'}}>
      <Grid container direction='column' alignItems='center' spacing={9}>

        <Grid item>
          <Typography variant='h2' className={classes.greeting}>Welcome to Bevey!</Typography>
        </Grid>

        <Grid item justify='center' alignItems='center'>
          <img style={{ width: '250px', height: 'auto', margins: '0 auto 0 auto' }} src={logo} alt='Bevey Main Logo'/>
        </Grid>

        <Grid item>
          <Button className={classes.greeting} variant="contained" color='primary' component={Link} to='/home'>Get Started</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Start;