import { useContext, useState } from "react";
import { AuthContext } from "./context/authContext/authContext";
import { login } from "./context/authContext/authController";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, dispatch, error } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <Toaster toastOptions={{
          style: {
            fontSize: '14px',
            padding: '10px 20px',
            color: '#fff',
            background: '#333',
          },
      }} />
      <span className="font-bold text-3xl text-red-700 cursor-pointer pb-5"> Netflix Admin Panel</span>
      <form className="flex flex-col space-y-4 justify-center items-center">
        <input className="mb-3 p-1 outline-none border border-gray-400 text-center w-96" autoComplete="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        <input className="mb-3 p-1 outline-none border border-gray-400 text-center w-96" autoComplete="current-password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        <button className='rounded-xl w-48 p-2 cursor-pointer bg-blue-800 hover:bg-green-600 text-white font-semibold' onClick={handleLogin} disabled={loading}>Login</button>
      </form>
    </div>
  );
};
export default Login;