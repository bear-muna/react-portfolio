import React from 'react';
import Form from '../../components/Form';
import ContactCard from '../../components/ContactCard';
import { useState } from 'react';

export default function Contact() {
    // TODO: Need to render objects


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
            <Form />
            <ul>
            <ContactCard testArr={test} />
            </ul>
        </main>
    )
}