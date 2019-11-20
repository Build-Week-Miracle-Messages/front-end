import React from "react";

import {makeStyles} from '@material-ui/core/styles'
import {Grid, Card, CardActions, CardContent, Button, Typography} from "@material-ui/core"

import {Dialog, DialogActions,DialogContent, DialogContentText, DialogTitle}  from '@material-ui/core';

import {Delete, Edit} from '@material-ui/icons'

const useStyles = makeStyles({

})

export default function Case(value){
    return (
        <Grid item style={{ padding: 20}}>
            <Card style={{padding: 20}}>
            <CardContent>

                <Typography variant="h4">
                    Case Number {value.id}
                </Typography>

                    <Typography variant="h5">Client's Information </Typography>

                    <Grid container spacing={2} xs={12}>
                        <Grid item xs={6}>Client's Name</Grid><Grid item xs={6}> {value.name}</Grid>
                        <Grid item xs={6}>Client's Age</Grid><Grid item xs={6}> {value.age}</Grid>
                        <Grid item xs={6}>Current City</Grid><Grid item xs={6}> {value.current_city}</Grid>
                        <Grid item xs={6}>Hometown</Grid> <Grid item xs={6}>  {value.home_town} </Grid>
                        <Grid item xs={6}>Contact Information</Grid><Grid item xs={6}>{value.contact_info} </Grid>
                    </Grid>

                        <Typography variant="h5">Client's Relative Information </Typography>

                    <Grid container spacing={2} xs={12}>
                        <Grid item xs={6}>Name</Grid><Grid item xs={6}>{value.connect_name} </Grid>
                        <Grid item xs={6}>Age</Grid><Grid item xs={6}>{value.connect_age} </Grid>
                        <Grid item xs={6}>Relationship</Grid><Grid item xs={6}>{value.connect_relationship} </Grid>
                        <Grid item xs={6}>Location</Grid><Grid item xs={6}>{value.connect_location} </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                <Grid container justify="flex-end">
                    <Button color="primary"><Edit /></Button>
                    <Button color="primary"><Delete /></Button>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    )
}