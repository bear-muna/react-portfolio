import React from 'react';
import './style.css';

export default function Footer() {
    return (
        <div className='container-fluid footer-container p-3'>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-1 linked-in'>Test</div>
                <div className='col-1 github'>Test</div>
                <div className='col-1 twitter'>Test</div>
            </div>
        </div>
    )
}