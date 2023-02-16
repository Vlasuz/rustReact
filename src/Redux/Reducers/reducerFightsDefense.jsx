
export const SET_DEFENSE = "SET_DEFENSE"

const initialState = {
    array: []
}

export const reducerFightsDefense = (state = initialState, action) => {

    switch (action.type) {

        case SET_DEFENSE:
            return {
                ...state,
                array: action.array
            }
        default:
            return state

    }
}

export function setDefense(array) {
    return {
        type: SET_DEFENSE,
        array
    }
}