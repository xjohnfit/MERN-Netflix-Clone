export const getUsersStart = () => ({
    type: 'USER_INITIALIZE'
});

export const getUsersSuccess = (users) => ({
    type: 'USER_SUCCESS',
    payload: users.users,
});

export const getUsersFailure = () => ({
    type: 'USER_ERROR',
});