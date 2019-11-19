import React from "react";

import {Grid, Card, CardActions, CardContent, Button} from "@material-ui/core"

export default function Case(value){
    return (
        <Grid item style={{ padding: 20}}>
            <Card style={{padding: 20}}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={6}>Case Number</Grid><Grid item xs={6}>{value.id}</Grid>
                        <Grid item xs={6}>Name</Grid><Grid item xs={6}> {value.name}</Grid>
                        <Grid item xs={6}>Age</Grid><Grid item xs={6}> {value.age}</Grid>
                        <Grid item xs={6}>Current City</Grid><Grid item xs={6}> {value.current_city}</Grid>
                        <Grid item xs={6}>Hometown</Grid> <Grid item xs={6}>  {value.hometown} </Grid>
                        <Grid item xs={6}>Contact Information</Grid><Grid item xs={6}>{value.contact_info} </Grid>
                        <Grid item xs={6}> Note</Grid><Grid item xs={6}>{value.note} </Grid>
                    </Grid>
                </CardContent>
                <CardActions centered>
                    <Button color="primary">Edit</Button>
                    <Button color="primary">Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}