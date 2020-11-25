import React from 'react';
import { Grid, Typography, Button, Avatar, makeStyles, TextField } from '@material-ui/core';
import user from 'images/domo.png'
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  header: {
    fontFamily: 'Comfortaa',
    color: 'white'
  },
  edit: {
    color: '#017896'
  }
}));

const Profile = () => {
  const classes = useStyles();
  const [name, setName] = useState("Your Username");
  return (
    <Grid container alignItems='center' direction='column' style={{height: '100vh', marginTop: '40px'}}>
      <Grid container direction='column' alignItems='center' spacing={3}>
        <Grid item>
          <Typography className={classes.header} variant='h2' align='center'>{name}</Typography>
          <Grid item>
            <Typography onClick={() => setName('domo_toyozaki')} className={classes.header, classes.edit} variant='h6' align='center'>Edit Username</Typography>
          </Grid>
        </Grid>

        <Grid item justify='center' alignItems='center'>
          {/* <img style={{ width: '200px', height: 'auto', margins: '0 auto 0 auto' }} alt="User profile picture" src={user} /> */}
          <Avatar alt="Profile picture" src={user} className={classes.large} />
        </Grid>

        <Grid item>
          <Typography className={classes.header} variant='h3' align='center'>About Me:</Typography>
          <Grid item>
            <Typography className={classes.header} variant='h6' align='center'>Hi! My name is Domo, and I am the founder of Bevey. Nice to meet you!</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Typography className={classes.header} variant='h4' align='center'>Current Goals:</Typography>
          <Grid item>
            <Typography className={classes.header} variant='h5' align='center'>Art</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.header} variant='h5' align='center'>Dance</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.header} variant='h5' align='center'>Fitness</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Typography className={classes.header} variant='h4' align='center'>Past Goals:</Typography>
          <Grid item>
            <Typography className={classes.header} variant='h5' align='center'>Art</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.header} variant='h5' align='center'>Dance</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.header} variant='h5' align='center'>Fitness</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Profile;