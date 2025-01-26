import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import NewList from './NewList';
import { ListContext } from '../context/listContext/ListContext';
import { deleteList, getLists } from '../context/listContext/ListApiControllers';

const Lists = () => {
    const [open, setOpen] = useState(false);
    const { lists, dispatch } = useContext(ListContext);

    useEffect(() => {
        getLists(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteList(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 210 },
        {
            field: 'title',
            headerName: 'Title',
            width: 250,
            editable: true,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 150,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            editable: true,
            renderCell: (params) => {
                if (params.row.status === true) {
                    return <span className='bg-green-500 text-white border-none rounded-lg py-1 px-3'>Active</span>;
                } else {
                    return <span className='bg-red-500 text-white border-none rounded-lg py-1 px-3'>Inactive</span>;
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
                        <Link to={`/list/${params.row._id}`} state={{ list: params.row }}><Edit className='bg-blue-500 text-white border-none rounded-lg mr-3 !w-7 !h-7' /></Link>
                        <span onClick={() => handleDelete(params.row._id)}><Delete className='bg-red-500 text-white border-none rounded-lg cursor-pointer !w-7 !h-7' /></span>
                    </div>
                );
            },
        }
    ];

    return (
        <div className="flex-[6_6_0%]">
            <div className='p-5 flex justify-end'>
                <button onClick={() => setOpen(true)} className="w-50 px-3 py-1 text-xl text-white border-none bg-green-600 rounded-lg cursor-pointer">Create New List</button>
                {open && <NewList open={open} onClose={() => setOpen(false)} />}
            </div>
            <DataGrid
                rows={lists}
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
export default Lists;