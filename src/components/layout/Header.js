import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import {logoutUser} from '../../actions'
import {AppBar, Toolbar, Grid, Button, IconButton} from "@material-ui/core"
import {Dialog, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateNewCase from './../caseComponents/CreateCaseForm'

export default function Header(props) {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      
        <Toolbar>
          <Grid container justify="space-between">
          <span>
            Miracle Messages Volunteer Dashboard
          </span>
          <span>
          <IconButton edge="start" color="inherit" aria-label="avatar">
            <AccountCircle />
          </IconButton>
          <Button color="inherit">My Cases</Button>
          <Button color="inherit" onClick={handleClickOpen}>Add a new case</Button>
            <Dialog open={open}
            onClose={handleClose}>
            <DialogTitle id="creat-a-new-case">Create a New Case</DialogTitle>
            <DialogContent>
            <DialogContentText>Please provide client's information as below</DialogContentText>
            <CreateNewCase />
            </DialogContent>
      </Dialog>
          <Button color="inherit" onClick={()=> dispatch(logoutUser(props))}>Log Out</Button>
          </span>
          </Grid>
        </Toolbar>
      </AppBar>
  )
}