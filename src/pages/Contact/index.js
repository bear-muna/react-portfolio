import React from 'react';
import Form from '../../components/Form';

export default function Contact(props) {
    // TODO: Need to render objects
    return (
        <main>
            <h1>Contact page</h1>
            <Form />
            <ul>
            {props.contacts ? props.contacts.map( (x) => <li>{x.name}</li> ) : null}
            </ul>
        </main>
    )
}