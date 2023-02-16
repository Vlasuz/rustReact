
export const SET_ATTACK = "SET_ATTACK"

const initialState = {
    array: []
}

export const reducerFightsAttack = (state = initialState, action) => {

    switch (action.type) {

        case SET_ATTACK:
            return {
                ...state,
                array: action.array
            }
        default:
            return state

    }
}

export function setAttack(array) {
    return {
        type: SET_ATTACK,
        array
    }
}