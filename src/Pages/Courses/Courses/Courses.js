import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import './Courses.css';

const Courses = () => {
    const categories = useLoaderData();
    return (
        <div className='courses-container'>
            <div className='border text-center'>
                <h2 className='text-3xl font-bold underline'>Courses</h2>
                {
                    categories.map(category => <SideNav key={category.id} category={category}></SideNav>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;