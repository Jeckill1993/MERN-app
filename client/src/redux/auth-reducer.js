const SET_AUTH_INFO = 'auth-reducer/SET_AUTH_INFO';

const setAuthInfoAC = (value) => {
    return {
        type: SET_AUTH_INFO,
        value
    }
}



const initialState = {
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO:
            return {
                ...state,
                isAuth: action.value,
            }
        default:
            return state;
    }
}

export default authReducer;
