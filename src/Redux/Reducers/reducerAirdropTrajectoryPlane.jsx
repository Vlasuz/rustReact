import {AIRDROP_TRAJECTORY_PLANE} from "../types";

const initialState = {
    data: 0
}

export const reducerAirdropTrajectoryPlane = (state = initialState, action) => {

    switch(action.type) {

        case AIRDROP_TRAJECTORY_PLANE:
            return{
                ...state,
                data: action.data
            }
        default:
            return state

    }
}