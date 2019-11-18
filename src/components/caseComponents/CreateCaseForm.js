import React, {useState} from "react";


//styling
import {makeStyles} from "@material-ui/styles"
import {Button, Paper, Grid, TextField} from "@material-ui/core"

//import Formik and Yup
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";


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
    }
  }));

export default function CreateNewCase({values}){
    const classes = useStyles();

    const [clients, setClient] = useState({
        clientname: "",
        age: "",
        hometown: "",
        current_city: "",
        contact_info: "",
        note: ""
    })
    const inputChanges = event => {
        setClient({
            ...clients, 
            [event.target.name]: event.target.value
        })
    }

    // const formSubmission = event =>{
    //     event.preventDefault();
    //     // props.addNewClient(clients);
    //     setClient({clientname: "", email: ""})
    // }

    return (
        <Paper>

        <form className={classes.paper}>

        <TextField
          required
          id="standard-required"
          label="Client's Name"
          className={classes.textField}
          margin="normal"
          onChange={inputChanges}
          value={clients.clientname}
        />
        <TextField
          required
          id="standard-required"
          label="Client's Age"
          className={classes.textField}
          margin="normal"
          onChange={inputChanges}
          value={clients.age}
        />
        <TextField
          required
          id="standard-required"
          label="Client's Current City"
          className={classes.textField}
          margin="normal"
          onChange={inputChanges}
          value={clients.current_city}
        />
        <TextField
          required
          id="standard-required"
          label="Client's Hometown"
          className={classes.textField}
          margin="normal"
          onChange={inputChanges}
          value={clients.hometown}
        />
        <TextField
          required
          id="standard-required"
          label="Client's Contact Information"
          className={classes.textField}
          margin="normal"
          onChange={inputChanges}
          value={clients.contact_info}
        />
         <TextField
          id="standard-required"
          label="Note"
          className={classes.textField}
          margin="normal"
          onChange={inputChanges}          
          value={clients.note}
        />
        <Button className={classes.button} variant="contained" color="primary">Create Case</Button>
        </form>
        </Paper>
    )
}