import React from 'react';

export default function ContactCard(props) {
    function renderCards() {
        return props.testArr.map( x => 
        <>
        <p>Name: {x.name}</p>
        <p>Email: {x.email}</p>
        <p>Message: {x.message}</p>
        </>
    )}

    return (
        <>
        {props.testArr ? renderCards() : null}
        </>
    )
}