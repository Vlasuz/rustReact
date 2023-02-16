import {AIRDROP_COUNT_SLEEPERS} from "../types";

const initialState = {
    sleepers: 0
}

export const reducerAirdropCountSleepers = (state = initialState, action) => {

    // console.log(action)

    switch(action.type) {

        case AIRDROP_COUNT_SLEEPERS:
            return{
                ...state,
                sleepers: action.sleepers
            }
        default:
            return state

    }
}