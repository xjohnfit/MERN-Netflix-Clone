import { useContext, useEffect, useState } from "react";
import { ListContext } from "../context/listContext/ListContext";
import { MovieContext } from "../context/movieContext/MovieContext";
import { getMovies } from "../context/movieContext/MovieApiControllers";
import { createList } from "../context/listContext/ListApiControllers";
import toast, { Toaster } from 'react-hot-toast';

const NewList = ({ open, onClose }) => {

    const [list, setList] = useState(null);

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        if(handleSubmit){
            toast.success('List created successfully');
            setTimeout(() => {
                onClose();
            }, 2000);
        } else {
            toast.error('Failed to create list');
        }
    };

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setList({ ...list, content: value });
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    };


    return (
        <div onClick={onClose} className={`fixed z-10 inset-0 flex justify-center items-center transition-colors${open ? "visible bg-black/50" : "invisible"}`}>
            <Toaster position="center" toastOptions={ { duration: 5000 } } />
            <div onClick={(e) => e.stopPropagation()} className={`bg-white p-10 rounded-xl shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} h-fit w-[800px]`}>
                <div>
                    <button onClick={onClose} className="absolute text-xl top-2 right-4 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">X</button>
                    <h1 className="text-2xl font-semibold">New List</h1>
                    <form className="flex flex-wrap flex-col">
                        <div className="flex">
                            <div className="w-full flex flex-col mt-3 mr-5">
                                
                                <input onChange={handleChange} name="title" className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" placeholder="Name" />
                            </div>
                            <div className="w-full flex flex-col mt-3 mr-5">
                                
                                {/* ${defaultValue == 'Genre' ? 'border-gray-300' : 'border-gray-600'} */}
                                <select onChange={handleChange} defaultValue={'default'} className={`w-full p-1 border border-solid border-gray-600 rounded-lg outline-none`} name="genre">
                                    <option value="default" className="text-gray-400" disabled="disabled">Genre</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Crime">Crime</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Historical">Historical</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Sci-Fi">Sci-fi</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Western">Western</option>
                                    <option value="Animation">Animation</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Documentary">Documentary</option>
                                </select>
                            </div>

                        </div>

                        <div className="flex">

                        <div className="w-full flex flex-col mt-3 mr-5 ">
                            
                            <div className="p-1 border border-solid border-gray-600 rounded-lg flex items-center justify-start">
                                <input onChange={handleChange} className="ml-3" type="radio" name="type" id="movie" value="movie" />
                                <label className="mx-3 text-md text-gray-600" htmlFor="movie">Movie</label>
                                <input onChange={handleChange} className="" type="radio" name="type" id="show" value="show" />
                                <label className="mx-3 text-md text-gray-600" htmlFor="show">Show</label>

                            </div>
                        </div>

                        <div className="w-full flex flex-col mt-3 mr-5">
                            
                            <select defaultValue={'default'} onChange={handleChange} className="w-full p-1 border border-solid border-gray-600 rounded-lg outline-none" name="status" id="active">
                                <option value="default" disabled>Active</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>

                        </div>

                        
                        <div className="w-full flex flex-col mt-3 mr-5">
                            
                            <select defaultValue={['default']} className="h-96 p-3 border border-solid border-gray-600 rounded-lg outline-none overflow-y-hidden" onChange={handleSelect} multiple name="content" id="content">
                                <option value="default" disabled>Select movies or shows to add to this list</option>
                                {movies.map((movie) => (
                                    <option key={movie._id} value={movie._id}>{movie.title}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="flex w-full justify-center">
                            <button onClick={handleSubmit} className="w-[200px] border-none bg-blue-800 hover:bg-green-600 text-white px-3 py-2 font-semibold rounded-lg mt-8 cursor-pointer">Create New List</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default NewList;