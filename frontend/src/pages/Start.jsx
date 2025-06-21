import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div className='bg-cover bg-center bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Modern_British_LED_Traffic_Light.jpg/1200px-Modern_British_LED_Traffic_Light.jpg)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uberr" />
            <div className='bg-white pb-7 py-5 px-4'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to="/login">
                    <button className='flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-5 cursor-pointer'>Continue</button>
                </Link>
            </div>
        </div>
    );
};

export default Start;