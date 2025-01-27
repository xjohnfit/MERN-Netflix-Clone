import { useRef, useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './register.scss';

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
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, { email, username, password });
            navigate("/login");
        } catch (error) {
            console.log(error);

        }

    };

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <div className='flex gap-5'>
                        <Link to='/login' className="loginButton">User Sign-in</Link>
                        <Link to={import.meta.env.VITE_ADMIN_URL} target='_blank' className="loginButton">Admin Sign-in</Link>
                    </div>

                </div>
            </div>
            <div className="container_register">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                {
                    !email ? (<div className="input">
                        <input
                            type="email"
                            placeholder="Email Address"
                            ref={emailRef}
                        />
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>) : (
                        <form className="input">
                            <input type="text" placeholder='Username' ref={usernameRef} />
                            <input
                                type="password"
                                placeholder="Password"
                                ref={passwordRef}
                            />
                            <button className="registerButton" onClick={handleFinish}>Start Membership</button>
                        </form>
                    )
                }

            </div>
        </div>
    );
};
export default Register;
