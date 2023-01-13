import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import "./style.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return(
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Homepage/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default App

