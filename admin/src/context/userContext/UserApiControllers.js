import axios from 'axios';
import { getUsersStart, getUsersSuccess, getUsersFailure } from './UserActions';

// Get Users
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
            headers: {
                token:
                    'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
            },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    }
};

// Create User
export const createUser = async (user, dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/users/create`,
            user,
            {
                headers: {
                    token:
                        'Bearer ' +
                        JSON.parse(localStorage.getItem('user')).token,
                },
            }
        );
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    }
};
