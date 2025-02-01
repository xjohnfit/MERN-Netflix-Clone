import { createContext, useReducer } from "react";
//its like the MovieReducer file was here
import MovieReducer from "./MovieReducer";

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  error: false,
  successMessage: false,
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        successMessage: state.successMessage,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};