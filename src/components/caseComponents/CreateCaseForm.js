import React, {useState} from "react";

import useForm from "react-hook-form"
import * as Yup from "yup"

//styling
import {makeStyles} from "@material-ui/styles"
import {Grid, Button, Paper, Checkbox, TextField, Typography, Switch, FormControlLabel, Collapse, Avatar} from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'



const ClientSchema = Yup.object().shape({
  name: Yup.string().required("Client's name is required"),
  age: Yup.number().required("Number is required").positive("Age has to be positive").integer("Age has to be an interger"),
  home_town: Yup.string().required("Client's hometown is required"),
  current_city: Yup.string().required("Client's current city is required"),
  contact: Yup.string().required("Client's contact is required"),
  connect_name: Yup.string(),
  connect_age: Yup.number().positive("Age has to be positive").integer("Age has to be an integer"),
  connect_relationship: Yup.string()
})

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
    const { register, errors } = useForm({
      validationSchema: ClientSchema
    })
    const classes = useStyles();

    const [checked, setChecked] = useState(false)
    
    const [clients, setClients] = useState({})

    const handleSubmit = e => {
      e.preventDefault()
      // dispatch(postRegisterUser({ props, clients }))
  }
    
    const handleChange = e => {
      setClients({ ...clients, [e.target.name]: e.target.value })
    }

    const toggleForm = () => {
      setChecked(prev => !prev);
    };

    return (
        <Paper className={classes.paper}>
        <Typography variant="h5">Create a new case</Typography>
        <Avatar><AccountCircleIcon />
        </Avatar>
        Please complete the information below
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
        {errors.name && <p>{errors.name.message}</p>}
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
        {errors.age && <p>{errors.age.message}</p>}

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
        {errors.current_city && <p>{errors.current_city.message}</p>}

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
        {errors.home_town && <p>{errors.home_town.message}</p>}

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
        {errors.contact && <p>{errors.contact.message}</p>}


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
        {errors.connect_name && <p>{errors.connect_name .message}</p>}

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
        {errors.connect_age && <p>{errors.connect_age .message}</p>}
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
         {errors.connect_relationship && <p>{errors.connect_relationship.message}</p>}

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
         {errors.connect_location && <p>{errors.connect_location.message}</p>}
          </Grid>
        </Collapse>
        </div>

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
