import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseCategories = () => {
    const categories = useLoaderData();
    return (
        <div className='grid lg:grid-cols-2 gap-5'>
            {
                categories.map(category => {
                    return (
                        <div className="card pb-20 relative shadow-xl bg-slate-400">
                            <figure><img src={category.img} alt="Shoes" /></figure>
                            <div className="card-body p-2">
                                <h2 className="text-2xl font-bold">{category.name}</h2>
                            </div>

                            <Link to={`/courses/courseDetails/${category.id}`}>
                                <button className="btn absolute bottom-0 btn-primary w-full">Details</button>
                            </Link>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default CourseCategories;