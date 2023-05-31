import React from 'react';
import './style.css'

export default function About() {
    return (
        <main className='about-sec'>
            <h1>About Me</h1>
            <div className='contents'>
                <img src={require('../../assets/profile-picture.jpg')} alt='Profile Pic'/>
                <p>My name is Edward-John (EJ) Muna. I was formerly working in healthcare before making the leap into the creative space of a software developer. I love to stay active by either lifting, snowboarding, or practicing Brazillian Jiujitsu. Whenever I'm not moving around, I enjoy playing video games and crafting my skills in coding. This porfolio is here to highlight and showcase some of my best work as a prospecting junior software engineer. Each project has a link that you can click on and will redirect you. At the bottom of the page there are several ways to contact me, including a complete (not linked) resume. Cheers! *CURRENTY THERE ARE NO BEST WORKS OF MINE*</p>
            </div>
        </main>
    )
}
