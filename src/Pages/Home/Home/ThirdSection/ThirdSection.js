import React from 'react';
import './ThirdSection.css';
import { GiTeacher, GiBookshelf } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const ThirdSection = () => {
    return (
        <div className='third h-screen lg:h-[250px] text-white flex flex-col lg:flex-row justify-around pl-10 lg:pl-0 lg:items-center my-20'>

            <div className='flex items-center gap-5'>
                <FaUserGraduate className=' text-7xl'></FaUserGraduate>
                <div>
                    <p className='text-5xl font-bold'>3000+</p>
                    <p className='text-2xl'>Success Stories</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <GiTeacher className=' text-7xl'></GiTeacher>
                <div>
                    <p className='text-5xl font-bold'>6</p>
                    <p className='text-2xl'>Expert Instructors</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <MdOutlineSupportAgent className=' text-7xl'></MdOutlineSupportAgent>
                <div>
                    <p className='text-5xl font-bold'>100+</p>
                    <p className='text-2xl'>Support Stuffs</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <GiBookshelf className=' text-7xl'></GiBookshelf>
                <div>
                    <p className='text-5xl font-bold'>6</p>
                    <p className='text-2xl'> Courses</p>
                </div>
            </div>


        </div>
    );
};

export default ThirdSection;