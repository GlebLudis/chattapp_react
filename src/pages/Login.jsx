import React from 'react'
import {Button, TextField} from "@mui/material";



const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">CHATAPP</span>
                <form>
                    <TextField id="standard-basic" label="Nickname" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <Button variant="contained">Login</Button>
                </form>
                <p>
                    You don't have an account? Register
                </p>
            </div>
        </div>
    );
};

export default Login;
