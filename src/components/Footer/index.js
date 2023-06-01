import React from 'react';
import './style.css';

export default function Footer() {
    return (
        <div className='container-fluid footer-container p-3'>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-1 text-center linked-in'>
                    <svg width='25' height='25'>
                        <image href={require('../../assets/linkedin-svgrepo-com.png')} height='25' width='25'/>
                    </svg>
                </div>
                <div className='col-1 text-center github'>
                    <svg width='25' height='25'>
                        <image href={require('../../assets/github-mark-white.png')} height='25' width='25'/>
                    </svg>
                </div>
                <div className='col-1 text-center twitter'>
                    <svg width='25' height='25'>
                        <image href={require('../../assets/iconmonstr-twitter-1-240.png')} height='25' width='25'/>
                    </svg>
                </div>

            </div>
        </div>
    )
}