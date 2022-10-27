import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null);
    const { logInWithGoogle, logInWithGithub, logIn, setLoading } = useContext(authContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handelSignInWithGoogle = () => {
        logInWithGoogle(googleProvider)
            .then(result => {
                setError(null)
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    const handelSignInWithGithub = () => {
        logInWithGithub(githubProvider)
            .then(result => {
                setError(null)
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                setError(null)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <div className="hero min-h-screen lg:justify-end register ">
            <div className="hero-content lg:mr-60 ">
                <div className="flex-shrink-0 w-full  shadow-2xl">
                    <p className="text-white text-5xl mb-5 font-semibold">Login Now</p>
                    <form onSubmit={handelSubmit}>
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


                        <label className="label">
                            <p className=" hover:text-blue-500 cursor-pointer text-blue-600">Forgot password?</p>
                        </label>
                        <p className="text-red-600">{error}</p>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-outline text-white">Login</button>
                        </div>

                    </form>
                    <div className=' mt-5'>
                        <button onClick={handelSignInWithGoogle} className="btn btn-outline text-white w-full"> <img className='w-6  mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />Google SignIn</button>
                        <button onClick={handelSignInWithGithub} className="btn btn-outline mt-3 text-white w-full"><img className='w-6  mr-2' src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt="" /> Github SignIn</button>
                    </div>
                    <div>
                        <p className='text-white mt-5'>New To Happy Learning ?  <Link className='text-blue-500' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;