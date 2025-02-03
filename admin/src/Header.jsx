import { NotificationsNone, Language, Settings, Logout, Person } from '@mui/icons-material';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";
import { logout } from './context/authContext/AuthActions';

const Header = () => {

    const { user } = useContext(AuthContext);

    const {loading, dispatch} = useContext(AuthContext);

    const handleLogout = () => {
        dispatch(logout());
    };


    return (
        <div className="w-full h-[50px] bg-white sticky top-0 z-50 shadow-md">
            <div className="h-full p-5 flex items-center justify-between">
                <div className="">
                    <Link to='/'>
                    <span className="font-bold text-3xl text-red-700 cursor-pointer"> Netflix Admin Panel</span>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="relative mr-3 text-gray-500">
                        <NotificationsNone className="cursor-pointer" />
                        <span className='absolute w-4 h-4 top-[-6px] right-[-6px] bg-red-600 text-white rounded-[50%] flex items-center justify-center text-[10px]'>2</span>
                    </div>
                    <div className="relative mr-3 text-gray-500">
                        <Language className="cursor-pointer" />
                    </div>
                    <div className="relative mr-3 text-gray-500">
                        <Settings className="cursor-pointer" />
                    </div>
                        {user.user.profilePic != '' ? <img className='w-10 h-10 object-cover rounded-full mr-2' src={user.user.profilePic} alt='profile' /> : <Person className='!w-10 !h-12 !object-cover !rounded-full !mr-2 !fill-slate-500' />}
                        <button className='ml-3' title='Logout' onClick={handleLogout}><Logout /></button>
                </div>
            </div>
        </div>
    );
};
export default Header;