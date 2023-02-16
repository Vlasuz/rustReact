import {AIRDROP_DROP_IS_DOWN} from "../types";

const initialState = {
    isDropDown: false
}

export const reducerAirdropDropIsDown = (state = initialState, action) => {

    switch (action.type) {
        case AIRDROP_DROP_IS_DOWN:
            return {
                ...state,
                isDropDown: action.bool ? true : false
            }
        default:
            return state

    }
}