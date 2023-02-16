import {AIRDROP_TIMER_SECONDS} from "../types";

const initialState = {
    seconds: 10
}

export const reducerAirdropTimerSecond = (state = initialState, action) => {

    switch(action.type) {

        case AIRDROP_TIMER_SECONDS:
            return{
                ...state,
                seconds: action.seconds ? action.seconds : state.seconds - 1
            }
        default:
            return state

    }
}