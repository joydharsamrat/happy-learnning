import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const Feedback = () => {
    return (
        <div className='pointer-events-none my-20'>
            <h1 className='text-center section-title text-3xl border bg-[#2a9d8f] rounded text-white font-bold p-2 lg:w-96 mb-12 mx-auto'>Successful Students</h1>
            <div >
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className='bg-[#2a9d8f] text-white p-5 flex items-center justify-start gap-10 rounded-tr-full'>
                            <figure className='w-20 h-20 rounded-full'>
                                <img className='w-20 h-20 rounded-full' src="/assets/students/s1.jpg" alt="" />
                            </figure>
                            <div>
                                <h4 className='text-3xl font-bold'>Tina Reed</h4>
                                <p className='text-xl'>Web Developer</p>
                                <p className='text-xl font-bold'>Amazon</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#2a9d8f] text-white p-5 flex items-center justify-start gap-10 rounded-tr-full'>
                            <figure className='w-20 h-20 rounded-full'>
                                <img className='w-20 h-20 rounded-full' src="/assets/students/s2.jpg" alt="" />
                            </figure>
                            <div>
                                <h4 className='text-3xl font-bold'>Christina Bell</h4>
                                <p className='text-xl'>Web Developer</p>
                                <p className='text-xl font-bold'>Facebook</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#2a9d8f] text-white p-5 flex items-center justify-start gap-10 rounded-tr-full'>
                            <figure className='w-20 h-20 rounded-full'>
                                <img className='w-20 h-20 rounded-full' src="/assets/students/s3.jpg" alt="" />
                            </figure>
                            <div>
                                <h4 className='text-3xl font-bold'>Katherine Hill</h4>
                                <p className='text-xl'>Web Developer</p>
                                <p className='text-xl font-bold'>Google</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#2a9d8f] text-white p-5 flex items-center justify-start gap-10 rounded-tr-full'>
                            <figure className='w-20 h-20 rounded-full'>
                                <img className='w-20 h-20 rounded-full' src="/assets/students/s4.jpg" alt="" />
                            </figure>
                            <div>
                                <h4 className='text-3xl font-bold'>Angela Diaz</h4>
                                <p className='text-xl'>Web Developer</p>
                                <p className='text-xl font-bold'>Microsoft</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='mt-5'>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    dir={'rtl'}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className='bg-[#2a9d8f] text-white p-5 flex items-center justify-start gap-10 rounded-tl-full'>
                            <figure className='w-20 h-20 rounded-full'>
                                <img className='w-20 h-20 rounded-full' src="/assets/students/s5.jpg" alt="" />
                            </figure>
                            <div>
                                <h4 className='text-3xl font-bold'>Ruby Hall</h4>
                                <p className='text-xl'>Web Developer</p>
                                <p className='text-xl font-bold'>Apple</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#2a9d8f] text-white p-5 flex items-center justify-start gap-10 rounded-tl-full'>
                            <figure className='w-20 h-20 rounded-full'>
                                <img className='w-20 h-20 rounded-full' src="/assets/students/s6.jpg" alt="" />
                            </figure>
                            <div>
                                <h4 className='text-3xl font-bold'>Julia Coleman</h4>
                                <p className='text-xl'>Web Developer</p>
                                <p className='text-xl font-bold'>Tencent</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#2a9d8f] text-white p-5 flex items-center justify-start gap-10 rounded-tl-full'>
                            <figure className='w-20 h-20 rounded-full'>
                                <img className='w-20 h-20 rounded-full' src="/assets/students/s7.jpg" alt="" />
                            </figure>
                            <div>
                                <h4 className='text-3xl font-bold'>Martin Green</h4>
                                <p className='text-xl'>Web Developer</p>
                                <p className='text-xl font-bold'>Alphabet Inc</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#2a9d8f] text-white p-5 flex items-center justify-start gap-10 rounded-tl-full'>
                            <figure className='w-20 h-20 rounded-full'>
                                <img className='w-20 h-20 rounded-full' src="/assets/students/s8.jpg" alt="" />
                            </figure>
                            <div>
                                <h4 className='text-3xl font-bold'>Rachel Adams</h4>
                                <p className='text-xl'>Web Developer</p>
                                <p className='text-xl font-bold'>Cisco Systems</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Feedback;