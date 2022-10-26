import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-5'>Blogs</h1>
            <hr />
            <div className='m-5 lg:grid grid-cols-2 gap-10'>
                <div className='mb-2 lg:mb-0 bg-teal-200 p-7 rounded'>
                    <h3 className='text-4xl font-semibold text-center'>what is cors?</h3>
                    <hr />
                    <p className='text-lg'>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                    </p>
                </div>
                <div className='mb-2 lg:mb-0 bg-cyan-200 p-7 rounded'>
                    <div className='mb-3'>
                        <h3 className='text-4xl font-semibold text-center'>Why are you using firebase?</h3>
                        <hr />
                        <p className='text-lg'>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                        </p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-semibold text-center'>What other options do you have to implement authentication?</h3>
                        <hr />
                        <p className='text-lg'>
                            there are plenty of authentication providers. Most popular among them are :
                            <ul>
                                <li className='font-semibold'>Auth0</li>
                                <li className='font-semibold'>CyberArk Identity</li>
                                <li className='font-semibold'>Duo</li>
                                <li className='font-semibold'>Entrust Datacard</li>
                                <li className='font-semibold'>Okta</li>
                                <li className='font-semibold'>OneLogin</li>
                                <li className='font-semibold'>OneSpan</li>
                            </ul>
                            <p>and many more...</p>

                        </p>
                    </div>
                </div>
                <div className='mb-2 lg:mb-0 bg-violet-200 p-7 rounded'>
                    <h3 className='text-4xl font-semibold text-center'>How does the private route work?</h3>
                    <hr />
                    <p className='text-lg'>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                    </p>
                </div>
                <div className=' mb-2 lg:mb-0 bg-rose-200 p-7 rounded'>
                    <div className='mb-3'>
                        <h3 className='text-4xl font-semibold text-center'>what is Node ?</h3>
                        <hr />
                        <p className='text-lg'>
                            Node is used as backend service where javascript works on the server-side of the application. it is highly scalable, lightweight, fast, and data-intensive.

                        </p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-semibold text-center'>How does Node work ?</h3>
                        <hr />
                        <p className='text-lg'>
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                            Node.js basically works on two concept

                            1/Asynchronous
                            2/Non-blocking I/O

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;