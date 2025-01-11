import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';
import { userRows } from './seeds/dummyData';
import { useState } from 'react';
import NewUser from './NewUser';

const UserList = () => {

    const [data, setData] = useState(userRows);
    const [open, setOpen] = useState(false);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 250,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className='flex items-center'>
                        <img className='w-10 h-10 rounded-full object-cover mr-3' src={params.row.avatar} alt="Avatar" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 250,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            editable: true,
            renderCell: (params) => {
                if (params.row.status === 'active') {
                    return <span className='bg-green-500 text-white border-none rounded-lg py-1 px-3'>Active</span>;
                } else {
                    return <span className='bg-red-500 text-white border-none rounded-lg py-1 px-3'>Inactive</span>;
                }
            },
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            sortable: true,
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div className='flex items-center'>
                        <Link to={'/user/' + params.row.id}><span><Edit className='bg-blue-500 text-white border-none rounded-lg mr-3 !w-7 !h-7' /></span></Link>
                        <span onClick={() => handleDelete(params.row.id)}><Delete className='bg-red-500 text-white border-none rounded-lg cursor-pointer !w-7 !h-7' /></span>
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
                    rows={data}
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
                />
        </div>
    );
};
export default UserList;