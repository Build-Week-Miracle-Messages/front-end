import React from "react";
import {Paper, Tabs, Tab, Toolbar, Typography, Button, IconButton} from "@material-ui/core"

export function Nav() {
  return (
    <Paper>
      <Tabs centered indicatorColor="primary" textColor="primary">
        <Tab label="My Cases" />
        <Tab label="Add a New Case" />
        <Tab label="Log Out" />
      </Tabs>
    </Paper>
  )
  }