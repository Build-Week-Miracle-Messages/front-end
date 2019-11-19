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
                    id={client.id} 
                    name={client.name} 
                    sensitive={client.sensitive}
                    age={client.age}
                    hometown={client.hometown}
                    current_city={client.current_city}
                    contact_info={client.contact_info}
                    note={client.note}/>
                ))
            }
        </Grid>
    )
}