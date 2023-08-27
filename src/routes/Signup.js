import React from 'react';

function Signup(props) {
    return (
        <>
            <h1>Signup</h1>
            <div>
                <label form='loginid'>ID</label>
                <input type='text' id='loginid'></input>
            </div>
            <div>
                <label form='pw'>Password</label>
                <input type='password' id='pw'></input>
            </div>
            <button type='submit'>
                Join
            </button>
            <a href='/login'>Already have account?</a>
        </>
    );
}

export default Signup;