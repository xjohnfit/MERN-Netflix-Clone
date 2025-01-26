const UserReducer = (state, action) => {
    switch (action.type) {
        case 'USER_INITIALIZE':
            return {
                ...state,
                users: null,
                loading: true,
                error: false,
            };
        case 'USER_SUCCESS':
            return {
                users: action.payload,
                loading: false,
                error: false,
            };
        case 'USER_ERROR':
            return {
                users: null,
                loading: false,
                error: true,
            };
        default:
            return { ...state };
    }
};

export default UserReducer;
