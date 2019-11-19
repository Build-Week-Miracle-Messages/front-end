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
    const {values, handleChange, handleBlur, touched, errors, isSubmitting } = props;
    const classes = useStyles();


    return (
        <Paper>

        <Form className={classes.paper}>

        <TextField
          required
          id="name"
          label="Client's Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          required
          id="age"
          label="Client's Age"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.age && errors.age && (
          <p>{errors.age}</p>
        )}
        <TextField
          required
          id="current_city"
          label="Client's Current City"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="current_city"
          value={values.current_city}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.current_city && errors.current_city && (
          <p>{errors.current_city}</p>
        )}
        <TextField
          required
          id="hometown"
          label="Client's Hometown"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="hometown"
          value={values.hometown}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.hometown && errors.hometown && (
          <p>{errors.hometown}</p>
        )}
        <TextField
          required
          id="contact_info"
          label="Client's Contact Information"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="contact_info"
          value={values.contact_info}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.contact_info && errors.contact_info && (
          <p>{errors.contact_info}</p>
        )}
         <TextField
          id="note"
          label="Note"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="note"
          value={values.note}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Checkbox checked={values.sensitive} name="sensitive"/> <Typography>Check if this is a sensitive case.</Typography>

        <Button className={classes.button} variant="contained" color="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create a Case'}
        </Button>
        </Form>
        </Paper>
    )
}

export const FormikNewCase = withFormik({
    mapPropsToValues({name, age, current_city, hometown, contact_info, note, sensitive}){
        return {
            name: name || "",
            age: age || "",
            current_city: current_city || "",
            hometown: hometown || "",
            contact_info: contact_info || "",
            note: note || "",
            sensitive: sensitive || false,
        }

    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(`* Client's Name cannot be blank`),
        age: Yup.number().required(`* Please input client's age`),
        current_city: Yup.string().required(`* Current city cannot be blank`),
        hometown: Yup.string().required(`* Please advised client's hometown. If unknown, please put N/A`),
        contact_info:  Yup.string().required(`* Please advised the best way to contact client`)
    }),

    handleSubmit(values, {resetForm, setSubmitting}){
        axios
            .post("https://reqres.in/api/users",values)
            .then(res =>{
                resetForm();
                console.log(res)

            })
            .catch(err => {
                console.log("CODE RED", err);
            }) 
            .finally(()=>{
                setSubmitting(false)
            })
    }
})(CreateNewCase)
