export const loginInitialize = () => ({
    type: 'LOGIN_INITIALIZE'
});

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const loginError = (error) => ({
    type: 'LOGIN_ERROR',
    payload: error,
});

//LOGOUT

export const logout = () => ({
    type: 'LOGOUT'
});