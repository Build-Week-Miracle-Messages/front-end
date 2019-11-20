import React, {useState} from "react";
import axios from "axios";

import {postRegisterUser} from "./../../actions";
import {useDispatch} from "react-redux";

import useForm from "react-hook-form";
import * as Yup from "yup";

//styling
import {Button, Paper, TextField, Typography, Avatar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

//Formik
// import {withFormik, Form} from 'formik';
// import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.number().required("Username is required"),
  email: Yup.string().email("Valid Email Address is required").required("Email is required"),
  password: Yup.string().required("Password is required"),
})


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
  


export default function SignUp(props){

    const {register, errors} = useForm({
      validationSchema: SignupSchema
    })
    const dispatch = useDispatch();
    const classes = useStyles();
    const [registerUsers, setUsers] = useState({})
    
    const handleSubmit = e => {
      e.preventDefault()
      dispatch(postRegisterUser({ props, registerUsers }))
  }

    const handleChange = e => {
      setUsers({ ...registerUsers, [e.target.name]: e.target.value })
    }

    return (
        <div className={classes.paper}>
            
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
        <form className={classes.paper} onSubmit={handleSubmit}>
            
        <TextField
          required
          id="name"
          label="Name"
          className={classes.textField}
          margin="normal"
          name="name"
          variant="outlined"
          onChange={handleChange}
          autoFocus
        />

        <TextField
          required
          id="username"
          label="Username"
          className={classes.textField}
          margin="normal"
          name="username"
          variant="outlined"
          onChange={handleChange}
          autoFocus
        />

        <TextField
          required
          id="email"
          label="Email"
          className={classes.textField}
          margin="normal"
          name="email"
          variant="outlined"
          onChange={handleChange}
          autoFocus
        />

        <TextField
          required
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          margin="normal"
          name="password"
          variant="outlined"
          onChange={handleChange}
          autoFocus
        />


        <Button className={classes.button} type="submit" variant="contained" color="primary" > 
          Submit
        </Button>
        </form>
        </div>
    )


}

// export const FormikRegister = withFormik({
  
//   mapPropsToValues({name, username, email, password}){
//       return {
//           name: name || "",
//           username : username || "",
//           email: email || "",
//           password : password || "",
//       }
//   },

//   validationSchema: Yup.object().shape({
//       name: Yup.string().required(`* Name cannot be blank`),
//       username: Yup.string().required(`* Username cannot be blank`),
//       email: Yup.string().email(`Please enter a valid email`).required(`* Please provide your email address`),
//       password: Yup.string().min(8, '* Password must be 8 characters or longer').required('* Password is required'),
//   }),

//   handleSubmit(values){
//     dispatch(postRegisterUser(values))
// }
// })(SignUp)

// {touched.name && errors.name && (
//   <p>{errors.name}</p>
// )}

// {touched.email && errors.email && (
//   <p>{errors.email}</p>
// )}

// {touched.username && errors.username && (
//   <p>{errors.username}</p>
// )}

// {touched.password && errors.password && (
//   <p>{errors.password}</p>
// )}