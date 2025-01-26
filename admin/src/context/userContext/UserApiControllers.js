import axios from "axios";
import { getUsersStart, getUsersSuccess, getUsersFailure } from "./UserActions";

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
        },
      });
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailure());
    }
  };