import axios from 'axios';
import {
    createListFailure,
    createListStart,
    createListSuccess,
    deleteListFailure,
    deleteListStart,
    deleteListSuccess,
    getListsFailure,
    getListsStart,
    getListsSuccess,
} from './ListActions';

//GET LISTS
export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/lists`, {
            headers: {
                token:
                    'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFailure());
    }
};

//CREATE A LIST
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/lists/create`,
            list,
            {
                headers: {
                    token:
                        'Bearer ' +
                        JSON.parse(localStorage.getItem('user')).token,
                },
            }
        );
        dispatch(createListSuccess(res.data.list, res.data.successMessage));
        console.log(res.data.successMessage)
    } catch (err) {
        dispatch(createListFailure());
    }
};

//delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_API_URL}/lists/delete/${id}`,
            {
                headers: {
                    token:
                        'Bearer ' +
                        JSON.parse(localStorage.getItem('user')).token,
                },
            }
        );
        dispatch(deleteListSuccess(id, res.data.successMessage));
    } catch (error) {
        dispatch(deleteListFailure(error.response.data.message));
    }
};
