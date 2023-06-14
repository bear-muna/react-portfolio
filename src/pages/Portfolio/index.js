import React from 'react';
import PortfolioCard from '../../components/PortfolioCard';
import './style.css';

export default function Portfolio() {
    // Portfolio page render with Portfolio Card component
    return (
        <main className='portfolio-container container-fluid p-3'>
            <h1>Best Works</h1>
            <div className='row d-flex justify-content-around'>
                <div className='col-lg-5 col-md-12 proj p-3 m-3' id='proj-1'>
                    <PortfolioCard name='Project Portal' stack='mySQL/express.js/React/node.js' link='https://proj-portal.netlify.app/' />
                </div>
                <div className='col-lg-5 col-md-12 proj p-3 m-3' id='proj-2'>
                    <PortfolioCard name='Bite Buddies' stack='CSS/JS/node.js/express.js/mySQL/handlebars.js' link='https://github.com/bear-muna/bite-buddies' />
                </div>
                <div className='col-lg-5 col-md-12 proj p-3 m-3' id='proj-3'>
                    <PortfolioCard name='Enter The Temple' stack='HTML/CSS/JS' link='https://github.com/bear-muna/enter-the-temple' />
                </div>
                <div className='col-lg-5 col-md-12 proj p-3 m-3' id='proj-4'>
                    <PortfolioCard name='Tech Blog' stack='CSS/JS/node.js/express.js/mySQL/handlebars.js' link='https://github.com/bear-muna/tech-blog' />
                </div>
                <div className='col-lg-5 col-md-12 proj p-3 m-3' id='proj-5'>
                    <PortfolioCard name='Biology Quiz' stack='HTML/CSS/JS' link='https://github.com/bear-muna/biology-quiz' />
                </div>
                <div className='col-lg-5 col-md-12 proj p-3 m-3' id='proj-6'>
                    <PortfolioCard name='Weather App' stack='HTML/CSS/JS' link='https://github.com/bear-muna/weather-app' />
                </div>
            </div>
        </main>
    )
}
