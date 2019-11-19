import React, {useState} from "react";
import Case from "./Case"
import {Grid} from "@material-ui/core"
import {dummyData} from "./dummydata"

export default function CaseList(){
    const [clientInfo] = useState(dummyData)
    return(
        <Grid container direction="column" alignItems="center">
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
                    note={client.note}/>
                ))
            }
        </Grid>
    )
}