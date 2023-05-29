import React from 'react';
import Form from '../../components/Form';

export default function Contact() {
    // TODO: Need to render objects
    function callBack(x) {
        if (x) {
            return x.map( y => <p>{y.name}</p>)
        }
    }


    const test = [
        {
            name: 'TEST 1 from FORM'
        },
        {
            name: 'TEST 2'
        },
        {
            name: 'TEST 3'
        }
    ];

    return (
        <main>
            <h1>Contact page</h1>
            <Form contacts={callBack}/>
        </main>
    )
}