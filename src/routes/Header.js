import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <>
            <Link to="/">
                <h3>HEADER</h3>
            </Link>
        </>
    );
}

export default Header;