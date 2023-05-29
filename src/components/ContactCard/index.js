import React from 'react';

export default function ContactCard(props) {
    function renderCards() {
        return props.testArr.map( x => <li>{x.name}</li> )
    }

    return (
        <ul>
            {props.testArr ? renderCards() : null}
        </ul>
    )
}