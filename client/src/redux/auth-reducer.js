import {authAPI} from "../api/api";

const SIGN_IN = 'auth-reducer/SIGN_IN';
const LOG_OUT = 'auth-reducer/LOG_OUT';

//actions creators
const signInSuccess = (userId) => {
    return {
        type: SIGN_IN,
        isAuth: true,
        userId,
    }
}
export const logOut = () => {
    return {
        type: LOG_OUT,
        isAuth: false,
        userId: null,
    }
}

//thunks creators
export const setAuthInfoTC = (formData) => {
    return async (dispatch) => {
        let response = await authAPI.register(formData);
        if (response.status === 201) {
            alert('You was registered, sign in for entering to your account');
        }
    }
}
export const signInTC = (formData) => {
    return async (dispatch) => {
        let data = await authAPI.signIn(formData);
        console.log(data);
        let userId = data.userId;
        let userToken = data.token;
        localStorage.setItem("userData", JSON.stringify({
            userId, userToken
        }));
        dispatch(signInSuccess(userId));
    }
}

const initialState = {
    isAuth: false,
    userId: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: action.isAuth,
                userId: action.userId,
            }
        case LOG_OUT:
            localStorage.removeItem("userData");
            return {
                ...state,
                isAuth: action.isAuth,
                userId: action.userId,
            }
        default:
            return state;
    }
}

export default authReducer;
