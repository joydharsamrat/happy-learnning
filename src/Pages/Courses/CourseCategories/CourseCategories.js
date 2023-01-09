import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseCategories = () => {
    const categories = useLoaderData();
    return (
        <div className='grid lg:grid-cols-3 mt-12 gap-5'>
            {
                categories.map(category => {
                    return (
                        <div className="card pb-20 relative border shadow-lg pt-5">
                            <div className='flex justify-center items-center mb-20'>
                                <figure className='w-[50%]'><img src={category.img} alt="Shoes" /></figure>
                            </div>
                            <div className="absolute bottom-20 p-2">
                                <h2 className="text-2xl font-bold">{category.name}</h2>
                            </div>

                            <Link to={`/courses/courseDetails/${category.id}`}>
                                <button className="py-3 text-white absolute bottom-0 bg-[#2a9d8f] hover:bg-[#2eb9a9] hover:text-black border-none font-bold w-full">Details</button>
                            </Link>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default CourseCategories;