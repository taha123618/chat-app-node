import React  from "react";
import TextField from "../components/text-field";
import Button from "../components/button";
import Container  from "../components/container";
import '../styles/signup.scss'
const Signup=()=>{
return (
    <div className="signupMain">
        <div className="signupForm">
            <h2 >SignUp</h2>
        <form>
        <TextField type="text" placeholder="Name" required/>
        <TextField className="fieldMargin" type="email"placeholder="Email" required/>
        <TextField className="fieldMargin" type="password" placeholder="Password" required/>
        <Button value="Signup" className="signUpBtn"/>
        <p>Already have an account? Login </p>
        </form>
        </div>
    </div>
)
}

export default Signup;