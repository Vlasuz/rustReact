import {AUTH} from "../types";

const initialState = {
    auth: false
}

export const reducerAuth = (state = initialState, action) => {

    switch(action.type) {

        case AUTH:
            return{
                ...state,
                auth: action.auth
            }
        default:
            return state

    }
}
