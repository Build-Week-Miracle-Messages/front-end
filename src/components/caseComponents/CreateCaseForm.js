import React, {useState} from "react";
import axios from "axios";


//styling
import {makeStyles} from "@material-ui/styles"
import {Button, Paper, Checkbox, TextField, Typography} from "@material-ui/core"

//import Formik and Yup
import {withFormik, Form} from "formik";
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

export default function CreateNewCase(props){
    const classes = useStyles();

    const [clients, setClient] = useState({
        clientname: "",
        age: "",
        hometown: "",
        current_city: "",
        contact_info: "",
        note: "",
        sensitive: false
    })

    const inputChanges = event => {
        setClient({
            ...clients, 
            [event.target.name]: event.target.value
        })
    }

    return (
        <Paper>

        <Form className={classes.paper}>

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
        <Checkbox checked={clients.sensitive} /> <Typography>Check if this is a sensitive case.</Typography>
        
      />
        <Button className={classes.button} variant="contained" color="primary">Create Case</Button>
        </Form>
        </Paper>
    )
}

export const FormikNewCase = withFormik({
    mapPropsToValues({clientname, age, current_city, hometown, contact_info, note, sensitive}){
        return {
            clientname: clientname || "",
            age: age || "",
            current_city: current_city || "",
            hometown: hometown || "",
            contact_info: contact_info || "",
            note: note || "",
            sensitive: sensitive || false,
        }

    },

    validationSchema: Yup.object().shape({
        clientname: Yup.string().required(`* Client's Name cannot be blank`),
        age: Yup.number().required(`* Please input client's age`),
        current_city: Yup.string().required(`* Current city cannot be blank`),
        hometown: Yup.string().required(`* Please advised client's hometown. If unknown, please put N/A`),
        contact_info:  Yup.string().required(`* Please advised the best way to contact client`)
    }),

    handleSubmit(values, {resetForm, setSubmitting, setStatus}){
        axios
            .post("https://reqres.in/api/users",values)
            .then(res =>{
                resetForm();
                console.log(res)
                setStatus(res.data);

            })
            .catch(err => {
                console.log("CODE RED", err);
            }) 
            .finally(()=>{
                setSubmitting(false)
            })
    }
})(CreateNewCase)
