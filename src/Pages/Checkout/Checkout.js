import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div className="card w-96 mx-auto bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Course Title : {course.name}</h2>
                <p>Duration : 6 Months</p>
                <p>Price : $120</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-600">Confirm</button>
                    <button className="btn bg-red-600">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;