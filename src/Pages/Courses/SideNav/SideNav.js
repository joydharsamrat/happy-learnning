import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ category }) => {
    return (
        <div >
            <Link to={`/courses/courseDetails/${category.id}`} className='text-xl text-blue-500'>{category.name}</Link>
        </div>
    );
};

export default SideNav;