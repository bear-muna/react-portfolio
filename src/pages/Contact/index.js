import React from 'react';
import Form from '../../components/Form';
import './style.css';

export default function Contact() {
    // Contact page render with Form component
    return (
        <main className='container-fluid contact-page p-3'>
            <h1>Contact page</h1>
            <Form />
        </main>
    )
}