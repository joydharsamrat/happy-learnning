import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const About = () => {
    return (
        <div className='m-10'>
            <div className='mb-10 text-center'>
                <h3 className='text-5xl font-bold'> About Happy learning</h3>
                <p className='text-2xl mt-3'>We're trying to help people who wants to learn programming. <br /> Try to teach with fun,so that everything gets easier . </p>
            </div>
            <hr />
            <div className='flex flex-col items-end'>
                <h1 className='text-2xl font-semibold underline mb-4'>Location</h1>
                <MapContainer className='w-screen h-[50vh]  lg:w-[30vw] lg:h-[40vh] border-2' center={[22.45, 89.34]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[22.45, 89.34]}>
                        <Popup>
                            <p>Happy Learning <br /> Head Office</p>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default About;