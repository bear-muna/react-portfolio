import React from 'react';

export default function Resume() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'node.js', 'express.js', 'mySQL', 'sequelize', 'mongoDB', 'mongoose', 'React']
    
    return (
        <main>
            <h1>Resume Page</h1>
            <h2>Proficiencies</h2>
            <ul>
                {skills.map( x => <li>{x}</li>)}
            </ul>
        </main>
    )
}