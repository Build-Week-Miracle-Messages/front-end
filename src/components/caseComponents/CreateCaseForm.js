import React, {useState} from "react";

//styling
import {makeStyles} from "@material-ui/styles"
import {Button, Paper, Checkbox, TextField, Typography} from "@material-ui/core"



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
    const {values, touched, errors, isSubmitting } = props;
    const classes = useStyles();

    const [clients, setClients] = useState({})

    const handleSubmit = e => {
      e.preventDefault()
      // dispatch(postRegisterUser({ props, clients }))
  }

    const handleChange = e => {
      setClients({ ...clients, [e.target.name]: e.target.value })
    }

    return (
        <Paper>

        <form className={classes.paper}>

        <TextField
          required
          id="name"
          label="Client's Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="name"
          autoFocus
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
        />


        <Checkbox checked={values.sensitive} name="sensitive"/> <Typography>Check if this is a sensitive case.</Typography>

        <TextField
          id="connect_name"
          label="Note"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_name"
          autoFocus
        />

        <TextField
          id="connect_age"
          label="Note"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_age"
          autoFocus
          /> 

        <TextField
          id="connect_relationship"
          label="Note"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_relationship"
          autoFocus
        />

        <TextField
          id="connect_location"
          label="Note"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_location"
          autoFocus
        />

        <Button className={classes.button} variant="contained" color="primary">
          Create a Case
        </Button>
        </form>
        </Paper>
    )
}

// export const FormikNewCase = withFormik({
//     mapPropsToValues({name, age, current_city, hometown, contact_info, note, sensitive}){
//         return {
//             name: name || "",
//             age: age || "",
//             current_city: current_city || "",
//             hometown: hometown || "",
//             contact_info: contact_info || "",
//             note: note || "",
//             sensitive: sensitive || false,
//         }

//     },

//     validationSchema: Yup.object().shape({
//         name: Yup.string().required(`* Client's Name cannot be blank`),
//         age: Yup.number().required(`* Please input client's age`),
//         current_city: Yup.string().required(`* Current city cannot be blank`),
//         hometown: Yup.string().required(`* Please advised client's hometown. If unknown, please put N/A`),
//         contact_info:  Yup.string().required(`* Please advised the best way to contact client`)
//     }),

//     handleSubmit(values, {resetForm, setSubmitting}){
//         axios
//             .post("https://reqres.in/api/users",values)
//             .then(res =>{
//                 resetForm();
//                 console.log(res)

//             })
//             .catch(err => {
//                 console.log("CODE RED", err);
//             }) 
//             .finally(()=>{
//                 setSubmitting(false)
//             })
//     }
// })(CreateNewCase)
