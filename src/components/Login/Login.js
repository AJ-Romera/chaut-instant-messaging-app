import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import logo from '../../assets/chaut-logo.png';

function Login() {
    const signIn = () => {};

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
