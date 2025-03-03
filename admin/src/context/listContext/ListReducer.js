const ListReducer = (state, action) => {
    switch (action.type) {

      //GET LISTS REDUCER
      case "GET_LISTS_START":
        return {
          lists: [],
          isFetching: true,
          error: false,
        };
      case "GET_LISTS_SUCCESS":
        return {
          lists: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_LISTS_FAILURE":
        return {
          lists: [],
          isFetching: false,
          error: true,
        };

      //CREATE LISTS REDUCER
      case "CREATE_LIST_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "CREATE_LIST_SUCCESS":
        return {
          lists: [...state.lists, action.payload],
          isFetching: false,
          successMessage: action.successMessage,
          error: false,
        };
      case "CREATE_LIST_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      //UPDATE LISTS REDUCER
      // case "UPDATE_LIST_START":
      //   return {
      //     ...state,
      //     isFetching: true,
      //     error: false,
      //   };
      // case "UPDATE_LIST_SUCCESS":
      //   return {
      //     movies: state.movies.map(
      //       (movie) => movie._id === action.payload._id && action.payload
      //     ),
      //     isFetching: false,
      //     error: false,
      //   };
      // case "UPDATE_LIST_FAILURE":
      //   return {
      //     ...state,
      //     isFetching: false,
      //     error: true,
      //   };

      //DELETE LIST REDUCER
      case "DELETE_LIST_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_LIST_SUCCESS":
        return {
          lists: state.lists.filter((list) => list._id !== action.payload),
          isFetching: false,
          error: false,
          successMessage: action.successMessage,
        };
      case "DELETE_LIST_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: action.error,
        };
      default:
        return { ...state };
    }
  };
  
  export default ListReducer;