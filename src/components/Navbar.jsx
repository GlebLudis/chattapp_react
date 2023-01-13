import React, {useContext} from "react";
import {Button} from "@mui/material";
import {signOut} from "firebase/auth"
import {auth} from "../firebase";
import {AuthContext} from "../context/AuthContext";

function Navbar () {
    const {currentUser} = useContext(AuthContext)
    return(
        <div className='navbar'>
            <span className='logo'>CHATAPP</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt=""/>
                <span>{currentUser.displayName}</span>
                <Button onClick={() => signOut(auth)} className='logoutButton' variant="outlined">logout</Button>
            </div>
        </div>
    )
}

export default Navbar
