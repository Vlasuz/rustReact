
export const SET_RESPONSE = "SET_RESPONSE"

const initialState = {
    response: {}
}

export const reducerFightsResponse = (state = initialState, action) => {

    switch (action.type) {

        case SET_RESPONSE:
            return {
                ...state,
                response: action.response
            }
        default:
            return state

    }
}

export function setResponse(response) {
    return {
        type: SET_RESPONSE,
        response
    }
}