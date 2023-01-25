import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_fjukcah', 'template_m7488xo', form.current, 'yKzn9Z4nQeo_9o-1N')
            .then((result) => {
                form.current.reset()
                toast.success('Message Sent')
                setLoading(false)
                console.log(result.text);
            }, (error) => {
                toast.error('Something went wrong')
                setLoading(false)
                console.log(error.text);
            });
    };

    return (

        <div className='bg-[#2a9d8f] p-10'>
            <h1 className='text-3xl text-white font-bold text-center mb-12'>Contact us</h1>
            <div className='my-10 '>
                <div className='lg:flex justify-around p-5 rounded lg:w-[70%] mx-auto bg-white'>
                    <div>
                        <h4 className='text-xl text-[#2a9d8f] font-bold'>Address</h4>
                        <p>99 Washington Ave,<br /> Hastings On Hudson, <br /> New York(NY), 10706</p>
                    </div>
                    <div className='my-3 lg:my-0'>
                        <div>
                            <h4 className='text-xl text-[#2a9d8f] font-bold'>Phone</h4>
                            <p>(917)428-3480</p>
                        </div>
                        <div className='mt-3'>
                            <h4 className='text-xl text-[#2a9d8f] font-bold'>Email</h4>
                            <p>info@happylearning.com</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-col justify-around lg:justify-between text-3xl'>
                        <Link><FaTwitter className='text-[#00acee] hover:scale-110' ></FaTwitter></Link>
                        <Link><FaYoutube className='text-[#c4302b] hover:scale-110'></FaYoutube></Link>
                        <Link><FaFacebook className='text-[#3b5998] hover:scale-110'></FaFacebook></Link>


                    </div>
                </div>
            </div>
            <form className='flex flex-col items-center lg:w-[70%] mx-auto' ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 mb-10 w-full '>
                    <div className='flex flex-col gap-5 w-full'>

                        <input type="text" name="name" placeholder="Your Name" className="input  w-full " required />

                        <input type="text" name="subject" placeholder="Subject" className="input  w-full  " required />

                        <input type="email" name="email" placeholder="Your Email" className="input  w-full " required />
                    </div>
                    <div className='w-full'>
                        <textarea name="message" className="textarea w-full h-full  " placeholder="Your Message" required></textarea>
                    </div>
                </div>
                <input className='btn bg-white w-1/2 lg:w-1/4 text-[#2a9d8f] hover:bg-[#18524b] hover:text-white' type="submit" value={loading ? 'Sending...' : 'Send Message'} />
            </form>

        </div>
    );
};

export default Contact;