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
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <span>Add an avatar</span>
                    </label>
                    <Button variant="contained">Sign Up</Button>
                </form>
                <p>
                    You do have an account?
                </p>
            </div>
        </div>
    );
};

export default Register;




