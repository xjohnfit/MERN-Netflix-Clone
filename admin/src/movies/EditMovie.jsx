import { FileUpload } from "@mui/icons-material";
import { useLocation } from 'react-router-dom';

const EditMovie = () => {

    const { state } = useLocation();

    return (
        <div className="flex-[6_6_0%] p-5">
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text-3xl font-semibold">Editing Movie: {state.movie.title}</h1>
                </div>
            </div>
            <div className="flex p-5 m-5 shadow-lg">
                <form className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <label className="mb-3 text-gray-500" htmlFor="">Movie ID:</label>
                        <input className="mb-3 p-1 outline-none border-b border-gray-400" disabled type="text" placeholder={state.movie._id} />

                        <label className="mb-3 text-gray-500" htmlFor="">Movie Title</label>
                        <input className="mb-3 p-1 outline-none border-b border-gray-400" type="text" placeholder={state.movie.title} />

                        <label className="mb-3 text-gray-500" htmlFor="">Description</label>
                        <textarea className="mb-3 p-1 outline-none border-b border-gray-400" placeholder={state.movie.desc} />

                        <label className="mb-3 text-gray-500" htmlFor="">Genre:</label>
                        <select className="mb-3 outline-none" name="genre" id="genre">
                            <option>{state.movie.genre}</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                        </select>

                        <label className="mb-3 text-gray-500" htmlFor="">Year</label>
                        <input className="mb-3 p-1 outline-none border-b border-gray-400" type="text" placeholder={state.movie.year} />

                        <label className="mb-3 text-gray-500" htmlFor="">Limit</label>
                        <input className="mb-3 p-1 outline-none border-b border-gray-400" type="text" placeholder={state.movie.limit} />

                        <label className="mb-3 text-gray-500" htmlFor="">Is Show:</label>
                        <select className="mb-3 outline-none" name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label className="mb-3 text-gray-500" htmlFor="">Status:</label>
                        <select className="mb-3 outline-none" name="active" id="active">
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>1
                        </select>

                        <label className="mb-3 text-gray-500" htmlFor="">Created At</label>
                        <input className="mb-3 p-1 outline-none border-b border-gray-400" type="text" placeholder={state.movie.createdAt}  disabled />
                        <label className="mb-3 text-gray-500" htmlFor="">Updated At</label>
                        <input className="mb-3 p-1 outline-none border-b border-gray-400" type="text" placeholder={state.movie.updatedAt}  disabled />

                    </div>
                    <div className='flex flex-col justify-between gap-10'>
                        <div className='flex items-center'>
                            <img className='w-64 h-64 rounded-xl object-cover mr-5' src={state.movie.img} alt="Avatar" />
                            <label htmlFor="file"><FileUpload className='cursor-pointer m-10' /></label>
                            <input type="file" id="file" className='hidden' />
                        </div>
                        <div className='flex items-center'>
                            <img className='w-64 h-64 rounded-xl object-cover mr-5' src={state.movie.imgTitle} alt="Avatar" />
                            <label htmlFor="file"><FileUpload className='cursor-pointer m-10' /></label>
                            <input type="file" id="file" className='hidden' />
                        </div>
                        <div className='flex items-center'>
                            <img className='w-64 h-64 rounded-xl object-cover mr-5' src={state.movie.trailer} alt="Trailer" />
                            <label htmlFor="file"><FileUpload className='cursor-pointer m-10' /></label>
                            <input type="file" id="file" className='hidden' />
                        </div>
                        <div className='flex items-center'>
                            <img className='w-64 h-64 rounded-xl object-cover mr-5' src={state.movie.video} alt="Video" />
                            <label htmlFor="file"><FileUpload className='cursor-pointer m-10' /></label>
                            <input type="file" id="file" className='hidden' />
                        </div>
                        <button className='rounded-xl w-28 p-2 self-end cursor-pointer bg-blue-800 text-white font-semibold'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EditMovie;