import React, {useState} from "react";

import {postRegisterUser} from "./../../actions";
import {useDispatch} from "react-redux";

import useForm from "react-hook-form";

//styling
import {Button, TextField, Avatar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'



const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 350,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    button: {
        width: 350,
        margin: 30,
    }
  }));
  


export default function SignUp(props){

    const {register} = useForm()

    const dispatch = useDispatch();
    const classes = useStyles();
    const [registerUsers, setUsers] = useState({})
    
    const handleSubmit = e => {
      e.preventDefault()
      dispatch(postRegisterUser({ props, registerUsers }))
      props.handleClose()
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
          inputRef={register({ required: true})}
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
          ref={register({ required: true})}
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
          ref={register({ required: true})}
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
          ref={register({ required: true, minLength: 6})}
        />


        <Button className={classes.button} type="submit" variant="contained" color="primary" > 
          Submit
        </Button>
        </form>
        </div>
    )

}