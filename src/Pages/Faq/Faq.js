import React from 'react';

const Faq = () => {
    return (
        <div className='flex justify-around h-screen'>
            <div className='h-4/6 my-auto'>
                <img className='w-full h-full' src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1666745124~exp=1666745724~hmac=cb06fd4cd22e39401994019d38945d27f0e002c33d1b11623dd0d387614c9a61" alt="" />
            </div>
            <div className='h-1/2 my-auto'>
                <h2 className='text-5xl font-bold'>FAQ</h2>
                <hr />
                <div className='my-5 '>
                    <div tabIndex={0} className="bg-slate-300 collapse collapse-arrow border border-base-300 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How do I know which language is best for me ?
                        </div>
                        <div className="collapse-content">
                            <p>
                                It depends on what you want to learn,what you want to do, what you want to become.
                                Try the language is better for what you want to do with that.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='my-5 '>
                    <div tabIndex={0} className="bg-slate-300 collapse collapse-arrow border border-base-300 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Is this course for beginner ?
                        </div>
                        <div className="collapse-content">
                            <p>Yes . We've designed this course for beginners. But it's always good to do some research before starting.</p>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <div tabIndex={0} className="bg-slate-300 collapse collapse-arrow border border-base-300  rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Can i learn programming as a non cse student ?
                        </div>
                        <div className="collapse-content">
                            <p>The things you need to learn something are dedication and hard work. If you try enough you can learn anything. Doesn't matter what your educational background is.</p>
                        </div>
                    </div>
                </div>
                <div className='my-5 '>
                    <div tabIndex={0} className="bg-slate-300 collapse collapse-arrow border border-base-300  rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Can get a job after completing this course ?
                        </div>
                        <div className="collapse-content">
                            <p>If you give your 100% to the course , you'll have a 90% chance to get a job. Luck has other 10%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;