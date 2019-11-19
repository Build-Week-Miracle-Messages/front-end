import React, {useState} from "react";
import axios from "axios";

//styling
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

//Formik
import {withFormik, Form} from 'formik';
import * as Yup from "yup";


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
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

export function SignUp(props){
    const {values, handleChange, handleBlur, touched, errors, isSubmitting } = props;
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            
        <Typography variant="h5" centered>Sign Up</Typography>
        <Form className={classes.paper}>
            
        <TextField
          required
          id="name"
          label="Name"
          className={classes.textField}
          margin="normal"
          name="name"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && (
                    <p>{errors.name}</p>
                )}
        <TextField
          required
          id="username"
          label="Username"
          className={classes.textField}
          margin="normal"
          name="username"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
          {touched.username && errors.username && (
            <p>{errors.username}</p>
          )}
        <TextField
          required
          id="email"
          label="Email"
          className={classes.textField}
          margin="normal"
          name="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <p>{errors.email}</p>
        )}
        <TextField
          required
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          margin="normal"
          name="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {touched.password && errors.password && (
          <p>{errors.password}</p>
        )}

        <Button className={classes.button} type="submit" variant="contained" color="primary" disabled={isSubmitting}> 
          {isSubmitting ? 'Submitting' : 'Submit'}
        </Button>
        </Form>
        </Paper>
    )
}

export const FormikRegister = withFormik({
    mapPropsToValues({name, username, email, password}){
        return {
            name: name || "",
            username : username || "",
            email: email || "",
            password : password || "",
        }

    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(`* Name cannot be blank`),
        username: Yup.string().required(`* Username cannot be blank`),
        email: Yup.string().email(`Please enter a valid email`).required(`* Please provide your email address`),
        password: Yup.string().min(8, '* Password must be 8 characters or longer').required('* Password is required'),
    }),

    handleSubmit(values, {resetForm, setSubmitting}){
      axios
          .post("https://reqres.in/api/users",values)
          .then(res =>{
              resetForm();

          })
          .catch(err => {
              console.log("CODE RED, err");
          }) 
          .finally(()=>{
              setSubmitting(false)
          })
  }
})(SignUp)