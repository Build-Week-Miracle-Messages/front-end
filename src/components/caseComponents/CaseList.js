import React, {useState, useEffect} from "react";
import Case from "./Case"

import {useSelector, useDispatch} from 'react-redux'

import {Grid} from "@material-ui/core"

import Header from "./../layout/Header"

import {dummyData} from "./dummydata"

import {getCurrentCases, deleteCase} from '../../actions'

export default function CaseList(props){
    const cases = useSelector(state => state.cases)
    const [clientInfo, setClient] = useState(dummyData)
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteCase(id))
    }

    const handleEdit = id => {
        console.log(id)
    }

        useEffect(() => {
            console.log("Use effect firing")
            dispatch(getCurrentCases)
        },[])

    return(
        <Grid container direction="column" alignItems="center">
            <Header props={props}/>

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
                    connect_name={client.connect_name}
                    connect_age={client.connect_age}
                    connect_relationship={client.connect_relationship}
                    connect_location={client.connect_location}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    />
                ))
            }
        </Grid>
    )
}