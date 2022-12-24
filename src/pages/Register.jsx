import React from 'react'
import {Button, TextField} from "@mui/material";




const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">CHATAPP</span>
                <form>
                    <TextField id="standard-basic" label="Nickname" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                    <Button className="avatarButton" variant="contained" component="label">
                        Upload Avatar
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <Button variant="contained">Sign Up</Button>
                </form>
                <p>
                    You do have an account? Login
                </p>
            </div>
        </div>
    );
};

export default Register;




