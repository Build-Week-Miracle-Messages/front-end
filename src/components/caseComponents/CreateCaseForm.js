import React, {useState} from "react";

import useForm from "react-hook-form"

import {useDispatch} from 'react-redux'

import {createCase, updateCase} from '../../actions'

//styling
import {makeStyles} from "@material-ui/styles"
import {Grid, Button, Paper, Checkbox, TextField, Switch, FormControlLabel, Collapse, Avatar, Typography} from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { TextFields } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    textField: {
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
    },

  }));
  
export default function CreateNewCase(props){

    const { register, handleSubmit, errors} = useForm()
    const classes = useStyles();
    const dispatch = useDispatch()

    const [checked, setChecked] = useState(false)
    
    //const [clients, setClients] = useState({})

    const onSubmit = values => {
      dispatch(createCase(values))
      props.handleClose()
    }
    
   // const handleChange = e => {
   //   setClients({ ...clients, [e.target.name]: e.target.value })
   // }
    

    const toggleForm = () => {
      setChecked(prev => !prev);
    };

    return (
        <div className={classes.paper}>
        <Avatar><AccountCircleIcon />
        </Avatar>
        <form className={classes.paper} onSubmit={handleSubmit(onSubmit)}>

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
          inputRef={register({ required: true})}
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
          inputRef={register({ min: 0, max: 120 })}
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
          inputRef={register({ required: true})}
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
          inputRef={register({ required: true})}
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
          inputRef={register({ required: true})}
        />



        <FormControlLabel
        control={<Checkbox name="sensitive" inputRef={register}/>} label="Is this a sensitive case?" />

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
          defaultValue="N/A"
          autoFocus
          inputRef={register}
        />


        <TextField
          id="connect_age"
          label="Relative's Age"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_age"
          defaultValue="N/A"
          autoFocus
          inputRef={register}
          /> 

        <TextField
          id="connect_relationship"
          label="Relationship with Client"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_relationship"
          defaultValue="N/A"
          autoFocus
          inputRef={register}
        />
        <TextField
          id="connect_location"
          label="Last Known Location"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="connect_location"
          defaultValue="N/A"
          autoFocus
          inputRef={register}
        />
        
          </Grid>
        </Collapse>
        </div>

        <Button className={classes.button} type="submit" variant="contained" color="primary">
          Create a Case
        </Button>
        </form>
        </div>
    )
}

export function EditForm(props){

  const classes = useStyles();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors} = useForm()
  const requiredTopics = [{"keyword":"name", "label": "Name"}, {"keyword":"age", "label": "Age"}, {"keyword":"current_city", "label": "Current City"}, {"keyword":"home_town", "label": "Hometown"}]
  const notRequiredTopics = [{"keyword":"connect_name", "label": "Name"}, {"keyword":"connect_age", "label": "Age"}, {"keyword":"connect_relationship", "label": "Relationship"}, {"keyword":"connect_location", "label": "Location"}]
  console.log(props)
  
  const onEditSubmit = editData => {
    dispatch(updateCase({ id: props.props.id , ...editData }))
    props.handleClose()
  }


  return (
    <div>
      <form className={classes.paper} onSubmit={handleSubmit(onEditSubmit)}>
        
       <FormControlLabel
        control={<Checkbox name="sensitive" inputRef={register}/>} label="Is this a sensitive case?" />
      <Typography variant="title">Client's Information</Typography>
      {
        requiredTopics.map(each => 
            <TextField
            className={classes.textField}
            required
            id={each.keyword}
            name={each.keyword}
            label={each.label}
            defaultValue={props.props[each.keyword]}
            inputRef={register({ required: true})}
            />
          
        )
      }
      <Typography variant="title"><br /> Client's Relative Information</Typography>
      {
        notRequiredTopics.map(each => 
            <TextField
            className={classes.textField}
            id={each.keyword}
            name={each.keyword}
            label={each.label}
            defaultValue={props.props[each.keyword]}
            inputRef={register}
          />        
        )
      }

        <Button className={classes.button} type="submit" variant="contained" color="primary">
          Edit
        </Button>
      </form>
    </div>
  )
}