import React  from "react";
import TextField from "../components/text-field";
import Button from "../components/button";

import '../styles/signup.scss'
const Login=()=>{
return (
    <div className="signupMain">
        <div className="signupForm">
            <h2 >Login</h2>
        <form>
        <TextField type="text" placeholder="Name" required/>
        <TextField className="fieldMargin" type="email"placeholder="Email" required/>
        <TextField className="fieldMargin" type="password" placeholder="Password" required/>
        <Button value="Login" className="signUpBtn"/>
        <p>Don't Have an account? Signup </p>
        </form>
        </div>
    </div>
)
}

export default Login;