import React from 'react';
import { useRef } from 'react';
import ContactCard from '../ContactCard'
import { useState } from 'react';
import './style.css';
import val from '../../utils/Validator';
import emailjs from '@emailjs/browser';

export default function Form() {
    // useState variables for form
    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [contactInfo, setContactInfo] = useState([]);

    const [nameCheck, setNameCheck] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    
    // Changes the state of variables
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

    // Normal submission function
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

        emailjs.sendForm(
            'service_il600cf',
            'template_ozb4v9o',
            form.current,
            'K7vQrmnlBE8HmC-TK'
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })

        // Changing the variables to defaults after submission
        setContactInfo( [...contactInfo, item] );
        setName('');
        setEmail('');
        setMessage('');
        setNameCheck(false);
        setEmailCheck(false);
    }

    return (
        <div className='row d-flex'>
            <div className='form-sec col-md-4 col-12 mx-2'>
                <form className='form-submit' ref={form} onSubmit={handleSubmit} >
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