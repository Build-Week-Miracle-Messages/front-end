import React from "react"
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core"

export default function Header() {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="title">Miracle Messages Volunteer Dashboard</Typography>
    </Toolbar>
  </AppBar>
  )
}