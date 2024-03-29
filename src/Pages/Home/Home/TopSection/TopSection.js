import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './TopSection.css'

const TopSection = () => {
    return (
        <div className='top-section text-center'>
            <div data-aos='fade-down' data-aos-duration='1500'>
                <h2 className='section-title text-3xl lg:text-5xl font-semibold text-white pt-10'>Learn From Home</h2>
                <h1 className='section-title text-5xl lg:text-7xl font-bold text-white mt-10'>Programming Language Courses</h1>
                <p className='section-title text-2xl lg:text-3xl font-bold text-white mx-5 mt-10'>"The only way to learn a new programming language is by writing programs in it." <br /> - Dennis Ritchie</p>
                <Link to='/courses' className='btn mt-10 border-0 bg-white text-black hover:bg-[#18524b] hover:text-white'>Checkout Our Courses <FaArrowRight className='ml-2'></FaArrowRight></Link>
            </div>
        </div>
    );
};

export default TopSection;