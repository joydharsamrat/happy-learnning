import React from 'react';
import TopSection from './TopSection/TopSection';
import './Home.css'
import SecondSection from './SecondSection/SecondSection';
import InstructorCarousel from './Instructors/Carousel/InstructorCarousel';
import Contact from './Contact/Contact';
import ThirdSection from './ThirdSection/ThirdSection';

const Home = () => {
    return (
        <div className='home'>
            <TopSection></TopSection>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <InstructorCarousel></InstructorCarousel>
            <Contact></Contact>
        </div>
    );
};

export default Home;