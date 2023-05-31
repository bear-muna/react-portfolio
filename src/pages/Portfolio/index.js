import React from 'react';
import PortfolioCard from '../../components/PortfolioCard';

export default function Portfolio() {
    return (
        <main>
            <h1>Portfolio Page</h1>
            <PortfolioCard name='Bite Buddies' stack='CSS/JS/node.js/express.js/mySQL/handlebars.js' link='https://github.com/bear-muna/bite-buddies' />
            <PortfolioCard name='Enter The Temple' stack='HTML/CSS/JS' link='https://github.com/bear-muna/enter-the-temple' />
            <PortfolioCard name='Tech Blog' stack='CSS/JS/node.js/express.js/mySQL/handlebars.js' link='https://github.com/bear-muna/tech-blog' />
            <PortfolioCard name='Biology Quiz' stack='HTML/CSS/JS' link='https://github.com/bear-muna/biology-quiz' />
            <PortfolioCard name='Weather App' stack='HTML/CSS/JS' link='https://github.com/bear-muna/weather-app' />
            <PortfolioCard name='Social Network API' stack='node.js/express.js/mongoDB' link='https://github.com/bear-muna/social-network-api' />
        </main>
    )
}