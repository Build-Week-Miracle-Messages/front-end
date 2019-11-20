import React from "react";

import {Grid, Card, CardActions, CardContent, Button, Typography} from "@material-ui/core"

import {Delete, Edit} from '@material-ui/icons'

export default function Case(props){


    return (
        <Grid item style={{ padding: 20}}>
            <Card style={{padding: 20}}>
            <CardContent>

                <Typography variant="h4">
                    Case Number {props.id}
                </Typography>

                    <Typography variant="h5">Client's Information </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>Client's Name</Grid><Grid item xs={6}> {props.name}</Grid>
                        <Grid item xs={6}>Client's Age</Grid><Grid item xs={6}> {props.age}</Grid>
                        <Grid item xs={6}>Current City</Grid><Grid item xs={6}> {props.current_city}</Grid>
                        <Grid item xs={6}>Hometown</Grid> <Grid item xs={6}>  {props.home_town} </Grid>
                        <Grid item xs={6}>Contact Information</Grid><Grid item xs={6}>{props.contact_info} </Grid>
                    </Grid>

                        <Typography variant="h5">Client's Relative Information </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>Name</Grid><Grid item xs={6}>{props.connect_name} </Grid>
                        <Grid item xs={6}>Age</Grid><Grid item xs={6}>{props.connect_age} </Grid>
                        <Grid item xs={6}>Relationship</Grid><Grid item xs={6}>{props.connect_relationship} </Grid>
                        <Grid item xs={6}>Location</Grid><Grid item xs={6}>{props.connect_location} </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                <Grid container justify="flex-end">
                    <Button color="primary" onClick={()=> props.onEdit(props.id)}><Edit /></Button>
                    <Button color="primary" onClick={()=> props.onDelete(props.id)}><Delete /></Button>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    )
}