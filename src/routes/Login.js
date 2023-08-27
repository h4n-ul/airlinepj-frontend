import React from 'react'
import axios from 'axios'

function Login(props) {
    return (
        <form onSubmit={loginfunc}>
            <h1>Login</h1>
            <div>
                <label form='loginid'>ID</label>
                <input type='text' id='loginid'></input>
            </div>
            <div>
                <label form='pw'>Password</label>
                <input type='password' id='pw'></input>
            </div>
            <input type='submit' value='LOGIN'/>
            <a href='/signup'>New here?</a>
        </form>
    );
}

function loginfunc() {
    axios.post('http://localhost:8080', {
        
    })
}

export default Login;