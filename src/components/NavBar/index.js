import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <h1>EJ MUNA</h1>
            <div className='nav-links'>
                <Link className='nav-link' to='/'>About</Link>
                <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
                <Link className='nav-link' to='/resume'>Resume</Link>
            </div>
        </nav>
    )
}