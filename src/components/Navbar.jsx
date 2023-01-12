import React from "react";
import {Button} from "@mui/material";

function Navbar () {
    return(
        <div className='navbar'>
            <span className='logo'>CHATAPP</span>
            <div className='user'>
                <img src='' alt='' />
                <span>Babai</span>
                <Button className='logoutButton' variant="outlined">logout</Button>
            </div>
        </div>
    )
}

export default Navbar
