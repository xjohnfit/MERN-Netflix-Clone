import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

import { MovieContext } from "../context/movieContext/MovieContext";
import { ListContext } from '../context/listContext/ListContext';
import { getMovies } from '../context/movieContext/MovieApiControllers';

const EditList = () => {

  const { state } = useLocation();

  const { dispatch, successMessage, error, lists } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  const [list, setList] = useState(state.list);
  const [selectedOptions, setSelectedOptions] = useState([]);


  //TODO set selected movies or shows to add or remove from list
  console.log(movies);


  useEffect(() => {
    getMovies(dispatchMovie);

    setSelectedOptions(list.content.map((item) => movies.find((movie) => movie._id === item)).filter((item) => item !== undefined));
  }, [successMessage, error]);

  const handleChange = (e) => {
    console.log('handleChange', e.target.value);
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
        setList({ ...list, content: value });
  };

  const handleSubmit = (e) => {
    console.log('submit');
  };


  return (
    <div className="flex-[6_6_0%] p-5">
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
      <h1 className="text-3xl font-semibold">
        Editing List:{' '}
        <span className="text-red-700 text-3xl font-bold">
          {list.title}
        </span>
      </h1>
      <form className="flex flex-wrap flex-col">
        <div className="flex">
          <div className="w-full flex flex-col mt-3 mr-5">

            <input onChange={handleChange} name="title" className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" value={list.title} />
          </div>
          <div className="w-full flex flex-col mt-3 mr-5">

            {/* ${defaultValue == 'Genre' ? 'border-gray-300' : 'border-gray-600'} */}
            <select onChange={handleChange} value={list.genre} className={`w-full p-1 border border-solid border-gray-600 rounded-lg outline-none`} name="genre">
              <option value="default" className="text-gray-400" disabled="disabled">Genre</option>
              <option value="Action">Action</option>
              <option value="Animation">Animation</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Documentary">
                Documentary
              </option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Historical">
                Historical
              </option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-fi</option>
              <option value="Thriller">Thriller</option>
              <option value="Western">Western</option>
            </select>
          </div>

        </div>

        <div className="flex">

          <div className="w-full flex flex-col mt-3 mr-5 ">

            <div className="p-1 border border-solid border-gray-600 rounded-lg flex items-center justify-start">
              <input onChange={handleChange} className="ml-3" type="radio" name="type" id="movie" value="movie" checked={list.type === 'movie'} />
              <label className="mx-3 text-md text-black" htmlFor="movie">Movie</label>
              <input onChange={handleChange} className="" type="radio" name="type" id="show" value="show" checked={list.type === 'show'} />
              <label className="mx-3 text-md text-black" htmlFor="show">Show</label>

            </div>
          </div>

          <div className="w-full flex flex-col mt-3 mr-5">

            <select value={list.status} onChange={handleChange} className="w-full p-1 border border-solid border-gray-600 rounded-lg outline-none" name="status" id="active">
              <option value="default" disabled>Status</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>

        </div>


        <div className="w-full flex flex-col mt-3 mr-5">

          <select defaultValue={['default']} className="h-96 p-3 border border-solid border-gray-600 rounded-lg outline-none" onChange={handleSelect} multiple name="content" id="content">
            <option value="default" disabled>Select movies or shows to remove from list</option>
            {movies.map((item) => (
              <option key={item._id} value={item._id}>{item.title}</option>
            ))}
          </select>
        </div>

        <div className="flex w-full justify-center">
          <button onClick={handleSubmit} className="w-[200px] border-none bg-blue-800 hover:bg-green-600 text-white px-3 py-2 font-semibold rounded-lg mt-8 cursor-pointer">Update List</button>
        </div>
      </form>
    </div>
  );
};
export default EditList;