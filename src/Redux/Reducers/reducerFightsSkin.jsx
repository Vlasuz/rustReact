import {SHOP_LIST, SHOP_LIST_ADD} from "../types";

export const SET_SKIN = "SET_SKIN"

const initialState = {
    my_skin: {},
    op_skin: {}
}

export const reducerFightsSkin = (state = initialState, action) => {

    switch (action.type) {

        case SET_SKIN:
            return {
                ...state,
                my_skin: action.skin && action.whom === 'me' && action.skin,
                op_skin: action.skin && action.whom === 'opponent' && action.skin,
            }
        default:
            return state

    }
}

export function setSkin(whom, skin) {
    return {
        type: SET_SKIN,
        whom,
        skin
    }
}