import React from "react";

import {makeStyles} from "@material-ui/core/styles"

import {Grid, Card, CardActions, CardContent, Button, Typography, Divider} from "@material-ui/core"

import {Delete, Edit} from '@material-ui/icons'


const useStyles = makeStyles({
    card: {
        backgroundColor: 'whitesmoke',
        padding: 20,
        transition: "0.6s",
        maxWidth: 600,

    },
    grid : {
        padding: 20,
    }
})

export default function Case(props){

    const classes = useStyles();

    return (
        <div style={{marginTop: 20}}>
            <Card className={classes.card}>
            <CardContent>

                <Typography variant="h4">
                     Case # {props.id}
                </Typography>
                <Divider style={{margin: 20}}/>
                    <Typography gutterBottom variant="h5">Client's Information </Typography>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={6}>Name</Grid><Grid item xs={6}>{props.name} </Grid>
                        <Grid item xs={6}>Age</Grid><Grid item xs={6}>{props.age} </Grid>
                        <Grid item xs={6}>Current City</Grid><Grid item xs={6}>{props.current_city} </Grid>
                        <Grid item xs={6}>Hometown</Grid><Grid item xs={6}>{props.home_town} </Grid>
                        <Grid item xs={6}>Contact</Grid><Grid item xs={6}>{props.contact} </Grid>
                    </Grid>
                    <Divider style={{margin: 20}}/>
                        <Typography gutterBottom variant="h5">Client's Relative Information </Typography>

                    <Grid container spacing={2} className={classes.grid}>
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
        </div>
    )
}