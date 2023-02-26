export const SET_SOCKET_AIRDROP = "SET_SOCKET_AIRDROP"
export const SET_SOCKET_AIRDROP_RESPONSE = "SET_SOCKET_AIRDROP_RESPONSE"

const initialState = {
    socket: {},
    response: {}
}

export const reducerAirdropSocket = (state = initialState, action) => {

    switch (action.type) {

        case SET_SOCKET_AIRDROP:
            return {
                ...state,
                socket: action.socket,
                response: state.response
            }
        case SET_SOCKET_AIRDROP_RESPONSE:
            return {
                ...state,
                socket: state.socket,
                response: action.response
            }
        default:
            return state

    }
}

export function setSocketAirdrop(socket) {
    return {
        type: SET_SOCKET_AIRDROP,
        socket
    }
}
export function setSocketAirdropResponse(response) {
    return {
        type: SET_SOCKET_AIRDROP_RESPONSE,
        response
    }
}