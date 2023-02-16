export const SET_SESSION = "SET_SESSION"

const initialState = {
    session: {}
}

export const reducerSession = (state = initialState, action) => {

    switch (action.type) {

        case SET_SESSION:
            return {
                ...state,
                session: action.session
            }
        default:
            return state

    }
}

export function setSession(session) {
    return {
        type: SET_SESSION,
        session
    }
}