import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <h1>NAVBAR</h1>
            <Link to='/'>About</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/resume'>Resume</Link>
        </nav>
    )
}