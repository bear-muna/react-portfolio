import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default function NavBar() {
    return (
        <div className='container-fluid nav-container  p-3'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-md-2 col-12 p-2 text-center nav-name'>EJ Muna</div>
                    <div className='col-md-8 col-12 d-flex justify-content-around align-items-center flex-wrap p-2'>
                        <Link className='nav-links' to='/'>About</Link>
                        <Link className='nav-links' to='/portfolio'>Portfolio</Link>
                        <Link className='nav-links' to='/contact'>Contact</Link>
                        <Link className='nav-links' to='/resume'>Resume</Link>
                    </div>
                </div>
        </div>
    )
}