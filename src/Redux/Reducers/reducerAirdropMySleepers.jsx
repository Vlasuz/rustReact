export const SET_MY_SLEEPERS = "SET_MY_SLEEPERS"
export const BUY_MY_SLEEPERS = "BUY_MY_SLEEPERS"
export const ADD_MY_SLEEPERS = "ADD_MY_SLEEPERS"
export const REMOVE_BOUGHT_SLEEPER = "REMOVE_BOUGHT_SLEEPER"
export const REMOVE_SET_SLEEPER = "REMOVE_SET_SLEEPER"
export const REMOVE_ONE_SET_SLEEPER = "REMOVE_ONE_SET_SLEEPER"
export const CLEAR_SLEEPER = "CLEAR_SLEEPER"

const initialState = {
    boughtSleepers: [],
    setSleepers: []
}

export const reducerMySleepers = (state = initialState, action) => {

    switch (action.type) {
        case BUY_MY_SLEEPERS:
            let i = 0;
            let emptyArray = []
            while (i < action.sleepers) {
                i++
                emptyArray.push({
                    x_pos: null,
                    y_pos: null,
                })
            }

            return {
                ...state,
                boughtSleepers: emptyArray,
                setSleepers: state.setSleepers
            }
        case SET_MY_SLEEPERS:
            return {
                ...state,
                boughtSleepers: state.boughtSleepers,
                setSleepers: [...state.setSleepers, action.sleepers]
            }
        case ADD_MY_SLEEPERS:

            state.boughtSleepers.push({
                x_pos: null,
                y_pos: null,
            })

            return {
                ...state,
                boughtSleepers: state.boughtSleepers,
                setSleepers: state.setSleepers
            }
        case REMOVE_BOUGHT_SLEEPER:
            state.boughtSleepers.pop()

            return {
                ...state,
                boughtSleepers: state.boughtSleepers,
                setSleepers: state.setSleepers
            }
        case REMOVE_SET_SLEEPER:
            return {
                ...state,
                boughtSleepers: state.boughtSleepers,
                setSleepers: []
            }
        case REMOVE_ONE_SET_SLEEPER:
            const newArray = state.setSleepers.filter(item => item.x_pos !== action.bag.x_pos && item.y_pos !== action.bag.y_pos)

            return {
                ...state,
                boughtSleepers: state.boughtSleepers,
                setSleepers: newArray
            }
        case CLEAR_SLEEPER:
            return {
                ...state,
                boughtSleepers: [],
                setSleepers: []
            }
        default:
            return state

    }
}

export function setSleepers(sleepers) {
    return {
        type: SET_MY_SLEEPERS,
        sleepers,
    }
}

export function buySleepers(sleepers) {
    return {
        type: BUY_MY_SLEEPERS,
        sleepers
    }
}

export function addMySleepers() {
    return {
        type: ADD_MY_SLEEPERS,
    }
}

export function removeBoughtSleeper() {
    return {
        type: REMOVE_BOUGHT_SLEEPER
    }
}

export function removeSetSleeper() {
    return {
        type: REMOVE_SET_SLEEPER
    }
}

export function removeOneSetSleeper(bag) {
    return {
        type: REMOVE_ONE_SET_SLEEPER,
        bag
    }
}

export function clearSleeper() {
    return {
        type: CLEAR_SLEEPER
    }
}