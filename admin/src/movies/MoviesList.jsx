import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';
import NewMovie from './NewMovie';
import { MovieContext } from '../context/movieContext/MovieContext';
import {
    deleteMovie,
    getMovies,
} from '../context/movieContext/MovieApiControllers';

const MoviesList = () => {
    const [open, setOpen] = useState(false);
    const { movies, successMessage, error, dispatch } =
        useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
        if(successMessage) {
            toast.success(successMessage, { duration: 4000 });
        } else if(error) {
            toast.error(error, { duration: 4000 });
        }
    }, [successMessage, error, dispatch]);

    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
    };

    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            width: 210,
        },
        {
            field: 'movie',
            headerName: 'Movie',
            width: 200,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className="flex items-center">
                        <img
                            className="w-10 h-10 rounded-full object-cover mr-3"
                            src={params.row.img}
                            alt="Image"
                        />
                        {params.row.title}
                    </div>
                );
            },
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
            editable: true,
        },
        {
            field: 'year',
            headerName: 'Year',
            width: 120,
            editable: true,
        },
        {
            field: 'limit',
            headerName: 'Limit',
            width: 100,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 120,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            editable: true,
            renderCell: (params) => {
                if (params.row.status === true) {
                    return (
                        <span className="bg-green-500 text-white border-none rounded-lg py-1 px-3">
                            Active
                        </span>
                    );
                } else {
                    return (
                        <span className="bg-red-500 text-white border-none rounded-lg py-1 px-3">
                            Inactive
                        </span>
                    );
                }
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div className="flex items-center">
                        <Link
                            to={`/edit/${params.row._id}`}
                            state={{ movie: params.row }}
                        >
                            <Edit className="bg-blue-500 text-white border-none rounded-lg mr-3 !w-7 !h-7" />
                        </Link>
                        <span onClick={() => handleDelete(params.row._id)}>
                            <Delete className="bg-red-500 text-white border-none rounded-lg cursor-pointer !w-7 !h-7" />
                        </span>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="flex-[6_6_0%]">
            <Toaster
                position="bottom-left"
                toastOptions={{
                    style: {
                        fontSize: '16px',
                        padding: '15px 25px',
                        color: '#fff',
                        background: '#333',
                    },
                }}
            />
            <div className="p-5 flex justify-end">
                <button
                    onClick={() => setOpen(true)}
                    className="w-50 px-3 py-1 text-xl text-white border-none bg-green-600 rounded-lg cursor-pointer"
                >
                    Create New Movie
                </button>
                {open && (
                    <NewMovie
                        open={open}
                        onClose={() => setOpen(false)}
                    />
                )}
            </div>
            <div className="px-5">
                <DataGrid
                    rows={movies}
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
        </div>
    );
};
export default MoviesList;
