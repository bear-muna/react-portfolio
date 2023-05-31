import React from 'react';
import ContactCard from '../ContactCard'
import { useState } from 'react';
import './style.css';

export default function Form() {
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

            default:
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
        <div className='row d-flex'>
            <div className='form-sec col-4 mx-2'>
                <form className='form-submit' onSubmit={handleSubmit} >
                    <hr/>
                    <div className='col-12 py-2 my-2'>
                        <label className='gen-label' for='name'>Name:</label>
                        <input className='gen-input' name='name' type='text' placeholder='name' onChange={handleChange} value={name}/>
                    </div>
                    <div className='col-12 py-2 my-2'>
                        <label className='gen-label' for='email'>Email:</label>
                        <input className='gen-input' name='email' type='text' placeholder='email' onChange={handleChange} value={email}/>
                    </div>
                    <div className='col-12 py-2 my-2'>
                        <label className='gen-label' for='message'>Message:</label>
                        <input className='gen-input' id='message-input' name='message' type='text' placeholder='message' onChange={handleChange} value={message}/>
                    </div>
                    <div className='col-12 py-2 my-2'>
                        <button className='submit-button' type='submit'>Submit</button>
                    </div>
                    <hr/>
                </form>
            </div>
            <ContactCard testArr={contactInfo} />
        </div>
    )
}