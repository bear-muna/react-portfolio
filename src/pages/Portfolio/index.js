import React from 'react';
import PortfolioCard from '../../components/PortfolioCard';

export default function Portfolio() {
    return (
        <main>
            <h1>Portfolio Page</h1>
            <PortfolioCard name='Testing' stack='MERN' link='https://youtube.com' />
            <PortfolioCard name='Second Proj' stack='MERN' link='https://youtube.com' />
            <PortfolioCard name='Third' stack='MERN' link='https://youtube.com' />
            <PortfolioCard name='White noise' stack='MERN' link='https://youtube.com' />
            <PortfolioCard name='Weather App' stack='MERN' link='https://youtube.com' />
            <PortfolioCard name='Value' stack='MERN' link='https://youtube.com' />
        </main>
    )
}