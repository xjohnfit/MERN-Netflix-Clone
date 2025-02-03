import axios from "axios";
import { loginInitialize, loginSuccess, loginError, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginInitialize());
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, user);
        
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginError());
    }
};

export const logoutUser = (dispatch) => {
    dispatch(logout());
};