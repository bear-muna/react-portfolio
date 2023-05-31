import React from 'react';
import './style.css';

export default function PortfolioCard(props) {
    return (
        <a href={props.link} target='blank'>
            <section>
                <h3>{props.name}</h3>
                <p>{props.stack}</p>
            </section>
        </a>
    )
}