import React from 'react';

export default function PortfolioCard(props) {
    return (
        <div>
            <a href={props.link} target='blank'>
                <img src={props.img} alt='Screenshot of application'/>
                <section>
                    <h3>{props.name}</h3>
                    <p>{props.stack}</p>
                </section>
            </a>
        </div>
    )
}