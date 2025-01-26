import './login.scss';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../authContext/authController';
import { AuthContext } from '../../authContext/AuthContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container_login">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" autoComplete='username' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
                    <button className="loginButton" onClick={handleLogin}>Sign In</button>
                    <span>
                        New to Netflix? <b>Sign up now.</b>
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