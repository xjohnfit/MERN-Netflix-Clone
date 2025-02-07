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
    updateMovieFailure,
    updateMovieStart,
    updateMovieSuccess,
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

//GET MOVIE BY ID API CALL
export const getMovieById = async (id, dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`, {
            headers: {
                token:
                    'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
            },
        });
        dispatch(getMoviesSuccess(res.data, res.data.successMessage));
    } catch (error) {
        dispatch(getMoviesFailure(error.response.data.message));
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
        dispatch(createMovieSuccess(res.data.movie, res.data.successMessage));
    } catch (error) {
        //call failure action
        dispatch(createMovieFailure(error.response.data.message));
    }
};

//UPDATE MOVIE API CALL
export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
        const movieId = movie._id;
        const res = await axios.put(
            `${import.meta.env.VITE_API_URL}/movies/update/${movieId}`,
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
        dispatch(updateMovieSuccess(res.data, res.data.successMessage));
    } catch (error) {

        //call failure action
        dispatch(updateMovieFailure(error.data.message));
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
        dispatch(deleteMovieSuccess(id, res.data.successMessage));
        console.log(res.data.successMessage);
    } catch (error) {
        dispatch(deleteMovieFailure(error.response.data.message));
    }
};
