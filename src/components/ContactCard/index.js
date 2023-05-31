import React from 'react';
import './style.css';

export default function ContactCard(props) {
    function renderCards() {
        return props.testArr.map( x => 
        <div className='col-lg-4 col-12 d-flex flex-column justify-content-around align-items-start p-3 m-2 message-cards'>
            <p>Name: {x.name}</p>
            <p>Email: {x.email}</p>
            <p>Message: {x.message}</p>
        </div>
    )}

    return (
        <div className='row'>
        {props.testArr ? renderCards() : null}
        </div>
    )
}