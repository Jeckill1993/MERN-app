import {authAPI} from "../api/api";

const SET_AUTH_INFO = 'auth-reducer/SET_AUTH_INFO';
const SIGN_IN = 'auth-reducer/SIGN_IN';

const setAuthInfoAC = () => {
    return {
        type: SET_AUTH_INFO,
        isAuth: true
    }
}
const SignInSuccess = (userId) => {
    return {
        type: SIGN_IN,
        userId,
    }


}

export const setAuthInfoTC = (formData) => {
    return async (dispatch) => {
        let response = await authAPI.register(formData);
        if (response.status === 201) {
            dispatch(setAuthInfoAC(response));
        }
    }
}
export const signInTC = (formData) => {
    return async (dispatch) => {
        let response = await authAPI.signIn(formData);
        console.log(response);
    }
}

const initialState = {
    isAuth: false,
    userId: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case SIGN_IN:
            return {
                ...state,
                userId: action.userId,
            }
        default:
            return state;
    }
}

export default authReducer;
