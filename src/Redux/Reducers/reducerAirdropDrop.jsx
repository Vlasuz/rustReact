import {AIRDROP_DROP_IS_DROP_DOWN, AIRDROP_DROP_SET_COODS} from "../types";

const initialState = {
    drop: {
        isDropDown: false,
        coodDrop: 0
    }
}

export const reducerAirdropDrop = (state = initialState, action) => {

    switch (action.type) {
        case AIRDROP_DROP_SET_COODS:
            return {
                ...state,
                drop: {
                    isDropDown: state.drop.isDropDown,
                    coodDrop: action.data
                }
            }
        case AIRDROP_DROP_IS_DROP_DOWN:
            return {
                ...state,
                drop: {
                    isDropDown: action.data,
                    coodDrop: state.drop.coodDrop
                }
            }
        default:
            return state

    }
}