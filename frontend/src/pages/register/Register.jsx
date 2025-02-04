import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = async (e) => {
        e.preventDefault();
        setUsername(usernameRef.current.value);
        setPassword(passwordRef.current.value);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, { username, email, password });
            toast.success('Registration successful');
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            toast.error(error.response.data.message);
        }

    };

    return (
        <div className="w-screen h-screen bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/src/media/netflix-login-signup.jpg')]  bg-cover relative">
            <Toaster toastOptions={{
                style: {
                    fontSize: '14px',
                    padding: '10px 20px',
                    color: '#fff',
                    background: '#333',
                },
            }} />
            <div className="">
                <div className="flex items-center justify-between px-10 py-6">
                    <img
                        className="h-[40px]"
                        src="../src/media/Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <div className='flex items-center gap-5'>
                        <div className='flex gap-5'>
                            <Link to='/login' className="bg-red-600 border-none text-white rounded-md py-2 px-3 w-fit text-sm sm:text-lg cursor-pointer z-10">User Sign-in</Link>
                            <Link to={import.meta.env.VITE_ADMIN_URL} target='_blank' className="bg-red-600 border-none text-white rounded-md py-2 px-3 w-fit text-sm sm:text-lg cursor-pointer z-10">Admin Sign-in</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center text-white">
                <h1 className='text-5xl text-center p-2'>Unlimited movies, TV shows, and more.</h1>
                <h2 className='m-5 text-center'>Watch anywhere. Cancel anytime.</h2>
                <p className='text-lg text-center'>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                {
                    !email ? (<div className="w-[50%] bg-white flex items-center justify-between mt-5 h-12 rounded-md">
                        <input
                            className='flex-[9_9_0%] h-full border-none px-1 py-3 outline-none text-black/100'
                            type="email"
                            placeholder="Email Address"
                            ref={emailRef}
                        />
                        <button className="flex-[6_6_0%] h-full bg-red-600 border-none text-white text-xl cursor-pointer" onClick={handleStart}>Get Started</button>
                    </div>) : (
                        <form className="w-[90%] sm:w-[70%] md:w-[70%] lg:w-[60%] bg-white flex items-center justify-between mt-5 h-12 rounded-md">
                            <input
                                className='flex-[9_9_0%] h-full border-none px-1 py-3 outline-none text-black/100'
                                type="text"
                                placeholder='Username'
                                ref={usernameRef}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                className='flex-[6_6_0%] h-full border-none px-1 py-3 outline-none text-black/100'
                                type="password"
                                placeholder="Password"
                                ref={passwordRef}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="flex-[6_6_0%] h-full bg-red-600 border-none text-white text-sm sm:text-sm cursor-pointer" onClick={handleFinish}>Start Membership</button>
                        </form>
                    )
                }

            </div>
        </div>
    );
};
export default Register;
