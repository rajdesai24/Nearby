import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import UserNav from "../Parts/UserNav";
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Button} from "@material-ui/core";

var wcmLocations = [{street: "2016 Park Falls Drive",
street2: "",
city: "Raleigh", 
state: "NC",
zipCod: "27614"}];

console.log(wcmLocations);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:"95px",
    marginRight:"20px"
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper3: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper4: {
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper5: {
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper6: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <>
      <UserNav/>
      <h1 style={{marginLeft:"490px"}}>Let's find you an experiance to make your day!!</h1><br/><br/>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper1} style={{backgroundColor:"rgb(100,149,596)",fontSize:"25px"}}>Tell everyone about you</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper2} style={{backgroundColor:"rgb(238,65,87)",fontSize:"25px"}}>Pick a category</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper3} >
            <textarea style={{width:"600px", marginLeft:"-30px"}} rows="12"></textarea>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper4} >
          <FormControl component="fieldset">
     
            <RadioGroup  > 
              <FormControlLabel value="Music" control={<Radio color="primary" />} label="Music" />
              <FormControlLabel value="Comedy" control={<Radio color="primary" />} label="Comedy" />
              <FormControlLabel value="Gaming" control={<Radio color="primary" />} label="Gaming" />
              <FormControlLabel value="Fun sport" control={<Radio color="primary" />} label="Fun Sport" />
              <FormControlLabel value="live street food" control={<Radio color="primary" />} label="Live street food" />
            </RadioGroup>
          </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper6} style={{backgroundColor:"rgb(920,190,190)",fontSize:"25px"}}>Choose your time slot</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper6} style={{backgroundColor:"rgb(260,206,48)",fontSize:"25px"}}>Choose your location</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper5}>
          <FormControl component="fieldset">
     
            <RadioGroup  > 
              <FormControlLabel value="Morning" control={<Radio color="primary" />} label="Morning" />
              <FormControlLabel value="Afternoon" control={<Radio color="primary" />} label="Afternoon" />
              <FormControlLabel value="Evening" control={<Radio color="primary" />} label="Evening" />
              <FormControlLabel value="Night" control={<Radio color="primary" />} label="Night" />
            </RadioGroup>
          </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper5}>
          
          </Paper>
        </Grid>
        
      </Grid>
      <Button style={{marginLeft:"550px", marginTop:"25px", marginBottom:"30px", backgroundColor:"black", color:"wheat", height:"50px"}}>find a customised experiance</Button>
    </div>
    </>
    
  );
}