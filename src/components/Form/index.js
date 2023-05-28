import React from 'react';

export default function Form() {
    return (
        <form>
            <h2>Input contact information!</h2>
            <hr/>
            <label for='name'>Name:</label>
            <input name='name' type='text' placeholder='name input'/>
            <label for='email'>Email:</label>
            <input name='email' type='text' placeholder='email input'/>
            <label for='description'>Description:</label>
            <input name='description' type='text' placeholder='description input'/>
        </form>
    )
}