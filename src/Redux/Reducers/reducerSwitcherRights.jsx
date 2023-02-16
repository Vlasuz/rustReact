import {SWITCHER_RIGHTS} from "../types";

const initialState = {
    data: 'pr'
}

export const reducerSwitcherRights = (state = initialState, action) => {

    switch (action.type) {

        case SWITCHER_RIGHTS:
            return {
                ...state,
                data: action.data
            }
        default:
            return state

    }
}