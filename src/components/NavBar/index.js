import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <h1>NAVBAR</h1>
            <Link to='/'>HOME</Link>
            <Link to='/contact'>CONTACT</Link>
        </nav>
    )
}