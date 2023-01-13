import React from "react";
import {Button} from "@mui/material";
import {signOut} from "firebase/auth"
import {auth} from "../firebase";

function Navbar () {
    return(
        <div className='navbar'>
            <span className='logo'>CHATAPP</span>
            <div className='user'>

                <span>Babai</span>
                <Button onClick={() => signOut(auth)} className='logoutButton' variant="outlined">logout</Button>
            </div>
        </div>
    )
}

export default Navbar
