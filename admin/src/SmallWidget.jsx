import { VisibilityOutlined } from '@mui/icons-material';

const smallWidget = () => {
    return (
        <div className="flex-1 shadow-lg p-5 mr-5">
            <span className="text-[22px] font-bold">New Members</span>
            <ul className="m-0 p-0 list-none">
            <li className="flex items-center justify-between my-5">
                    <img
                        src="/src/assets/User (1).jpg"
                        alt="Avatar"
                        className="w-10 h-10 rounded-[50%] object-cover"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold ">Brad Keller</span>
                        <span className="font-light">Software Engineer</span>
                    </div>
                    <button className="flex items-center border-none rounded-xl px-2 py-3 bg-gray-100 text-gray-700 cursor-pointer">
                        <VisibilityOutlined className='text-[16px] mr-1' />
                        Display
                    </button>
                </li><li className="flex items-center justify-between my-5">
                    <img
                        src="/src/assets/User (3).jpg"
                        alt="Avatar"
                        className="w-10 h-10 rounded-[50%] object-cover"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold ">Brad Keller</span>
                        <span className="font-light">Software Engineer</span>
                    </div>
                    <button className="flex items-center border-none rounded-xl px-2 py-3 bg-gray-100 text-gray-700 cursor-pointer">
                        <VisibilityOutlined className='text-[16px] mr-1' />
                        Display
                    </button>
                </li>
                
            </ul>
        </div>
    );
};
export default smallWidget;
