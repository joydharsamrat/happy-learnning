import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(authContext);
    const [isDark, setIsDark] = useState(false);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handelThemeToggle = () => {
        setIsDark(!isDark);
    }

    return (
        <div className="navbar bg-base-100 lg:px-20 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/home' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'} >Home</NavLink></li>
                        <li><NavLink to='/courses' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'}>Courses</NavLink></li>
                        <li><NavLink to='/faq' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'}>FAQ</NavLink></li>
                        <li><NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'}>Blogs</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'}>About</NavLink></li>

                    </ul>
                </div>
                <Link to='/'><img className='w-50 h-15 rounded' src="logo.png" alt="" /></Link>
                <div className='ml-3'>
                    {
                        isDark ? <button className='btn btn-xs' onClick={handelThemeToggle}>Dark</button> : <button className='btn btn-xs bg-white text-black' onClick={handelThemeToggle}>Light</button>
                    }
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/home' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'} >Home</NavLink></li>
                    <li><NavLink to='/courses' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'}>Courses</NavLink></li>
                    <li><NavLink to='/faq' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'}>FAQ</NavLink></li>
                    <li><NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'}>Blogs</NavLink></li>
                    <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 bg-inherit' : 'bg-inherit text-black'}>About</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <>
                                {
                                    user?.photoURL ? <img title={user.displayName} className='cursor-pointer rounded-full w-10' src={user.photoURL} alt="" />
                                        :
                                        <FaUserAlt></FaUserAlt>
                                }
                            </>
                            <button onClick={handelLogOut} className="btn btn-outline ml-5">Logout</button>
                        </>

                        :
                        <>
                            <Link to='/login' className="btn btn-outline">Login</Link>
                            <Link to='/register' className="btn btn-outline ml-3">Register</Link>

                        </>
                }
            </div>
        </div>
    );
};

export default Header;