import React from 'react'
import './Login.css';
import {Button} from "@mui/material"
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";




const provider = new GoogleAuthProvider();

function Login() {
    const signIn = () => {//login
    signInWithPopup(auth,provider).catch((error) => alert(error.message));
    //fix sign in with popup
};
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="https://lh3.googleusercontent.com/pe4J6IcVYM0AanrBbfuhP8izf3AfTYr6Eq4zW_TrQmRKYsM1JI85vIaSLqWHVneHVJ17kQIRVtGfw5Qy--ZiSZmRjSnIqLHvhAaImKW2q2zJ" alt = ""/>
        
        
        </div>
        <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login