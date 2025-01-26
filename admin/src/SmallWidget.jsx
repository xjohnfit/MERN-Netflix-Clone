import { VisibilityOutlined } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const SmallWidget = () => {

    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users?new=true`, {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
                    }
                });
                setNewUsers(response.data.users);
            } catch (error) {
                console.log(error);
            }
        };
        getNewUsers();
    }, []);
    return (
        <div className="flex-1 shadow-lg p-5 mr-5">
            <span className="text-[22px] font-bold">New Members</span>
            <ul className="m-0 p-0 list-none">
                {newUsers.map((user) => (
                    <li key={user._id} className="flex items-center justify-between my-5">
                        <img
                            src={user.profilePic}
                            alt={user.username}
                            className="w-10 h-10 rounded-[50%] object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="font-semibold">{user.username}</span>
                        </div>
                        <button className="flex items-center border-none rounded-xl px-2 py-3 bg-gray-100 text-gray-700 cursor-pointer">
                            <VisibilityOutlined className='text-[16px] mr-1' />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default SmallWidget;
