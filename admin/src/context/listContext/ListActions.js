//GET LISTS ACTION
export const getListsStart = () => ({
    type: "GET_LISTS_START",
  });
  
  export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
  });
  
  export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
  });
  

  //CREATE LISTS ACTION
  export const createListStart = () => ({
    type: "CREATE_LIST_START",
  });
  
  export const createListSuccess = (list, successMessage) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
    successMessage: successMessage,
    error: false,
  });
  
  export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE",
  });
  

  // //UPDATE MOVIE ACTION
  // export const updateMovieStart = () => ({
  //   type: "UPDATE_MOVIE_START",
  // });
  
  // export const updateMovieSuccess = (movie) => ({
  //   type: "UPDATE_MOVIE_SUCCESS",
  //   payload: movie,
  // });
  
  // export const updateMovieFailure = () => ({
  //   type: "UPDATE_MOVIE_FAILURE",
  // });
  

  //DELETE LIST ACTION
  export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
  });
  
  export const deleteListSuccess = (id, successMessage) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
    successMessage: successMessage,
    error: false,
  });
  
  export const deleteListFailure = (error) => ({
    type: "DELETE_LIST_FAILURE",
    error: error,
  });