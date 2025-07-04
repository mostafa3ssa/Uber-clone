import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CapatainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainLogin = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ captainData, setCaptainData ] = useState({})
    console.log(CaptainDataContext);
    const { setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
    
        setCaptainData({
          email: email,
          password: password
        });
    
        console.log(`this is captain: ${captainData}`);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
    
            if (response.status === 200) {
                const data = response.data
                setCaptain(data.captain)
                console.log(JSON.stringify(data.captain));
                localStorage.setItem('captain', JSON.stringify(data.captain))
                localStorage.setItem('token', data.token)
                navigate('/home')
            }
        } catch (error) {
          console.error('Error occurred:', error.response?.data || error.message);
        }
    
    
    
        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <h3 className='font-medium text-base mb-2'>What's your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base border-none outline-none'
                        type="email"
                        placeholder='email@example.com'
                    />

                    <h3 className='text-base font-medium mb-2'>Enter Password</h3>

                    <input
                        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base border-none outline-none'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required type="password"
                        placeholder='password'
                    />

                    <button
                        className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base cursor-pointer'
                    >Login</button>
                </form>

                <p className='text-center text-base font-medium'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
            </div>

            <div>
                <Link
                    to='/login'
                    className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                    >Sign in as User
                </Link>
            </div>
        </div>
    );
};

export default CaptainLogin;