import React from 'react';
import { motion } from 'framer-motion'

const SecondSection = () => {
    return (
        <div className='mb-20'>
            <div className='bg-[#2a9d8f] pt-20 pb-40'>
                <h1 className='text-center section-title text-3xl text-white font-bold p-2'>Why Happy Learning ?</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration='1500' className='flex flex-col lg:flex-row items-stretch justify-center gap-10 text-center mb-20 lg:-mt-32'>
                <motion.div
                    whileHover={{
                        y: -10,
                        scale: 1.05,
                        transition: { duration: .2 }
                    }}

                    className='w-screen lg:w-[250px] shadow-xl rounded-b-xl'>
                    <div>
                        <img className=' rounded-t-lg' src="/assets/education.jpg" alt="" />
                    </div>
                    <div className='p-5'>
                        <h2 className='text-2xl font-bold my-3'>Best Education</h2>
                        <p>
                            We provide our students one of the best education of the world. Deu to our course structure students get a very easy way to learn. We make learning fun.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        y: -10,
                        scale: 1.05,
                        transition: { duration: .2 }
                    }}
                    className='w-screen lg:w-[250px] shadow-xl rounded-b-xl'>
                    <div>
                        <img className=' rounded-t-lg' src="/assets/support.jpg" alt="" />
                    </div>
                    <div className='p-5'>
                        <h2 className='text-2xl font-bold my-3'>24/7 Support</h2>
                        <p>
                            We provide our students top class supports. We run 24/7 support system for students to get help on their coding and other problems. We have 100+ support stuffs so that students doesn't have to wait to get their problems solved.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        y: -10,
                        scale: 1.05,
                        transition: { duration: .2 }
                    }}
                    className='w-screen lg:w-[250px] shadow-xl rounded-b-xl'>
                    <div>
                        <img className='rounded-t-lg' src="/assets/instructor.jpg" alt="" />
                    </div>
                    <div className='p-5'>
                        <h2 className='text-2xl font-bold my-3'>Expert Instructors</h2>
                        <p>
                            We have some very experienced and qualified instructors. They are very very friendly and open-minded to teach. They have tons of experience in their field. And we also invite some top level successful programmers to share their experience with the students.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SecondSection;