export const loginInitialize = () => ({
    type: 'LOGIN_INITIALIZE'
});

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const loginError = () => ({
    type: 'LOGIN_ERROR',
});

//LOGOUT

export const logout = () => ({
    type: 'LOGOUT'
});