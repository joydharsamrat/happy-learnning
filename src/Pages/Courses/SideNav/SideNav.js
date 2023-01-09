import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = ({ category }) => {
    return (
        <div>
            <NavLink to={`/courses/courseDetails/${category.id}`} className={({ isActive }) => isActive ? 'btn w-full mt-5 text-xl text-white bg-[#2a9d8f] border-none' : 'btn w-full mt-5 text-xl bg-white shadow hover:text-white hover:bg-[#2a9d8f] text-black border-none'}>{category.name}</NavLink>
        </div>
    );
};

export default SideNav;