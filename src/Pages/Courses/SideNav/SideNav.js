import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = ({ category }) => {
    return (
        <div >
            <NavLink to={`/courses/courseDetails/${category.id}`} className={({ isActive }) => isActive ? 'btn w-full mt-5 text-xl text-white bg-blue-600 border-none' : 'btn w-full mt-5 text-xl bg-white shadow text-black border-none'}>{category.name}</NavLink>
        </div>
    );
};

export default SideNav;