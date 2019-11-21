import React from "react"
import {Typography, Link} from "@material-ui/core"

export default function Footer(){
    return(
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://portfolio-website-5itpbi9fh.now.sh/">
            Miracle Messages
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    )
}
