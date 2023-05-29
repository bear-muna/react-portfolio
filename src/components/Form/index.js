import React from 'react';
import ContactCard from '../ContactCard'
import { useState } from 'react';

export default function Form(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [contactInfo, setContactInfo] = useState([]);
    
    const handleChange = (e) => {
        const { value, name } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
                
            case 'email':
                setEmail(value);
                break;

            case 'message':
                setMessage(value);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let item = {
            name: name,
            email: email,
            message: message,
        };

        setContactInfo( [...contactInfo, item] );
        setName('');
        setEmail('');
        setMessage('');
    }


    // TODO: Need to have name verification
    // TODO: Need to have email verification

    return (
        <>
            <form onSubmit={handleSubmit} >
                <h2>Input contact information!</h2>
                <hr/>
                <label for='name'>Name:</label>
                <input name='name' type='text' placeholder='name input' onChange={handleChange} value={name}/>
                <label for='email'>Email:</label>
                <input name='email' type='text' placeholder='email input' onChange={handleChange} value={email}/>
                <label for='message'>Message:</label>
                <input name='message' type='text' placeholder='description input' onChange={handleChange} value={message}/>
                <button type='submit'>Submit</button>
            </form>
            <ContactCard testArr={contactInfo} />
        </>
    )
}