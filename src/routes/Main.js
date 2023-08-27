import React from 'react'
import { Link } from 'react-router-dom'

function Main(props) {
    return (
        <>
            <h1>Main Page</h1>
            <ul>
                <Link to="/search"><li>Search tickets</li></Link>
            </ul>
            <ul>
                <Link to="/details/1"><li>li1</li></Link>
                <Link to="/details/2"><li>li2</li></Link>
            </ul>
        </>
    );
};

export default Main;