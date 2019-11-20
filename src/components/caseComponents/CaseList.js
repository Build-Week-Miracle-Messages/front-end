import React, {useState} from "react";
import Case from "./Case"

import {Grid} from "@material-ui/core"

import Header from "./../layout/Header"

import {dummyData} from "./dummydata"

export default function CaseList(props){
    const [clientInfo, setClient] = useState(dummyData)

    const handleDelete = id => {
        const newClientInfo = clientInfo.filter(person => person.id !== id)
        setClient(newClientInfo)
    }

    const handleEdit = id => {
        console.log(id)
    }

    return(
        <Grid container direction="column" alignItems="center">
            <Header props={props}/>

            {
                clientInfo.map(client=>(
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