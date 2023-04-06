export const SET_SOUND = "SET_SOUND"

const initialState = {
    sound: ""
}

export const reducerSound = (state = initialState, action) => {

    switch (action.type) {

        case SET_SOUND:
            return {
                ...state,
                sound: action.sound
            }
        default:
            return state

    }
}

export function setSound(sound) {
    return {
        type: SET_SOUND,
        sound
    }
}