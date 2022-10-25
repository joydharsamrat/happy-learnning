import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div>
            {course.name}
        </div>
    );
};

export default Checkout;