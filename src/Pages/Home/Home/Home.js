import React from 'react';
import TopSection from './TopSection/TopSection';
import './Home.css'
import SecondSection from './SecondSection/SecondSection';
import InstructorCarousel from './Instructors/Carousel/InstructorCarousel';

const Home = () => {
    return (
        <div className='home'>
            <TopSection></TopSection>
            <SecondSection></SecondSection>
            <InstructorCarousel></InstructorCarousel>
        </div>
    );
};

export default Home;