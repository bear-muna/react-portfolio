import React from 'react';
import '../../'

export default function PortfolioCard(props) {
    return (
        <div>
            <a href={props.link} target='blank'>
                <section>
                    <h3>{props.name}</h3>
                    <p>{props.stack}</p>
                </section>
            </a>
        </div>
    )
}