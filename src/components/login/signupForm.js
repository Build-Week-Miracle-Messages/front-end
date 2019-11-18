import React, {useState} from "react";

//styling
import {Button, Paper, TextField, Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


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
    const classes = useStyles();

    //form handling

    const [newUsers, setNewUser] = useState({
        fname: '',
        username: '',
        email: '',
        password: ''
    })

    const inputChanges = event => {
        setNewUser({
            ...newUsers, 
            [event.target.name]: event.target.value
        })
    }

    const formSubmission = event =>{
        event.preventDefault();
        props.addNewUser(newUsers);
        setNewUser({fname: "", email: ""})
    }
    //end of form handling

    return (
        <Paper className={classes.paper}>
            
        <Typography variant="h5" centered>Sign Up</Typography>
        <form className={classes.paper} onSubmit={formSubmission}>
            
        <TextField
          required
          id="standard-required"
          label="Name"
          className={classes.textField}
          margin="normal"
          value={newUsers.fname}
          onChange={inputChanges}
        />
        <TextField
          required
          id="standard-required"
          label="Username"
          className={classes.textField}
          margin="normal"
          value={newUsers.username}
          onChange={inputChanges}
        />
        <TextField
          required
          id="standard-password-input"
          label="Email"
          className={classes.textField}
          margin="normal"
          value={newUsers.email}
          onChange={inputChanges}
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          value={newUsers.password}
          onChange={inputChanges}
        />

        <Button className={classes.button} type="submit" variant="contained" color="primary"> Submit </Button>
            </form>
        </Paper>
    )
}

// export const FormikNewCaseForm = withFormik({
//     mapPropsToValues({name, username, email, password}){
//         return {
//             name: name || "",
//             username: username || "",
//             email: email || "",
//             password: password || "",
//             tos: tos || false,
//         }

//     },

//     validationSchema: Yup.object().shape({
//         name: Yup.string().required(`* Name cannot be blank`),
//         username: Yup.number().required(`* Username cannot be blank`),
//         email: Yup.string().email(`* Email not valid`).required(`* Please provide your email address`),
//         password: Yup.string().min(8, '* Password must be 8 characters or longer').required('* Password is required'),
//     }),
// })(CreateNewCase)