export const SET_COODS = "SET_COODS"

const initialState = {
    coods: {
        x: 0,
        y: 0
    }
}

export const reducerCoodsSwipeMap = (state = initialState, action) => {

    switch (action.type) {

        case SET_COODS:
            return {
                ...state,
                coods: action.coods
            }
        default:
            return state

    }
}

export function setCoods(coods) {
    return {
        type: SET_COODS,
        coods
    }
}