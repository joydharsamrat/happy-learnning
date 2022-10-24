import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import './register.css';

const Register = () => {
    const [error, setError] = useState(null);
    const { logInWithGoogle } = useContext(authContext)
    const googleProvider = new GoogleAuthProvider();

    const handelSignInWithGoogle = () => {
        logInWithGoogle(googleProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="hero min-h-screen justify-end register ">
            <div className="hero-content mr-20 ">
                <div className="flex-shrink-0 w-full  shadow-2xl">

                    <form>
                        <div className='flex gap-5'>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="full name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="photoURL" className="input input-bordered" />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />

                                </div>
                            </div>
                        </div>
                        <label className="label">
                            <p className=" hover:text-red-500 cursor-pointer text-red-600">Forgot password?</p>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-white">register</button>
                        </div>
                        <div className='mt-5'>
                            <button onClick={handelSignInWithGoogle} className="btn btn-outline text-white w-full"> <img className='w-6 mr-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />Google SignIn</button>
                        </div>
                        <div>
                            <p className='text-white mt-5'>Already have an account ?  <Link className='text-blue-500' to='/login'>Login</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;