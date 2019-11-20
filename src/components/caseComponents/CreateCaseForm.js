import React, {useState} from "react";

import useForm from "react-hook-form"

//styling
import {makeStyles} from "@material-ui/styles"
import {Grid, Button, Paper, Checkbox, TextField, Switch, FormControlLabel, Collapse, Avatar} from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(theme => ({
    textField: {
      width: 400,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    button: {
        width: 400,
        margin: 30,
    },

  }));
  
export default function CreateNewCase(props){
    const { register} = useForm()
    const classes = useStyles();

    const [checked, setChecked] = useState(false)
    
    //const [clients, setClients] = useState({})

    const handleSubmit = e => {
      e.preventDefault()
      // dispatch(postRegisterUser({ props, clients }))
  }
    
    //const handleChange = e => {
    // setClients({ ...clients, [e.target.name]: e.target.value })
    //}

    const toggleForm = () => {
      setChecked(prev => !prev);
    };

    return (
        <div className={classes.paper}>
        <Avatar><AccountCircleIcon />
        </Avatar>
        <form className={classes.paper} onSubmit={handleSubmit}>

        <TextField
          required
          id="name"
          type="text"
          label="Client's Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="name"
          autoFocus
          ref={register}
        />

        <TextField
          required
          id="age"
          label="Client's Age"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="age"
          autoFocus
          ref={register}
        />


        <TextField
          required
          id="current_city"
          label="Client's Current City"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="current_city"
          autoFocus
          ref={register}
        />


        <TextField
          required
          id="home_town"
          label="Client's Hometown"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="home_town"
          autoFocus
          ref={register}
        />


        <TextField
          required
          id="contact"
          label="Client's Contact Information"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="contact"
          autoFocus
          ref={register}
        />



        <FormControlLabel
        control={<Checkbox name="sensitive" ref={register}/>} label="Is this a sensitive case?" />

        <FormControlLabel
        control={<Switch checked={checked} onChange={toggleForm} />}
        label="Does client have anybody they wish to connect with?"/>
        <div>
        <Collapse in={checked}>
          <Paper elevation={10} >

          </Paper>
        </Collapse>
        <Collapse in={checked}>
          <Grid elevation={10} className={classes.paper}>
          <TextField
          id="connect_name"
          label="Relative's Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_name"
          autoFocus
          ref={register}
        />


        <TextField
          id="connect_age"
          label="Relative's Age"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_age"
          autoFocus
          ref={register}
          /> 

        <TextField
          id="connect_relationship"
          label="Relationship with Client"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_relationship"
          autoFocus
          ref={register}
        />
        <TextField
          id="connect_location"
          label="Last Known Location"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_location"
          autoFocus
          ref={register}
        />
        
          </Grid>
        </Collapse>
        </div>

        <Button className={classes.button} variant="contained" color="primary">
          Create a Case
        </Button>
        </form>
        </div>
    )
}