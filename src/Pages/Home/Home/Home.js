import React from 'react';
import TopSection from './TopSection/TopSection';
import './Home.css'
import SecondSection from './SecondSection/SecondSection';

const Home = () => {
    return (
        <div className='home'>
            <TopSection></TopSection>
            <SecondSection></SecondSection>
        </div>
    );
};

export default Home;