import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';

import NewUser from './NewUser';

import { UserContext } from '../context/userContext/UserContext';
import { getUsers } from '../context/userContext/UserApiControllers';

const UserList = () => {
    
    const [open, setOpen] = useState(false);
    const { users, dispatch } = useContext(UserContext);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { 
            field: '_id', 
            headerName: 'ID', 
            width: 210
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 300,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className='flex items-center'>
                        <img className='w-10 h-10 rounded-full object-cover mr-3' src={params.row.profilePic} alt="Profile Pic" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 300,
            editable: true,
        },
        {
            field: 'isAdmin',
            headerName: 'Admin',
            width: 120,
            editable: true,
            renderCell: (params) => {
                if (params.row.isAdmin === true) {
                    return <span className='bg-green-500 text-white border-none rounded-lg py-1 px-3'>Yes</span>;
                } else {
                    return <span className='bg-red-500 text-white border-none rounded-lg py-1 px-3'>No</span>;
                }
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div className='flex items-center'>
                        <Link to={'/user/' + params.row._id}><span><Edit className='bg-blue-500 text-white border-none rounded-lg mr-3 !w-7 !h-7' /></span></Link>
                        <span onClick={() => handleDelete(params.row._id)}><Delete className='bg-red-500 text-white border-none rounded-lg cursor-pointer !w-7 !h-7' /></span>
                    </div>
                );
            },
        }
    ];



    return (
        
        <div className="flex-[6_6_0%]">
            <div className='p-5 flex justify-end'>
                    <button onClick={() => setOpen(true)} className="w-40 px-2 py-1 text-xl text-white border-none bg-green-600 rounded-lg cursor-pointer">Create New User</button>
                    {open && <NewUser open={open} onClose={() => setOpen(false)} />}
            </div>
                <DataGrid
                    className='flex-1'
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 20,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    getRowId={(row) => row._id}
                />
        </div>
    );
};
export default UserList;