import { useContext, useState } from "react";
import { AuthContext } from "./context/authContext/authContext";
import { login } from "./context/authContext/authController";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading, dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <span className="font-bold text-3xl text-red-700 cursor-pointer pb-5"> Netflix Admin Panel</span>
      <form className="flex flex-col space-y-4 justify-center items-center">
        <input className="mb-3 p-1 outline-none border border-gray-400 text-center w-96" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="mb-3 p-1 outline-none border border-gray-400 text-center w-96" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className='rounded-xl w-48 p-2 cursor-pointer bg-blue-800 text-white font-semibold' onClick={handleLogin} disabled={loading}>Login</button>
      </form>
    </div>
  );
};
export default Login;