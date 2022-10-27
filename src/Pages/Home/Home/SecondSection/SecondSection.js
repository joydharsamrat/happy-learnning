import React from 'react';

const SecondSection = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center section-title text-3xl border bg-slate-500 rounded text-white border-gray-900 p-2 w-96 mx-auto'>Why Happy Learning ?</h1>
            <div className='mt-5'>
                <div className="carousel h-full lg:w-5/6 mx-auto">
                    <div id="item1" className="carousel-item w-full">
                        <div className='lg:grid grid-cols-2 gap-5'>
                            <div className='p-3 h-1/2 lg:h-auto bg-fuchsia-200 rounded-xl shadow-md'>
                                <img className="rounded" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80" />
                                <p className='text-center text-xl text-white'>...</p>
                            </div>
                            <div className='p-5 bg-fuchsia-200 h-screen rounded-xl shadow-md'>
                                <h3 className='text-5xl'>Best Education</h3>
                                <hr className='w-80 mt-3' />
                                <p className='text-3xl mt-5'>We provide our students one of the best education of the world. Deu to our course structure students get a very easy way to learn. We make learning fun. </p>
                            </div>
                        </div>

                    </div>
                    <div id="item2" className="carousel-item  w-full">
                        <div className='lg:grid grid-cols-2 gap-5'>
                            <div className='p-3 h-1/2 lg:h-auto bg-indigo-200 rounded-xl shadow-md'>
                                <img className="rounded" src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                                <p className='text-center text-xl text-white'>...</p>
                            </div>
                            <div className='p-5 bg-indigo-200 h-screen rounded-xl shadow-md'>
                                <h3 className='text-5xl'>Best Support</h3>
                                <hr className='w-80 mt-3' />
                                <p className='text-3xl mt-5'>We provide our students top class supports. We run 24/7 support system for students to get help on their coding and other problems. We have 100+ support stuffs so that students doesn't have to wait to get their problems solved. </p>
                            </div>
                        </div>

                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className='  lg:grid grid-cols-2 gap-5'>
                            <div className='p-3 h-1/2 lg:h-auto bg-cyan-200 rounded-xl shadow-md'>
                                <img className="rounded" src="https://img.freepik.com/free-vector/professor-concept-illustration_114360-4226.jpg?w=740&t=st=1666719667~exp=1666720267~hmac=0ddb07ea5b85a7e6ad490125d048d8f9cc7e11239157e8f7b742bcc23080b836" />
                                <p className='text-center text-xl text-white'>...</p>
                            </div>
                            <div className='p-5 bg-cyan-200 h-screen rounded-xl shadow-md'>
                                <h3 className='text-5xl'>Quality Instructors</h3>
                                <hr className='w-96 mt-3' />
                                <p className='text-3xl mt-5'>We have some very experienced and quality instructors. They are very very friendly and open minded to teach. They have tons of experience on there field. And we also invite some top level successful programers to share there experience with the students . </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">i</a>
                    <a href="#item2" className="btn btn-xs">ii</a>
                    <a href="#item3" className="btn btn-xs">iii</a>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;