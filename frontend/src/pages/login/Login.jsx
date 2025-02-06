import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../authContext/authController';
import { AuthContext } from '../../authContext/AuthContext';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

    return (
        <div className="w-screen h-screen bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/src/media/netflix-login-signup.jpg')] bg-cover relative">
            <div className="">
                <div className="flex items-center justify-between px-10 py-6">
                    <img
                        className="h-[40px]"
                        src="../src/media/Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center text-white">
                <form className="w-[400px] h-[400px] p-8 rounded-lg bg-black flex flex-col justify-around ">
                    <h1 className='text-3xl font-medium'>Sign In</h1>
                    <input className='h-10 rounded-md bg-gray-300 pl-3 outline-none text-black' type="email" placeholder="Email or phone number" autoComplete='email' onChange={(e) => setEmail(e.target.value)} />
                    <input className='h-10 rounded-md bg-gray-300 pl-3 outline-none text-black' type="password" placeholder="Password" autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
                    <button className="h-10 rounded-md bg-red-600 text-white border-none text-lg font-medium cursor-pointer" onClick={handleLogin}>Sign In</button>
                    <span className='text-gray-200 text-sm'>
                        New to Netflix? <Link to='/'><b className='text-white'>Sign up now.</b></Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
};
export default Login;