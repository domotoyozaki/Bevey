import { Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  header: {
    fontFamily: 'Comfortaa',
    color: 'white'
  }
})
const Home = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems='center' direction='column' style={{height: '100vh', width: 'auto'}}>
      <Grid container direction='column' alignItems='center' spacing={9}>

        <Grid item>
          <Typography variant='h2' className={classes.header}>Home</Typography>
        </Grid>

        <Grid item>
          <Typography variant='h3' className={classes.header}>Art</Typography>
          <Typography variant='h3' className={classes.header}>Coding</Typography>
        </Grid>

        <Grid item>
          <Typography variant='h3' className={classes.header}>Cooking</Typography>
          <Typography variant='h3' className={classes.header}>Language</Typography>
        </Grid>

        <Grid item>
          <Typography variant='h3' className={classes.header}>Dance</Typography>
          <Typography variant='h3' className={classes.header}>Fitness</Typography>
        </Grid>

        <Grid></Grid>

      </Grid>
    </Grid>
  );
}

export default Home;