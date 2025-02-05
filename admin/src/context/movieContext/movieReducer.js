const MovieReducer = (state, action) => {
    switch (action.type) {
      case "GET_MOVIES_START":
        return {
          movies: [],
          isFetching: true,
          error: false,
        };
      case "GET_MOVIES_SUCCESS":
        return {
          movies: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_MOVIES_FAILURE":
        return {
          movies: [],
          isFetching: false,
          error: false,
        };

      //CREATE MOVIE REDUCER
      case "CREATE_MOVIE_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "CREATE_MOVIE_SUCCESS":
        return {
          movies: [...state.movies, action.payload],
          isFetching: false,
          error: false,
          successMessage: action.successMessage,
        };
      case "CREATE_MOVIE_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };

      //UPDATE MOVIE REDUCER
      case "UPDATE_MOVIE_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "UPDATE_MOVIE_SUCCESS":
        return {
          movies: state.movies.map(
            (movie) => movie._id === action.payload._id && action.payload
          ),
          isFetching: false,
          error: false,
          successMessage: action.successMessage,
        };
      case "UPDATE_MOVIE_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };

      //DELETE MOVIE REDUCER
      case "DELETE_MOVIE_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_MOVIE_SUCCESS":
        return {
          movies: state.movies.filter((movie) => movie._id !== action.payload),
          isFetching: false,
          error: false,
          successMessage: action.successMessage,
        };
      case "DELETE_MOVIE_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default MovieReducer;