import React from 'react';
import './style.css';

export default function PortfolioCard(props) {
    // Card component using props
    return (
        <div className='px-2 card-link'>
            <a href={props.link} target='blank'>
                <h3>{props.name}</h3>
                <p>{props.stack}</p>
            </a>    
        </div>
    )
}