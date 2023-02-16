import {USER_DATA} from "../types";

export const ADD_TRADE_LINK = "ADD_TRADE_LINK"

const initialState = {
    data: {}
}

export const reducerUserData = (state = initialState, action) => {

    switch(action.type) {

        case USER_DATA:
            return{
                ...state,
                data: action.data
            }
        case ADD_TRADE_LINK:
            return{
                ...state,
                data: action.link
            }
        default:
            return state

    }
}

export function addTradeLink(link) {
    return {
        type: ADD_TRADE_LINK,
        link
    }
}
