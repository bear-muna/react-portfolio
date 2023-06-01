import React from 'react';
import './style.css';

export default function Resume() {
    const frontEndSkills = ['HTML', 'CSS', 'JavaScript', 'React']
    const backEndSkills = ['node.js', 'express.js', 'mySQL', 'sequelize', 'mongoDB', 'mongoose'];
    
    // Render skills with resume link
    return (
        <div className='container-fluid p-3 resume-sec'>
            <div className='row'>
                <div className='col-lg-5 col-12'>
                    <div className='front-end-title'>Front-end Skills</div>
                    {frontEndSkills.map(
                        (x, i) =>
                        <div className='skills' key={i}>{x}</div>
                    )}
                </div>
                <div className='col-lg-5 col-12'>
                    <div className='back-end-title'>Back-end Skills</div>
                    {backEndSkills.map(
                        (x, i) =>
                        <div className='skills' key={i}>{x}</div>
                    )}
                </div>
                <div className='col-12'>
                        <a className='res-tag' href='https://placekitten.com/200/300' target='_blank' rel="noreferrer" >Resume ... Coming soon!</a>
                </div>   
            </div>
        </div>
    )
}