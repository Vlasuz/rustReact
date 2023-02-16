import {AIRDROP_LENGTH_PLANE} from "../types";

const initialState = {
    length: 0
}

export const reducerAirdropLengthPlane = (state = initialState, action) => {

    switch(action.type) {

        case AIRDROP_LENGTH_PLANE:
            return{
                ...state,
                length: action.length
            }
        default:
            return state

    }
}