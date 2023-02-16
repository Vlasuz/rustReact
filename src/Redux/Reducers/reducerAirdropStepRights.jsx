import {AIRDROP_STEP_RIGHTS} from "../types";

const initialState = {
    step: 1
}

export const reducerAirdropStepRights = (state = initialState, action) => {

    switch(action.type) {

        case AIRDROP_STEP_RIGHTS:
            return{
                ...state,
                step: action.step
            }
        default:
            return state

    }
}