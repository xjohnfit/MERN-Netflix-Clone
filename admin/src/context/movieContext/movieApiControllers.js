import axios from 'axios';
import {
    createMovieFailure,
    createMovieStart,
    createMovieSuccess,
    deleteMovieFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,
} from './MovieActions';

//GET ALL MOVIES API CALL
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/movies`, {
            headers: {
                token:
                    'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesFailure());
    }
};

//CREATE MOVIE API CALL
export const createMovie = async (movie, dispatch) => {
    //call start action
    dispatch(createMovieStart());
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/movies/create`,
            movie,
            {
                headers: {
                    token:
                        'Bearer ' +
                        JSON.parse(localStorage.getItem('user')).token,
                },
            }
        );
        //call success action
        //dispatch function updates the state of the context
        dispatch(createMovieSuccess(res.data, 'Movie created successfully'));
    } catch (error) {
        //call failure action
        dispatch(createMovieFailure(error.response.data.message));
    }
};

//DELETE MOVIE BY ID API CALL
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_API_URL}/movies/delete/${id}`,
            {
                headers: {
                    token:
                        'Bearer ' +
                        JSON.parse(localStorage.getItem('user')).token,
                },
            }
        );
        dispatch(deleteMovieSuccess(id, 'Movie deleted successfully'));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
};
