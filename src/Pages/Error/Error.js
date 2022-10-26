import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className='error'>
            <div className='lg:flex justify-around h-full'>
                <div className='lg:h-3/4 lg:my-auto'>
                    <img className='h-1/2 lg:h-full rounded-full' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1666740888~exp=1666741488~hmac=ddbb1f54ebc17ed05c8a0bb318adc4fc330ba106973537ef4f08879934c68ade" alt="" />
                </div>
                <div className='h-1/2 lg:my-auto'>
                    <h1 className='text-9xl text-red-500'>404</h1>
                    <h2 className='text-5xl text-white'>Page Not Found</h2>
                    <Link to='/' className='text-xl text-blue-600 underline'>home</Link>
                </div>

            </div>

        </div>
    );
};

export default Error;