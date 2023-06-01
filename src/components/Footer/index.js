import React from 'react';
import './style.css';

export default function Footer() {
    // Footer with SVG
    return (
        <div className='container-fluid footer-container p-3'>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-1 text-center linked-in'>
                    <a href="https://www.linkedin.com/in/edward-john-muna-44b73423b">
                        <svg width='25' height='25'>
                            <image href={require('../../assets/linkedin-svgrepo-com.png')} height='25' width='25'/>
                        </svg>
                    </a>
                </div>
                <div className='col-1 text-center github'>
                    <a href="https://github.com/bear-muna">
                        <svg width='25' height='25'>
                            <image href={require('../../assets/github-mark-white.png')} height='25' width='25'/>
                        </svg>
                    </a>
                </div>
                <div className='col-1 text-center twitter'>
                    <a href="https://twitter.com/ej_muna">
                        <svg width='25' height='25'>
                            <image href={require('../../assets/iconmonstr-twitter-1-240.png')} height='25' width='25'/>
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    )
}