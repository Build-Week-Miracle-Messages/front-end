import React from "react"

import {AppBar, Toolbar, Grid, Button, Typography, IconButton} from "@material-ui/core"
import AccountCircle from '@material-ui/icons/AccountCircle';


export default function Header() {



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
          <Button color="inherit">Add a new case</Button>
          <Button color="inherit">Log Out</Button>
          </span>
          </Grid>
        </Toolbar>
      </AppBar>
  )
}