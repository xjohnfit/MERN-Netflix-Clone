import {NotificationsNone, Language, Settings} from '@mui/icons-material';

const Header = () => {
    return (
        <div className="w-full h-[50px] bg-white sticky top-0 z-50 shadow-md">
            <div className="h-full p-5 flex items-center justify-between">
                <div className="">
                    <span className="font-bold text-3xl text-red-700 cursor-pointer"> Netflix Admin Panel</span>
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
                    <img src="/src/assets/headshot.jpg" alt="Avatar" className='w-10 h-10 rounded-[50%] cursor-pointer' />
                </div>
            </div>
        </div>
    );
};
export default Header;