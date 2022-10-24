import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(authContext);
    return (
        <div className="navbar bg-base-100 w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/' className='bg-inherit text-black'>Home</NavLink></li>
                        <li><NavLink to='/courses' className='bg-inherit text-black'>Courses</NavLink></li>
                        <li><NavLink to='/faq' className='bg-inherit text-black'>FAQ</NavLink></li>
                        <li><NavLink to='/blogs' className='bg-inherit text-black'>Blogs</NavLink></li>
                        <li><NavLink to='/about' className='bg-inherit text-black'>About</NavLink></li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/' className='bg-inherit text-black'>Home</NavLink></li>
                    <li><NavLink to='/courses' className='bg-inherit text-black'>Courses</NavLink></li>
                    <li><NavLink to='/faq' className='bg-inherit text-black'>FAQ</NavLink></li>
                    <li><NavLink to='/blogs' className='bg-inherit text-black'>Blogs</NavLink></li>
                    <li><NavLink to='/about' className='bg-inherit text-black'>About</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <img title={user.displayName} className='cursor-pointer rounded-full w-10' src={user.photoURL} alt="" />
                            <button className="btn btn-outline ml-5">Logout</button>
                        </>

                        :
                        <Link to='/login' className="btn btn-outline">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;