import {SHOP_LIST, SHOP_LIST_ADD} from "../types";

export const SET_SOCKET = "SET_SOCKET"

const initialState = {
    socket: {}
}

export const reducerFightsSocketCreate = (state = initialState, action) => {

    switch (action.type) {

        case SET_SOCKET:
            return {
                ...state,
                socket: action.socket
            }
        default:
            return state

    }
}

export function setSocket(socket) {
    return {
        type: SET_SOCKET,
        socket
    }
}