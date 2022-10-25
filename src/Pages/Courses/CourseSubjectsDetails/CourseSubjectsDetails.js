import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseSubjectsDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='w-[50%]' src={details.img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{details.name}</h2>
                <p>{details.details}</p>
                <div className="card-actions justify-center">
                    <Link>
                        <button className="btn btn-primary">Get premium access</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseSubjectsDetails;