
import React from 'react';
import { useRef } from 'react';
import { FaPrint } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';


const CourseSubjectsDetails = () => {
    const details = useLoaderData();

    const courseRef = useRef();
    const handelPrint = useReactToPrint({
        content: () => courseRef.current,
    })

    return (
        <div ref={courseRef} className="card  bg-base-100 shadow-xl">
            <div className='flex justify-end m-5'><button onClick={handelPrint}><FaPrint></FaPrint></button></div>
            <figure><img className='w-[20%]' src={details.img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{details.name}</h2>
                <p>{details.details}</p>
                <div className="card-actions justify-center">
                    <Link to={`/courses/courseDetails/checkout/${details.id}`}>
                        <button className="btn btn-primary">Get premium access</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseSubjectsDetails;