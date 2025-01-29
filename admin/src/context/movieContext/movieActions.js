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
  export const createMovieSuccess = (movie, message) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
    message: message,
  });
  
  export const createMovieFailure = (error) => ({
    type: "CREATE_MOVIE_FAILURE",
    payload: error,
  });
  

  //UPDATE MOVIE ACTION
  export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
  });
  
  export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
  });
  
  export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
  });
  

  //DELETE MOVIE ACTION
  export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
  });
  
  export const deleteMovieSuccess = (id, successMessage) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
    message: successMessage,
  });
  
  export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
  });