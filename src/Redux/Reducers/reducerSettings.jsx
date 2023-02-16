export const SET_SETTINGS = 'SET_SETTINGS'

const initialState = {
    settings: {},
}

export const reducerSettings = (state = initialState, action) => {

    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                settings: action.settings
            }
        default:
            return state

    }
}


export function setSettings(settings) {
    return {
        type: SET_SETTINGS,
        settings
    }
}