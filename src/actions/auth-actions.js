import * as service from '../services/authentication-service';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_PROFILE = 'SAVE_PROFILE';
// export const LOGGED_IN = 'LOGGED_IN';

export const register = async (dispatch, user) => {
    const response = await service.register(user);
    console.log(response)
    dispatch({
        type: REGISTER,
        response,
        isLoggedIn: true
    });
};

export const login = async (dispatch, user) => {
    const response = await service.login(user);
    dispatch({
        type: LOGIN,
        response,
        isLoggedIn: true
    });
};

// export const loggedIn = async (dispatch) => {
//     const response = await service.loggedIn();
//     dispatch({
//         type: LOGGED_IN,
//         response
//     });
// };

export const logout = async (dispatch) => {
    const response = await service.logout();
    dispatch({
        type: LOGOUT,
        response,
        isLoggedIn: false
    });
};