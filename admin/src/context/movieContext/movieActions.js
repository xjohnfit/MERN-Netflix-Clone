//GET MOVIES
export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
  });
  
  export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
  });
  
  export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
  });
  

  //CREATE MOVIE ACTION
  export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
  });
  
  //gets response from api call as parameter
  export const createMovieSuccess = (movie, successMessage) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
    successMessage: successMessage,
  });
  
  export const createMovieFailure = (error) => ({
    type: "CREATE_MOVIE_FAILURE",
    payload: error,
  });
  

  //UPDATE MOVIE ACTION
  export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
  });
  
  export const updateMovieSuccess = (movie, message) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
    successMessage: message,
  });
  
  export const updateMovieFailure = (error) => ({
    type: "UPDATE_MOVIE_FAILURE",
    payload: error,
  });
  

  //DELETE MOVIE ACTION
  export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
  });
  
  export const deleteMovieSuccess = (id, successMessage) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
    successMessage: successMessage,
    error: false,
  });
  
  export const deleteMovieFailure = (error) => ({
    type: "DELETE_MOVIE_FAILURE",
    error: error,
  });