import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/Images/p1.jpg';
import img2 from '../assets/Images/p2.jpg';
import img3 from '../assets/Images/p3.jpg';
import img4 from '../assets/Images/p4.jpg';
import img5 from '../assets/Images/p5.jpg';
import img6 from '../assets/Images/p6.jpg';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const InstructorCarousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className='mb-5 lg:mx-5 lg:my-20'>
            <h1 className='text-center section-title text-3xl border bg-[#2a9d8f] rounded text-white font-bold p-2 lg:w-96 mb-12 mx-auto'>Our Instructors</h1>
            <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }} className='carousel cursor-grab overflow-hidden'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel flex gap-14 px-5'>

                    <motion.div className='item'>
                        <div className="card w-96 border-4 rounded-full border-[#2a9d8f] text-white  relative">
                            <figure className="px-10 py-10">
                                <img src={img1} alt="Shoes" className="rounded-full pointer-events-none " />
                            </figure>
                            <div className="flex flex-col rounded-full items-center justify-center gap-5 absolute bg-black h-[79%] w-[296px] mx-10 my-10 bg-opacity-70 opacity-0 transition duration-700 ease-in-out hover:opacity-100">
                                <h2 className="card-title">Benjamin Becker</h2>
                                <p>Javascript Instructor</p>
                                <div className="flex gap-10 text-2xl">
                                    <a href="/"><FaFacebook></FaFacebook></a>
                                    <a href="/"><FaTwitter></FaTwitter></a>
                                    <a href="/"><FaLinkedin></FaLinkedin></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='item'>
                        <div className="card w-96 rounded-full border-4 border-[#2a9d8f] text-white  relative">
                            <figure className="px-10 py-10">
                                <img src={img2} alt="Shoes" className="rounded-full pointer-events-none" />
                            </figure>
                            <div className="flex flex-col items-center justify-center gap-5 absolute bg-black h-[79%] w-[296px] mx-10 my-10 bg-opacity-70 opacity-0 transition duration-700 ease-in-out rounded-full hover:opacity-100">
                                <h2 className="card-title">Tanya Sullivan</h2>
                                <p>Python Instructor</p>
                                <div className="flex gap-10 text-2xl">
                                    <a href="/"><FaFacebook></FaFacebook></a>
                                    <a href="/"><FaTwitter></FaTwitter></a>
                                    <a href="/"><FaLinkedin></FaLinkedin></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='item'>
                        <div className="card w-96 rounded-full border-4 border-[#2a9d8f] text-white  relative">
                            <figure className="px-10 py-10">
                                <img src={img3} alt="Shoes" className="rounded-full pointer-events-none" />
                            </figure>
                            <div className="flex flex-col items-center justify-center gap-5 absolute bg-black h-[79%] w-[296px] mx-10 my-10 bg-opacity-70 opacity-0 transition duration-700 ease-in-out rounded-full hover:opacity-100">
                                <h2 className="card-title">Bradford Lane</h2>
                                <p>Java Instructor</p>
                                <div className="flex gap-10 text-2xl">
                                    <a href="/"><FaFacebook></FaFacebook></a>
                                    <a href="/"><FaTwitter></FaTwitter></a>
                                    <a href="/"><FaLinkedin></FaLinkedin></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='item'>
                        <div className="card w-96 border-4 rounded-full border-[#2a9d8f] text-white  relative">
                            <figure className="px-10 py-10">
                                <img src={img4} alt="Shoes" className="rounded-full pointer-events-none" />
                            </figure>
                            <div className="flex flex-col items-center justify-center gap-5 absolute bg-black h-[79%] w-[296px] mx-10 my-10 bg-opacity-70 opacity-0 transition duration-700 ease-in-out rounded-full hover:opacity-100">
                                <h2 className="card-title">Neal Alvarado</h2>
                                <p>C# Instructor</p>
                                <div className="flex gap-10 text-2xl">
                                    <a href="/"><FaFacebook></FaFacebook></a>
                                    <a href="/"><FaTwitter></FaTwitter></a>
                                    <a href="/"><FaLinkedin></FaLinkedin></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='item'>
                        <div className="card w-96 border-4 rounded-full border-[#2a9d8f] text-white  relative">
                            <figure className="px-10 py-10">
                                <img src={img5} alt="Shoes" className="rounded-full pointer-events-none" />
                            </figure>
                            <div className="flex flex-col items-center justify-center gap-5 absolute bg-black h-[79%] w-[296px] mx-10 my-10 bg-opacity-70 opacity-0 transition duration-300 ease-in-out rounded-full hover:opacity-100">
                                <h2 className="card-title">Franklin Gregory</h2>
                                <p>PHP Instructor</p>
                                <div className="flex gap-10 text-2xl">
                                    <a href="/"><FaFacebook></FaFacebook></a>
                                    <a href="/"><FaTwitter></FaTwitter></a>
                                    <a href="/"><FaLinkedin></FaLinkedin></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='item'>
                        <div className="card w-96 border-4 rounded-full border-[#2a9d8f] text-white  relative">
                            <figure className="px-10 py-10">
                                <img src={img6} alt="Shoes" className="rounded-full pointer-events-none" />
                            </figure>
                            <div className="flex flex-col items-center justify-center gap-5 absolute bg-black h-[79%] w-[296px] mx-10 my-10 bg-opacity-70 opacity-0 transition duration-300 ease-in-out rounded-full hover:opacity-100">
                                <h2 className="card-title">Adam Clayton</h2>
                                <p>Kotlin Instructor</p>
                                <div className="flex gap-10 text-2xl">
                                    <a href="/"><FaFacebook></FaFacebook></a>
                                    <a href="/"><FaTwitter></FaTwitter></a>
                                    <a href="/"><FaLinkedin></FaLinkedin></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                </motion.div>
            </motion.div>
        </div>
    );
};

export default InstructorCarousel;