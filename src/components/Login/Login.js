import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import logo from '../../assets/chaut-logo.png';
import { auth, provider } from '../../firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => console.log(result))
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login__container'>
                <img src={logo} alt='Logo' />
                <div className='login__text'>
                    <h1>Sign in to Chaut</h1>
                </div>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Login;
