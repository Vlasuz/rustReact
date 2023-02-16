import {AIRDROP_STEP} from "../types";

const initialState = {
    step: 1
}

export const reducerAirdropStep = (state = initialState, action) => {

    switch(action.type) {

        case AIRDROP_STEP:
            return{
                ...state,
                step: action.step
            }
        default:
            return state

    }
}