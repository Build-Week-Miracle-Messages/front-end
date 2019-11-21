import React, {useState, useEffect} from "react";
import Case from "./Case"

import {useSelector, useDispatch} from 'react-redux'

import {Grid, Typography} from "@material-ui/core"


import Header from "./../layout/Header"
import Footer from "./../layout/Footer"
import {dummyData} from "./dummydata"

import {getCurrentCases, deleteCase} from '../../actions'

export default function CaseList(props){

    const cases = useSelector(state => state.cases)
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteCase(id))
    }

    useEffect(() => {
        dispatch(getCurrentCases())
    },[])

    return(
        <Grid container direction="column" alignItems="center">
            <Header props={props}/>
            <Typography variant="h3" component="h4" color="primary">Welcome to Miracle Messages Cases Dashboard</Typography>
            <Typography variant="body1">You can make a different!</Typography>
            
            {
                cases.map(client=>(
                    <Case 
                    key={client.id}
                    id={client.id} 
                    name={client.name} 
                    sensitive={client.sensitive}
                    age={client.age}
                    home_town={client.home_town}
                    current_city={client.current_city}
                    contact={client.contact}
                    // connect_name={client.connect[0].name}
                    // connect_age={client.connect[0].age}s
                    // connect_relationship={client.connect[0].relationship}
                    // connect_location={client.connect[0].location}
                    onDelete={handleDelete}
                    />
                ))
            }
            
            <Footer />
        </Grid>
    )
}