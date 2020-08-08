const GET_PROFILE = 'profile-reducer/GET_PROFILE';


const getProfileAC = (profile) => {
    return {
        type: GET_PROFILE,
        profile,
    }
}

let initialState = {
    personInfo: {},
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                personInfo: action.profile,
            }
        default:
            return {
                state,
            }
    }
}

export default profileReducer;