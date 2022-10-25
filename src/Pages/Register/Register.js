import { GithubAuthProvider, GoogleAuthProvider, createUser } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import './register.css';

const Register = () => {
    const [error, setError] = useState(null);
    const { logInWithGoogle, logInWithGithub, createUser, updateUserInfo } = useContext(authContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handelSignInWithGoogle = () => {
        logInWithGoogle(googleProvider)
            .then(result => {
                setError(null)
                console.log(result.user)
            })
            .catch(error => setError(error.errorMessage))
    }

    const handelSignInWithGithub = () => {
        logInWithGithub(githubProvider)
            .then(result => {
                setError(null)
                console.log(result.user)
            })
            .catch(error => setError(error.errorMessage))
    }


    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                handelUserProfileUpdate(name, photoURL)
                form.reset();
            })
            .catch(error => setError(error.errorMessage))


    }

    const handelUserProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserInfo(profile)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => setError(error.errorMessage))
    }


    return (
        <div className="hero min-h-screen lg:justify-end register ">
            <div className="hero-content mr-20 ">
                <div className="flex-shrink-0 w-full  shadow-2xl">
                    <p className="text-white text-5xl mb-5 font-semibold">Register Now</p>
                    <form onSubmit={handelSubmit}>
                        <div className='lg:flex gap-5'>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="full name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photoURL" className="input input-bordered" />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                            </div>
                        </div>
                        <p className="text-red-600">{error}</p>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-outline text-white">register</button>
                        </div>

                    </form>
                    <div className='flex justify-around mt-5'>
                        <button onClick={handelSignInWithGoogle} className="btn btn-outline text-white w-2/5"> <img className='w-6  mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />Google SignIn</button>
                        <button onClick={handelSignInWithGithub} className="btn btn-outline text-white w-2/5"><img className='w-6  mr-2' src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt="" /> Github SignIn</button>
                    </div>
                    <div>
                        <p className='text-white mt-5'>Already have an account ?  <Link className='text-blue-500' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;