import React from "react"
import {useDispatch} from 'react-redux'
import {logoutUser} from '../../actions'
import {AppBar, Toolbar, Grid, Button, IconButton, Typography} from "@material-ui/core"
import {Dialog, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import {AccountCircle, Flare} from '@material-ui/icons/';
import CreateNewCase from './../caseComponents/CreateCaseForm'

export default function Header(props) {
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
          <Grid container justify="space-between" alignItems="center">
            <span>
              <Flare/>
              <Typography varaiant="h3" component="h5" color="inherit">
                Miracle Messages
              </Typography>
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