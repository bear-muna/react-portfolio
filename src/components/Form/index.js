import React from 'react';
import ContactCard from '../ContactCard'
import { useState } from 'react';
import './style.css';
import val from '../../utils/Validator';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [contactInfo, setContactInfo] = useState([]);

    const [nameCheck, setNameCheck] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    
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

        if (!val.usernameCheck(name)) {
            setNameCheck(true);
            return;
        }

        if (!val.emailCheck(email)) {
            setEmailCheck(true);
            return;
        }

        let item = {
            name: name,
            email: email,
            message: message,
        };

        setContactInfo( [...contactInfo, item] );
        setName('');
        setEmail('');
        setMessage('');
        setNameCheck(false);
        setEmailCheck(false);
    }


    // TODO: Need to have name verification
    // TODO: Need to have email verification

    return (
        <div className='row d-flex'>
            <div className='form-sec col-md-4 col-12 mx-2'>
                <form className='form-submit' onSubmit={handleSubmit} >
                    <hr/>
                    <div className='col-12 py-2 my-2'>
                        <label className='gen-label' for='name'>Name:</label>
                        <input className='gen-input' name='name' type='text' placeholder='name' onChange={handleChange} value={name}/>
                        { nameCheck && <p>Input a valid name</p> }
                    </div>
                    <div className='col-12 py-2 my-2'>
                        <label className='gen-label' for='email'>Email:</label>
                        <input className='gen-input' name='email' type='text' placeholder='email' onChange={handleChange} value={email}/>
                        { emailCheck && <p>Input a valid email</p> }
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